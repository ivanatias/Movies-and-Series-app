import React, { useState } from 'react'
import Grid from '../Grid/Grid'
import { Container } from 'react-bootstrap'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import Search from '../Search/Search'
import Genres from '../Genres/Genres'
import { useFetchData } from '../../hooks/useFetchData'
import { useGenres } from '../../hooks/useGenres'

const MoviesGrid = ({ search }) => {
  const [selectedGenres, setSelectedGenres] = useState([])

  const genresForUrl = useGenres(selectedGenres)

  const endpoint = search
    ? '/search/movie?query=' + search
    : `/discover/movie?sort_by=popularity.desc&with_genres=${genresForUrl}`

  const { data, status, isFetchingNextPage } = useFetchData(
    endpoint,
    'movies',
    search,
    genresForUrl
  )

  return (
    <Container className='py-5'>
      <h2 className='text-center text-white mb-3'>Movies</h2>
      <Search type='movie' />
      {!search && (
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
        data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            <Grid gridItems={page.results} />
          </React.Fragment>
        ))
      )}
      {isFetchingNextPage && <Loading />}
    </Container>
  )
}

export default MoviesGrid
