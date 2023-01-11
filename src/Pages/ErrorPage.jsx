import React from 'react'
import { Container } from 'react-bootstrap'
import { useRouteError, Link } from 'react-router-dom'

const ErrorPage = () => {
  const error = useRouteError()

  const requestErrorCode = error?.response?.status
  const notFoundErrorCode = error?.status

  return (
    <Container className='vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h3 className='text-white'>{requestErrorCode ?? notFoundErrorCode}</h3>
      <Link to='/' className='text-white'>
        Go back to main page
      </Link>
    </Container>
  )
}

export default ErrorPage
