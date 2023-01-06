import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'

const Search = ({ type }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchValue = searchParams.get('search')

  const handleSubmit = e => {
    e.preventDefault()
  }

  const handleSearch = ({ target }) => setSearchParams({ search: target.value })

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
              value={searchValue}
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
