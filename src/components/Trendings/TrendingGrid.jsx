import React from "react";
import { Container, Row } from "react-bootstrap";
import ItemCard from "../ItemCard/ItemCard";
import Loading from "../Loading/Loading";
import { getData } from "../../utils/getData";
import { useQuery } from "react-query";
import Error from "../Error/Error";
import Empty from "../Empty/Empty";

const TrendingGrid = () => {
  const { data, isLoading, isError } = useQuery("trendings", () =>
    getData("/trending/all/week")
  );

  if (isError) {
    return <Error />;
  }

  return (
    <Container className="py-5">
      <h2 className="text-center text-white mb-5">Trendings of the Week</h2>
      {isLoading && <Loading />}
      {data && (
        <Row className="g-4 mx-auto">
          {data?.results.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
          {data.results.length === 0 && <Empty />}
        </Row>
      )}
    </Container>
  );
};

export default TrendingGrid;
