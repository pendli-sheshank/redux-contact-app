import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const contacts = useSelector((state) => state);

  console.log(contacts);

  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
    toast.success("Data Deleted successfully");
  };

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
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Number</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts &&
                contacts.map((contact, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.number}</td>
                    <td>{contact.email}</td>
                    <td>
                      <Link
                        className=" mx-3 btn btn-sm btn-primary"
                        to={`/edit/${contact.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteContact(contact.id)}
                        className="  btn btn-sm btn-danger"
                        to={`/edit/${contact.id}`}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
