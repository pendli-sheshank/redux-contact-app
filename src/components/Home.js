import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col className="col-md-12 my-5 text-right">
          <Link className="btn btn-outline-dark" to="/add">
            Add Contact
          </Link>{" "}
        </Col>
        <Col className="col-md-12 mx-auto">
          <h1>Home</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
