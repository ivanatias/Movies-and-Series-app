import React, { useState } from 'react'
import Grid from '../Grid/Grid'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import Search from '../Search/Search'
import Genres from '../Genres/Genres'
import { Container } from 'react-bootstrap'
import { useFetchData } from '../../hooks/useFetchData'
import { useGenres } from '../../hooks/useGenres'

const TVGrid = ({ search }) => {
  const [selectedGenres, setSelectedGenres] = useState([])

  const genresForUrl = useGenres(selectedGenres)
  const endpoint = search
    ? '/search/tv?query=' + search
    : `/discover/tv?&with_genres=${genresForUrl}`

  const { data, status, isFetchingNextPage } = useFetchData(
    endpoint,
    'tvseries',
    search,
    genresForUrl
  )

  return (
    <Container className='py-5'>
      <h2 className='text-center text-white mb-3'>TV Series</h2>
      <Search />
      {!search && (
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

export default TVGrid
