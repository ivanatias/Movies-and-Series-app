import React from "react";
import { Container, Row } from "react-bootstrap";
import ItemCard from "../ItemCard/ItemCard";
import Loading from "../Loading/Loading";
import Error from "../Error/Error";
import Empty from "../Empty/Empty";
import { useQuery } from "react-query";
import { getTrendings } from "../../utils/getTrendings";

const DailyTrendings = () => {
  const { data, status } = useQuery("trendingsdaily", () =>
    getTrendings("/trending/all/day")
  );

  return (
    <Container className="py-3">
      <h2 className="text-center text-white mb-5">Daily Trendings</h2>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <Error />
      ) : (
        data && (
          <Row className="g-4 mx-auto">
            {data?.results.map((item) => (
              <ItemCard item={item} key={item.id} />
            ))}
            {data.results.length === 0 && <Empty />}
          </Row>
        )
      )}
    </Container>
  );
};

export default DailyTrendings;
