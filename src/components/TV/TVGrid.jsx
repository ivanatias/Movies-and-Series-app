import React from "react";
import Empty from "../Empty/Empty";
import Error from "../Error/Error";
import Loading from "../Loading/Loading";
import ItemCard from "../ItemCard/ItemCard";
import Search from "../Search/Search";
import { Container, Row } from "react-bootstrap";
import { useFetchData } from "../../hooks/useFetchData";

const TVGrid = ({ search }) => {
  const endpoint = search ? "/search/tv?query=" + search : "/discover/tv?";

  const { data, status, isFetchingNextPage } = useFetchData(
    endpoint,
    "tvseries",
    search
  );

  return (
    <Container className="py-5">
      <h2 className="text-center text-white mb-3">TV Series</h2>
      <Search />
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

export default TVGrid;
