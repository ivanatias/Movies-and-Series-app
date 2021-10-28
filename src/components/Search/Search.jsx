import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { useHistory } from "react-router";

const Search = ({ type }) => {
  const [searchText, setSearchText] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("?search=" + searchText);
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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  );
};

export default Search;
