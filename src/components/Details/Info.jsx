import React from 'react'
import Loading from '../Loading/Loading'
import Error from '../Error/Error'
import Cast from './Cast'
import Video from './Video'
import { Row, Col } from 'react-bootstrap'
import { useData } from '../../hooks/useData'
import { getImage } from '../../utils/getImage'
import { getDetailsEndpoint, formatListFromArray } from '../../utils/helpers'
import placeholder from '../../images/movieplaceholder.png'

const Info = ({ item, itemType }) => {
  const imageUrl = getImage(item.poster_path, 500)

  const endpoint = getDetailsEndpoint({ itemType, id: item.id })

  const { data, status } = useData({ endpoint, queryKey: ['details', item.id] })

  if (!data && status !== 'loading') {
    return (
      <div className='d-flex justify-content-center text-white lead m-5'>
        Sorry, nothing to show about this
      </div>
    )
  }

  if (status === 'loading') return <Loading />

  if (status === 'error') return <Error />

  const genresList = formatListFromArray({
    array: data.genres.map(genre => genre.name),
    fallback: 'Unknown genres'
  })

  const productionCompaniesList = formatListFromArray({
    array: data.production_companies.map(company => company.name),
    fallback: 'Unknown companies'
  })

  const productionCountriesList = formatListFromArray({
    array: data.production_countries.map(country => country.name),
    fallback: 'Unknown countries'
  })

  return (
    <>
      <Row className='g-3 mx-auto'>
        <Col md={6}>
          <div className='d-flex justify-content-center'>
            <img
              src={imageUrl ?? placeholder}
              alt={data.title ?? data.name}
              className='img-fluid rounded'
              width={500}
            />
          </div>
        </Col>
        <Col md={6}>
          <p className='text-white'>
            <strong>Description:</strong>{' '}
            {data.overview ?? 'No description available'}
          </p>
          <p className='text-white'>
            <strong>Genres:</strong> {genresList}
          </p>
          <p className='text-white'>
            <strong>Original Language:</strong>{' '}
            {data.original_language.toUpperCase() ?? 'Unknown'}
          </p>
          <p className='text-white'>
            <strong>Status:</strong> {data.status ?? 'Unknown'}
          </p>
          <p className='text-white'>
            <strong>Production Companies:</strong> {productionCompaniesList}
          </p>
          <p className='text-white'>
            <strong>Production Countries:</strong> {productionCountriesList}
          </p>
        </Col>
      </Row>
      <Row className='g-3 mx-auto pt-5'>
        <h3 className='text-center'>Cast:</h3>
        <Col>
          <Cast cast={data.credits.cast} />
        </Col>
      </Row>
      <Row className='g-3 mx-auto pt-5'>
        <Col>
          <Video video={data.videos.results[0]} />
        </Col>
      </Row>
    </>
  )
}

export default Info
