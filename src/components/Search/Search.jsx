import React from 'react'
import { Row, Col, Form as BsForm } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { Form } from 'react-router-dom'

const Search = ({ type, initialSearchValue }) => {
  return (
    <Row>
      <Col md={6} className='mx-auto mb-1'>
        <Form id='search-form' role='search' className='position-relative'>
          <FaSearch
            className='position-absolute top-50 end-0 translate-middle text-dark'
            size='20'
          />
          <BsForm.Group
            className='mb-3'
            controlId={type === 'movie' ? 'Search Movie' : 'Search TV Serie'}
          >
            <BsForm.Control
              name='search'
              type='text'
              placeholder={
                type === 'movie' ? 'Search Movie' : 'Search TV Serie'
              }
              aria-label={type === 'movie' ? 'Search Movie' : 'Search TV Serie'}
              defaultValue={initialSearchValue}
            />
          </BsForm.Group>
        </Form>
      </Col>
    </Row>
  )
}

export default Search
