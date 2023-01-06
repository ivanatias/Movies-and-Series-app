import React, { useState } from 'react'
import DetailsModal from '../Details/DetailsModal'
import { Badge, Card, Col } from 'react-bootstrap'
import { getImage } from '../../utils/getImage'
import {
  trimReleaseDate,
  pickRatingBadgeColor,
  trimRatingPoints
} from '../../utils/helpers'
import './ItemCard.css'

const ItemCard = ({ item }) => {
  const imageUrl = getImage(item.poster_path, 300)
  const [showModal, setShowModal] = useState(false)

  const handleClose = () => setShowModal(false)
  const handleShow = () => setShowModal(true)

  const releaseDate = trimReleaseDate(item.release_date ?? item.first_air_date)
  const badgeColor = pickRatingBadgeColor(item.vote_average)
  const ratingPoints = trimRatingPoints(item.vote_average)

  return (
    <Col sm={6} md={4} lg={3}>
      <Card className='item-card mx-auto' onClick={handleShow}>
        <Card.Img
          className='img-fluid mx-auto item-image rounded position-relative'
          variant='top'
          src={imageUrl}
          alt={item.title || item.name}
          width={250}
          height={300}
        />
        <Card.Body>
          <Card.Title as='h6' className='text-center mb-3 text-white'>
            {item.title || item.name}
            <Badge
              pill
              bg={badgeColor}
              text='white'
              className='position-absolute top-0 end-0 m-1'
            >
              {ratingPoints}
            </Badge>
          </Card.Title>
          <div className='d-flex justify-content-between align-items-center'>
            <span className='text-dark'>
              {item.media_type && item.media_type.toUpperCase()}
            </span>
            <span className='text-dark'>{releaseDate}</span>
          </div>
        </Card.Body>
      </Card>
      <DetailsModal
        item={item}
        showModal={showModal}
        handleClose={handleClose}
      />
    </Col>
  )
}

export default ItemCard
