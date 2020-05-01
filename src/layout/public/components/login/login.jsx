import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css"

export const Login = ({history}) => {

  function handleSubmit(){
    history.push('/home')
  }

  return (
    <>
      <div className="form">
        <div className="form-container">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter username" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Enter Password" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={e => {
              e.preventDefault()
              handleSubmit()
            }}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
