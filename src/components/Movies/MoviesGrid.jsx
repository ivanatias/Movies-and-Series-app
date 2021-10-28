import React from "react";
import { Container, Row } from "react-bootstrap";
import Empty from "../Empty/Empty";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import ItemCard from "../ItemCard/ItemCard";
import Search from "../Search/Search";
import { useFetchData } from "../../hooks/useFetchData";

const MoviesGrid = ({ search }) => {
  const endpoint = search
    ? "/search/movie?query=" + search
    : "/discover/movie?";

  const { data, status, isFetchingNextPage } = useFetchData(
    endpoint,
    "movies",
    search
  );

  return (
    <Container className="py-5">
      <h2 className="text-center text-white mb-3">Movies</h2>
      <Search type="movie" />
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <Error />
      ) : (
        data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            <Row className="g-4 mx-auto">
              {page.results.map((item) => (
                <ItemCard item={item} key={item.id} />
              ))}
              {page.results.length === 0 && <Empty />}
            </Row>
          </React.Fragment>
        ))
      )}
      {isFetchingNextPage && <Loading />}
    </Container>
  );
};

export default MoviesGrid;
