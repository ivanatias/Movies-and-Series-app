import React from 'react'
import Grid from '../Grid/Grid'
import { Container } from 'react-bootstrap'
import { useData } from '../../hooks/useData'

const WeeklyTrendings = ({ initialData }) => {
  const { data } = useData({
    endpoint: '/trending/all/week',
    queryKey: ['trendingsweek'],
    initialData
  })

  return (
    <Container className='py-5'>
      <h2 className='text-center text-white mb-5'>Trendings of the Week</h2>
      <Grid gridItems={data.results} />
    </Container>
  )
}

export default WeeklyTrendings
