import React, { useState } from "react";
import { Col, Container, FormControl, FormGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddContact = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");

  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(contacts);

  const checkEmail = contacts.find(
    (contact) => contact.email === email && email
  );
  const checkNumber = contacts.find(
    (contact) => contact.number == number && number
  );

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !number) {
      return toast.warning("Please fill all entries");
    }

    if (checkEmail) {
      return toast.error("Email already exist");
    }
    if (checkNumber) {
      return toast.error("Number already exist");
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      number,
      email,
    };
    dispatch({ type: "ADD_CONTACT", payload: data });
    toast.success("Data Inserted");
    navigate("/");
  };

  return (
    <Container className="my-5">
      <Row>
        <h1 className="text-center display-3 py-5">Add Contact</h1>
        <Col className="col-md-6 shadow mx-auto">
          <form onSubmit={handleFormSubmit}>
            <FormGroup className="p-5">
              <FormControl
                value={name}
                type="text"
                onChange={(e) => setname(e.target.value)}
                placeholder="name"
                className="form-control mb-2"
              />

              <FormControl
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="email"
                placeholder="email"
                className="form-control mb-2"
              />

              <FormControl
                value={number}
                onChange={(e) => setnumber(e.target.value)}
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
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddContact;
