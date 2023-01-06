import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import { getData } from '../../utils/getData'
import { useQuery } from '@tanstack/react-query'
import ItemCard from '../ItemCard/ItemCard'
import Empty from '../Empty/Empty'

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
        data && (
          <Row className='g-4 mx-auto'>
            {data?.results.map(item => (
              <ItemCard item={item} key={item.id} />
            ))}
            {data.results.length === 0 && <Empty />}
          </Row>
        )
      )}
    </Container>
  )
}

export default DailyTrendings
