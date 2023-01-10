import React from 'react'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import Cast from './Cast'
import Video from './Video'
import { Row, Col } from 'react-bootstrap'
import { useFetchDetails } from '../../hooks/useFetchDetails'
import { getImage } from '../../utils/getImage'
import { getDetailsEndpoint } from '../../utils/helpers'

// TODO: Fetch everything from the item (cast, videos, etc) in one single API call.

const Info = ({ item, itemType }) => {
  const imageUrl = getImage(item.poster_path, 500)

  const endpoint = getDetailsEndpoint({ itemType, id: item.id })

  const { data, status } = useFetchDetails(endpoint, 'details', item.id)

  return status === 'loading' ? (
    <Loading />
  ) : status === 'error' ? (
    <Error />
  ) : data ? (
    <>
      <Row className='g-3 mx-auto'>
        <Col md={6}>
          <div className='d-flex justify-content-center'>
            <img
              src={imageUrl}
              alt={data.title || data.name}
              className='img-fluid rounded'
              width={500}
            />
          </div>
        </Col>
        <Col md={6}>
          <p className='text-white'>
            <strong>Description:</strong>{' '}
            {data.overview ? data.overview : 'No description available'}
          </p>
          <p className='text-white'>
            <strong>Genres:</strong>{' '}
            {data.genres.length !== 0
              ? data.genres.map(genre => genre.name).join(', ')
              : 'Unknown Genres'}
          </p>
          <p className='text-white'>
            <strong>Original Language:</strong>{' '}
            {data.original_language.length !== 0
              ? data.original_language.toUpperCase()
              : 'Unknown'}
          </p>
          <p className='text-white'>
            <strong>Status:</strong> {data.status ? data.status : 'Unknown'}
          </p>
          <p className='text-white'>
            <strong>Production Companies:</strong>{' '}
            {data.production_companies.length !== 0
              ? data.production_companies
                  .map(companie => companie.name)
                  .join(', ')
              : 'No information available'}
          </p>
          <p className='text-white'>
            <strong>Production Countries:</strong>{' '}
            {data.production_countries.length !== 0
              ? data.production_countries
                  .map(country => country.name)
                  .join(', ')
              : 'No information available'}
          </p>
        </Col>
      </Row>
      <Row className='g-3 mx-auto pt-5'>
        <h3 className='text-center'>Cast:</h3>
        <Col>
          <Cast id={item.id} itemType={itemType} />
        </Col>
      </Row>
      <Row className='g-3 mx-auto pt-5'>
        <Col>
          <Video id={item.id} itemType={itemType} />
        </Col>
      </Row>
    </>
  ) : (
    <div className='d-flex justify-content-center text-white lead m-5'>
      Sorry, nothing to show about this
    </div>
  )
}

export default Info
