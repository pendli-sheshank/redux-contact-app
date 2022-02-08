import React from "react";
import { Col, Container, FormControl, FormGroup, Row } from "react-bootstrap";

const AddContact = () => {
  return (
    <Container className="my-5">
      <Row>
        <h1 className="text-center display-3 py-5">Add Contact</h1>
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
              value="Add Student"
              className="form-control mb-2 bg-info"
            />
          </FormGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default AddContact;
