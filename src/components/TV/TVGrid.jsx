import React from "react";
import { Container, Row } from "react-bootstrap";
import ItemCard from "../ItemCard/ItemCard";
import tv from "../../tv.json";

const TVGrid = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center text-white mb-5">TV Series</h2>
      <Row className="g-4 mx-auto">
        {tv.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

export default TVGrid;
