import React from 'react'
import Grid from '../Grid/Grid'
import { Container } from 'react-bootstrap'
import { useData } from '../../hooks/useData'

const DailyTrendings = ({ initialData }) => {
  const { data } = useData({
    endpoint: '/trending/all/day',
    queryKey: ['trendingsdaily'],
    initialData
  })

  return (
    <Container className='pb-5'>
      <h2 className='text-center text-white mb-5'>Daily Trendings</h2>
      <Grid gridItems={data.results} />
    </Container>
  )
}

export default DailyTrendings
