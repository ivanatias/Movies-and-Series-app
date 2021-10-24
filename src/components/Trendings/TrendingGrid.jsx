import React from "react";
import { Container, Row } from "react-bootstrap";
import trending from "../../trending.json";
import ItemCard from "../ItemCard/ItemCard";
import { getData } from "../../utils/getData";
import { useQuery } from "react-query";

const TrendingGrid = () => {
  /* const { data } = useQuery("trendings", () => getData("/trending/all/week"));

  console.log(data); */
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
