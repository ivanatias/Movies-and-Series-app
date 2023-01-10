import React, { useState } from 'react'
import Grid from '../components/Grid/Grid'
import Error from '../components/Error/Error'
import Loading from '../components/Loading/Loading'
import Search from '../components/Search/Search'
import Genres from '../components/Genres/Genres'
import { Container } from 'react-bootstrap'
import { useFetchData } from '../hooks/useFetchData'
import { useGenres } from '../hooks/useGenres'
import { getInfiniteData } from '../utils/getInfiniteData'
import { useLoaderData } from 'react-router-dom'

const tvQuery = ({ endpoint, searchQuery }) => ({
  queryKey: ['tvseries', searchQuery],
  queryFn: () => getInfiniteData({ endpoint, page: 1 })
})

export const loader =
  queryClient =>
  async ({ request }) => {
    const url = new URL(request.url)
    const searchQuery = url.searchParams.get('search')
    const endpoint = searchQuery
      ? `/search/tv?query==${searchQuery}`
      : '/discover/tv?sort_by=popularity.desc'

    const query = tvQuery({ endpoint, searchQuery })

    const initialTvSeries =
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))

    return {
      initialTvSeries,
      searchQuery
    }
  }

const SeriesPage = () => {
  const { initialTvSeries, searchQuery } = useLoaderData()

  const [selectedGenres, setSelectedGenres] = useState([])

  const genresForUrl = useGenres(selectedGenres)
  const endpoint = searchQuery
    ? '/search/tv?query=' + searchQuery
    : `/discover/tv?sort_by=popularity.desc&with_genres=${genresForUrl}`

  const { data, status, isFetchingNextPage } = useFetchData(
    endpoint,
    'tvseries',
    searchQuery,
    genresForUrl,
    initialTvSeries
  )

  return (
    <Container className='py-5'>
      <h2 className='text-center text-white mb-3'>TV Series</h2>
      <Search type='tv' initialSearchValue={searchQuery} />
      {!searchQuery && (
        <Genres
          type='tv'
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
        />
      )}
      {status === 'loading' ? (
        <Loading />
      ) : status === 'error' ? (
        <Error />
      ) : (
        data?.pages?.map((page, index) => (
          <React.Fragment key={index}>
            <Grid gridItems={page.results} />
          </React.Fragment>
        ))
      )}
      {isFetchingNextPage && <Loading />}
    </Container>
  )
}

export default SeriesPage
