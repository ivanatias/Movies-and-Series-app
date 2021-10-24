import React from "react";
import { Container, Row } from "react-bootstrap";
import ItemCard from "../ItemCard/ItemCard";
import movies from "../../movies.json";

const MoviesGrid = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center text-white mb-5">Movies</h2>
      <Row className="g-4 mx-auto">
        {movies.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

export default MoviesGrid;
