import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import Grid from '../components/Grid/Grid'
import Error from '../components/Error/Error'
import Loading from '../components/Loading/Loading'
import Search from '../components/Search/Search'
import Genres from '../components/Genres/Genres'
import { useLoaderData } from 'react-router-dom'
import { useInfiniteScroll } from '../hooks/useInfiniteScroll'
import { getInfiniteData } from '../utils/getInfiniteData'
import { getMoviesEndpoint, concatGenres } from '../utils/helpers'

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
    const searchQuery = url.searchParams.get('search') ?? ''
    const endpoint = getMoviesEndpoint({ searchQuery })

    const query = moviesQuery({ endpoint, searchQuery })

    const initialMovies = await queryClient.ensureQueryData(query)

    return {
      initialMovies,
      searchQuery
    }
  }

const MoviesPage = () => {
  const { initialMovies, searchQuery } = useLoaderData()

  const [selectedGenres, setSelectedGenres] = useState([])

  const genresForUrl = concatGenres(selectedGenres)

  const endpoint = getMoviesEndpoint({ genres: genresForUrl, searchQuery })

  const { data, status, isFetchingNextPage } = useInfiniteScroll({
    endpoint,
    queryKey: ['movies', genresForUrl, searchQuery],
    initialData: initialMovies
  })

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
