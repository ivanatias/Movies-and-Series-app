import React from "react";
import { Container, Row } from "react-bootstrap";
import trending from "../../trending.json";
import ItemCard from "../ItemCard/ItemCard";

const TrendingGrid = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center text-white mb-5">Trendings of the Week</h2>
      <Row className="g-4 mx-auto">
        {trending.map((item) => (
          <ItemCard item={item} key={item.id} />
        ))}
      </Row>
    </Container>
  );
};

export default TrendingGrid;
