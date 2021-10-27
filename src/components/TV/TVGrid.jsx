import React from "react";
import Empty from "../Empty/Empty";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import { Container, Row } from "react-bootstrap";
import { useQuery } from "react-query";
import ItemCard from "../ItemCard/ItemCard";
import { getData } from "../../utils/getData";

const TVGrid = () => {
  const { data, isLoading, isError } = useQuery("tvseries", () =>
    getData("/discover/tv")
  );

  if (isError) {
    return <Error />;
  }

  return (
    <Container className="py-5">
      <h2 className="text-center text-white mb-5">TV Series</h2>
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

export default TVGrid;
