import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Grid from '../components/Grid/Grid'
import Error from '../components/Error/Error'
import Loading from '../components/Loading/Loading'
import Search from '../components/Search/Search'
import Genres from '../components/Genres/Genres'
import { useLoaderData } from 'react-router-dom'
import { useFetchData } from '../hooks/useFetchData'
import { useGenres } from '../hooks/useGenres'
import { getInfiniteData } from '../utils/getInfiniteData'

const moviesQuery = ({ endpoint, searchQuery }) => {
  return {
    queryKey: ['movies', searchQuery],
    queryFn: () => getInfiniteData({ endpoint, page: 1 })
  }
}

export const loader =
  queryClient =>
  async ({ request }) => {
    const url = new URL(request.url)
    const searchQuery = url.searchParams.get('search')
    const endpoint = searchQuery
      ? `/search/movie?query=${searchQuery}`
      : '/discover/movie?sort_by=popularity.desc'

    const query = moviesQuery({ endpoint, searchQuery })

    const initialMovies =
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))

    return {
      initialMovies,
      searchQuery
    }
  }

const MoviesPage = () => {
  const { initialMovies, searchQuery } = useLoaderData()

  const [selectedGenres, setSelectedGenres] = useState([])

  const genresForUrl = useGenres(selectedGenres)

  const endpoint = searchQuery
    ? '/search/movie?query=' + searchQuery
    : `/discover/movie?sort_by=popularity.desc&with_genres=${genresForUrl}`

  const { data, status, isFetchingNextPage } = useFetchData(
    endpoint,
    'movies',
    searchQuery,
    genresForUrl,
    initialMovies
  )

  return (
    <Container className='py-5'>
      <h2 className='text-center text-white mb-3'>Movies</h2>
      <Search type='movie' initialSearchValue={searchQuery} />
      {!searchQuery && (
        <Genres
          type='movie'
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

export default MoviesPage
