import React, { useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'

const Search = ({ type }) => {
  const [, setSearchParams] = useSearchParams()

  useEffect(() => {
    const params = new URLSearchParams()
    if (params.get('search') === null) setSearchParams({})
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleSearch = ({ target }) => {
    target.value === ''
      ? setSearchParams({})
      : setSearchParams({ search: target.value })
  }

  return (
    <Row>
      <Col md={6} className='mx-auto mb-1'>
        <Form onSubmit={handleSubmit} className='position-relative'>
          <FaSearch
            className='position-absolute top-50 end-0 translate-middle text-dark'
            size='20'
          />
          <Form.Group
            className='mb-3'
            controlId={type === 'movie' ? 'Search Movie' : 'Search TV Serie'}
          >
            <Form.Control
              type='text'
              placeholder={
                type === 'movie' ? 'Search Movie' : 'Search TV Serie'
              }
              onChange={handleSearch}
              aria-label={type === 'movie' ? 'Search Movie' : 'Search TV Serie'}
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  )
}

export default Search
