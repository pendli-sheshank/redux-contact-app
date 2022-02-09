import React, { useEffect, useState } from "react";
import { Col, Container, FormControl, FormGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditContact = () => {
  const [name, setname] = useState("");
  const [number, setnumber] = useState("");
  const [email, setemail] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const currentContact = contacts.find((contact) => contact.id == id);

  useEffect(() => {
    if (currentContact) {
      setname(currentContact.name);
      setemail(currentContact.email);
      setnumber(currentContact.number);
    }
  }, [currentContact]);

  const checkEmail = contacts.find(
    (contact) => contact.id != id && contact.email === email
  );
  const checkNumber = contacts.find(
    (contact) => contact.id != id && contact.number == number
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
      id: id,
      name,
      number,
      email,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Data Updated Successfully");
    navigate("/");
  };

  return (
    <Container className="my-5">
      {currentContact ? (
        <>
          <Row>
            <h1 className="text-center display-3 py-5">Edit Contact {id}</h1>
            <Col className="col-md-6 shadow mx-auto">
              <form onSubmit={handleFormSubmit}>
                <FormGroup className="p-5">
                  <FormControl
                    type="text"
                    defaultValue={name}
                    onChange={(e) => setname(e.target.value)}
                    placeholder="name"
                    className="form-control mb-2"
                  />

                  <FormControl
                    type="email"
                    defaultValue={email}
                    onChange={(e) => setemail(e.target.value)}
                    placeholder="email"
                    className="form-control mb-2"
                  />

                  <FormControl
                    type="phone"
                    defaultValue={number}
                    onChange={(e) => setnumber(e.target.value)}
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
              </form>
            </Col>
          </Row>
        </>
      ) : (
        <h1>Student id with {id} doesn't exists</h1>
      )}
    </Container>
  );
};

export default EditContact;
