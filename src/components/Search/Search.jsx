import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router";
import { useRouteQuery } from "../../hooks/useRouteQuery";

const Search = ({ type }) => {
  const query = useRouteQuery();
  const search = query.get("search");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Row>
      <Col md={6} className="mx-auto mb-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3"
            controlId={type === "movie" ? "Search Movie" : "Search TV Serie"}
          >
            <Form.Control
              type="text"
              placeholder={
                type === "movie" ? "Search Movie" : "Search TV Serie"
              }
              value={search}
              onChange={(e) => {
                const value = e.target.value;
                history.push("?search=" + value);
              }}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default Search;
