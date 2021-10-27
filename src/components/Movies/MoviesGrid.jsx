import React from "react";
import { Container, Row } from "react-bootstrap";
import Empty from "../Empty/Empty";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import ItemCard from "../ItemCard/ItemCard";
import { useQuery } from "react-query";
import { getData } from "../../utils/getData";

const MoviesGrid = () => {
  const { data, isLoading, isError } = useQuery("movies", () =>
    getData("/discover/movie")
  );

  if (isError) {
    return <Error />;
  }

  return (
    <Container className="py-5">
      <h2 className="text-center text-white mb-5">Movies</h2>
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

export default MoviesGrid;
