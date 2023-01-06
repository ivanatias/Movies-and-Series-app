import React from 'react'
import { Modal, Container } from 'react-bootstrap'
import Info from './Info'

const DetailsModal = ({ item, showModal, handleClose }) => {
  const itemType = item.release_date !== undefined ? 'movie' : 'tv'

  return (
    <Modal fullscreen show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.title ?? item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Info item={item} movieOrTv={itemType} />
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default DetailsModal
