import React from "react";
import { NewOrder } from "./new-order";
import "./orders.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { Header } from "../../../public/components/header";

export const Orders = () => {
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
      <div style={{ textAlign: "center" }}>
        <input type="text" value="radna subota" style={{ marginTop: "40px" }} />
      </div>
      <NewOrder></NewOrder>
    </div>
  );
};
