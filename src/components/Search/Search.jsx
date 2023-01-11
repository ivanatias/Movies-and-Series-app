import React, { useEffect, useRef, memo } from 'react'
import { Row, Col, Form as BsForm } from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'
import { Form, useNavigation } from 'react-router-dom'

const Search = ({ type, initialSearchValue }) => {
  const navigation = useNavigation()
  const searchInputRef = useRef(null)

  useEffect(() => {
    searchInputRef.current.value = initialSearchValue
  }, [initialSearchValue])

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has('search')

  return (
    <Row>
      <Col md={6} className='mx-auto mb-1'>
        <Form id='search-form' role='search' className='position-relative'>
          <FaSearch
            className={`position-absolute top-50 end-0 translate-middle ${
              searching ? 'text-danger' : 'text-dark'
            }`}
            size='20'
          />
          <BsForm.Group
            className='mb-3'
            controlId={type === 'movie' ? 'searchmovie' : 'searchtv'}
          >
            <BsForm.Control
              ref={searchInputRef}
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

export default memo(Search)
