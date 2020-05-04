import React from "react";
import "./settings.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Header } from "../../../public/components/header";

export const Settings = () => {
  return (
    <div>
        <Header></Header>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/home">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/orders">Orders</Nav.Link>
          <Nav.Link href="/settings">Settings</Nav.Link>
        </Nav>
        <Link to="login">
          <button className="btn btn-danger">LOGOUT</button>
        </Link>
      </Navbar>
      {/* <div style={{ textAlign: "center" }}>
        <Link to="home">
          <button
            className="btn btn-primary"
            style={{ margin: "20px", width: "400px" }}
          >
            BACK TO MAIN
          </button>
        </Link>
      </div> */}
      <div className="settings">
        <h4>Settings</h4>
        <div>
          <img
            src="https://img.icons8.com/bubbles/50/000000/upload.png"
            alt="pic"
          />
          <p>Upload data</p>
        </div>
        <button className="btn btn-primary">SAVE</button>
      </div>
    </div>
  );
};
