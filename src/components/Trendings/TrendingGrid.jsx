import React from 'react'
import Grid from '../Grid/Grid'
import { Container } from 'react-bootstrap'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import { getData } from '../../utils/getData'
import { useQuery } from '@tanstack/react-query'

const TrendingGrid = () => {
  const { data, status } = useQuery(['trendingsweek'], () =>
    getData('/trending/all/week')
  )

  return (
    <Container className='py-5'>
      <h2 className='text-center text-white mb-5'>Trendings of the Week</h2>
      {status === 'loading' ? (
        <Loading />
      ) : status === 'error' ? (
        <Error />
      ) : (
        <Grid gridItems={data.results} />
      )}
    </Container>
  )
}

export default TrendingGrid
