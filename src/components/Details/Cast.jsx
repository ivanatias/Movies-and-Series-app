import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Loading from '../Loading/Loading'
import { useFetchDetails } from '../../hooks/useFetchDetails'
import { getImage } from '../../utils/getImage'
import personplaceholder from '../../images/personplaceholder.png'
import 'react-alice-carousel/lib/alice-carousel.css'

const CAROUSEL_CONFIG = {
  0: { items: 1 },
  768: { items: 2 },
  1000: { items: 3 },
  1400: { items: 4 }
}

const Cast = ({ id, itemType }) => {
  const endpoint =
    itemType === 'movie' ? `/movie/${id}/credits?` : `/tv/${id}/credits?`

  const { data, status } = useFetchDetails(endpoint, 'credits', id)

  return status === 'loading' ? (
    <Loading />
  ) : (
    <>
      {data && data.cast.length !== 0 ? (
        <AliceCarousel
          responsive={CAROUSEL_CONFIG}
          autoPlay={data.cast.length >= 1}
          autoPlayInterval={1500}
          infinite
          disableButtonsControls={true}
          disableDotsControls={true}
        >
          {data.cast.map(person => (
            <div
              className='d-flex flex-column align-items-center'
              key={person.id}
            >
              <img
                src={getImage(person.profile_path, 300) ?? personplaceholder}
                alt={person.name}
                width={250}
                height={250}
                className='mb-2 pe-2 carousel-item__img'
              />
              <p className='text-white'>{person.name}</p>
            </div>
          ))}
        </AliceCarousel>
      ) : (
        <p className='text-center lead'>Cast is not available</p>
      )}
    </>
  )
}

export default Cast
