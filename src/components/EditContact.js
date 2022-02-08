import React from "react";
import { Col, Container, FormControl, FormGroup, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const EditContact = () => {
  const { id } = useParams();
  return (
    <Container className="my-5">
      <Row>
        <h1 className="text-center display-3 py-5">Edit Contact {id}</h1>
        <Col className="col-md-6 shadow mx-auto">
          <FormGroup className="p-5">
            <FormControl
              type="text"
              placeholder="name"
              className="form-control mb-2"
            />

            <FormControl
              type="email"
              placeholder="email"
              className="form-control mb-2"
            />

            <FormControl
              type="phone"
              placeholder="phone number"
              className="form-control mb-2"
            />
            <FormControl
              type="submit"
              value="Update Student"
              className="mb-2 bg-info"
            />
            <Link to="/" className="btn btn-dark form-control">
              Cancel
            </Link>
          </FormGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default EditContact;
