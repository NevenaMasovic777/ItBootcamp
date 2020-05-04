import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../../public/components/header";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NewPoll } from "./polls/new-poll";

export const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
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
      <NewPoll></NewPoll>
    </div>
  );
};
