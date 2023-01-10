import React, { useState } from 'react'
import Grid from '../components/Grid/Grid'
import Error from '../components/Error/Error'
import Loading from '../components/Loading/Loading'
import Search from '../components/Search/Search'
import Genres from '../components/Genres/Genres'
import { Container } from 'react-bootstrap'
import { useLoaderData } from 'react-router-dom'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { getInfiniteData } from '../utils/getInfiniteData'
import { getTVEndpoint, concatGenres } from '../utils/helpers'

const tvQuery = ({ endpoint, searchQuery }) => ({
  queryKey: ['tvseries', searchQuery],
  queryFn: () => getInfiniteData({ endpoint, page: 1 })
})

export const loader =
  queryClient =>
  async ({ request }) => {
    const url = new URL(request.url)
    const searchQuery = url.searchParams.get('search') ?? ''
    const endpoint = getTVEndpoint({ searchQuery })

    const query = tvQuery({ endpoint, searchQuery })

    const initialTvSeries = await queryClient.ensureQueryData(query)

    return {
      initialTvSeries,
      searchQuery
    }
  }

const SeriesPage = () => {
  const { initialTvSeries, searchQuery } = useLoaderData()

  const [selectedGenres, setSelectedGenres] = useState([])

  const genresForUrl = concatGenres(selectedGenres)

  const endpoint = getTVEndpoint({ genres: genresForUrl, searchQuery })

  const { data, status, isFetchingNextPage } = useInfiniteScroll({
    endpoint,
    queryKey: ['tvseries', genresForUrl, searchQuery],
    initialData: initialTvSeries
  })

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
