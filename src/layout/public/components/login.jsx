import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./login.css"

export const Login = ({history}) => {

  function handleSubmit(){
    history.push('/home')
  }

  return (
    <>

  <div>

      <div class="grid-container">
          <header class="header"></header>
          <aside class="sidenav">
              <Link to="login">
                <img src="https://img.icons8.com/color/48/000000/kawaii-taco.png" alt="pic" class="logo" />
              </Link>
            
          </aside>
          <main class="main">
              
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
              
          </main>
          <footer class="footer"></footer>
      </div>

      </div>
    </>
  );
};
