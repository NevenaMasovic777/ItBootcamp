import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css"

<<<<<<< HEAD
export const Login = () => {
=======
export const Login = ({history}) => {

  function handleSubmit(){
    history.push('/home')
  }

>>>>>>> 54439e321f22962edb81f134aa6daf5f56503dad
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

<<<<<<< HEAD
            <Button variant="primary" type="submit">
=======
            <Button variant="primary" type="submit" onClick={e => {
              e.preventDefault()
              handleSubmit()
            }}>
>>>>>>> 54439e321f22962edb81f134aa6daf5f56503dad
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};
