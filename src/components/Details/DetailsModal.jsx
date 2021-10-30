import React from "react";
import { Modal, Container } from "react-bootstrap";
import Info from "./Info";

const DetailsModal = ({ item, showModal, handleClose }) => {
  //Checks if it's a movie or a tv serie, if the item has "release date" then it's a movie, if not, it's a tv serie
  const checkMovieOrTv = () => {
    let movieOrTv = item.release_date ? "movie" : "tv";
    return movieOrTv;
  };

  return (
    <Modal fullscreen show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{item.title || item.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Info item={item} movieOrTv={checkMovieOrTv()} />
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default DetailsModal;
