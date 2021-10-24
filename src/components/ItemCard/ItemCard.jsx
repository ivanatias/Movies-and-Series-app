import React from "react";
import { Badge, Card, Col } from "react-bootstrap";
import { getImage } from "../../utils/getImage";
import "./ItemCard.css";

const ItemCard = ({ item }) => {
  const imageUrl = getImage(item.poster_path, 300);

  return (
    <Col sm={6} md={4} lg={3}>
      <Card className="item-card mx-auto">
        <Card.Img
          className="img-fluid mx-auto item-image rounded position-relative"
          variant="top"
          src={imageUrl}
          alt={item.media_type === "movie" ? item.title : item.name}
          width={250}
        />
        <Card.Body>
          <Card.Title as="h6" className="lead text-center mb-4 text-white">
            {item.media_type === "movie" ? item.title : item.name}
            <Badge
              pill
              bg="danger"
              text="white"
              className="position-absolute top-0 end-0 m-1"
            >
              {item.vote_average}
            </Badge>
          </Card.Title>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-dark">{item.media_type.toUpperCase()}</span>
            <span className="text-dark">
              {item.media_type === "movie"
                ? item.release_date.substr(0, 4)
                : item.first_air_date.substr(0, 4)}
            </span>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ItemCard;
