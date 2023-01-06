import React from 'react'
import Grid from '../Grid/Grid'
import { Container } from 'react-bootstrap'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import { getData } from '../../utils/getData'
import { useQuery } from '@tanstack/react-query'

const DailyTrendings = () => {
  const { data, status } = useQuery(['trendingsdaily'], () =>
    getData('/trending/all/day')
  )

  return (
    <Container className='pb-5'>
      <h2 className='text-center text-white mb-5'>Daily Trendings</h2>
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

export default DailyTrendings
