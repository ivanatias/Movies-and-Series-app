import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Loading from '../Loading/Loading'
import { useFetchDetails } from '../../hooks/useFetchDetails'
import { getPersonImage } from '../../utils/getPersonImage'
import 'react-alice-carousel/lib/alice-carousel.css'

const Cast = ({ id, movieOrTv }) => {
  const endpoint =
    movieOrTv === 'movie' ? `/movie/${id}/credits?` : `/tv/${id}/credits?`

  const { data, status } = useFetchDetails(endpoint, 'credits', id)

  const responsive = {
    0: { items: 1 },
    512: { items: 2 },
    1024: { items: 4 }
  }

  return status === 'loading' ? (
    <Loading />
  ) : (
    <>
      {data && data.cast.length !== 0 ? (
        <AliceCarousel
          responsive={responsive}
          autoPlay={data.cast.length <= 1 ? false : true}
          autoPlayInterval={1500}
          infinite={data.cast.length <= 1 ? false : true}
          disableButtonsControls={true}
          disableDotsControls={true}
        >
          {data.cast.map(person => (
            <div
              className='d-flex flex-column align-items-center'
              key={person.id}
            >
              <img
                src={getPersonImage(person.profile_path, 300)}
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
