import React, { useState } from "react";
import DetailsModal from "../Details/DetailsModal";
import { Badge, Card, Col } from "react-bootstrap";
import { getImage } from "../../utils/getImage";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const imageUrl = getImage(item.poster_path, 300);
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const checkItemPopularity = () => {
    //Changes badge color depending on rating
    if (item.vote_average <= 5) {
      return "danger";
    }
    if (item.vote_average < 8) {
      return "warning";
    }
    if (item.vote_average >= 8) {
      return "success";
    }
  };

  const checkMovieOrTv = () => {
    //Checks if there is a release date (it's a movie) or a first air date (it's a tv series)
    if (item.release_date) {
      return item.release_date.substr(0, 4);
    }
    if (item.first_air_date) {
      return item.first_air_date.substr(0, 4);
    }

    if (!item.release_date || !item.first_air_date) {
      return "No release date info";
    }
  };

  return (
    <Col sm={6} md={4} lg={3}>
      <Card className="item-card mx-auto" onClick={handleShow}>
        <Card.Img
          className="img-fluid mx-auto item-image rounded position-relative"
          variant="top"
          src={imageUrl}
          alt={item.title || item.name}
          width={250}
          height={300}
        />
        <Card.Body>
          <Card.Title as="h6" className="text-center mb-3 text-white">
            {item.title || item.name}
            <Badge
              pill
              bg={checkItemPopularity()}
              text="white"
              className="position-absolute top-0 end-0 m-1"
            >
              {item.vote_average === 0 ? "No rating" : item.vote_average}
            </Badge>
          </Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-dark">
              {item.media_type && item.media_type.toUpperCase()}
            </span>
            <span className="text-dark">{checkMovieOrTv()}</span>
          </div>
        </Card.Body>
      </Card>
      <DetailsModal
        item={item}
        showModal={showModal}
        handleClose={handleClose}
      />
    </Col>
  );
};

export default ItemCard;
