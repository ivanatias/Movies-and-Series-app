import React from 'react'
import { Container } from 'react-bootstrap'
import './Banner.css'

const Banner = () => {
  return (
    <Container
      fluid
      className='banner d-flex flex-column justify-content-center'
    >
      <h2 className='mx-lg-2'>
        Find information about all your favorite movies and TV series
      </h2>
      <p className='text-dark mx-lg-2 lead'>
        Casts, descriptions, posters, ratings, release dates & more!
      </p>
    </Container>
  )
}

export default Banner
