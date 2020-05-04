import React from "react";
import { NewOrder } from "./new-order";
import "./orders.css";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export const Orders = () => {
  return (
<div>

<div class="grid-container">

    <header class="header"></header>
    <aside class="sidenav">

        <Link to="home">
        <img src="https://img.icons8.com/color/48/000000/kawaii-taco.png" alt="pic" class="logo" />
        </Link>

        <ul class="sidenav__list">
            <li class="sidenav__list-item">
                <Nav.Link href="/home">Home</Nav.Link>
            </li>
            <li class="sidenav__list-item">
                <Nav.Link href="/orders">Orders</Nav.Link>
            </li>
            <li class="sidenav__list-item">
                <Nav.Link href="/settings">Settings</Nav.Link>
            </li>
            <li class="sidenav__list-item">
                <Nav.Link href="/login">Log out</Nav.Link>
            </li>
        </ul>
    </aside>
    <main class="main">
      
      <div style={{ textAlign: "center" }}>
        <input type="text" value="radna subota" style={{ marginTop: "40px" }} />
      </div>
      <NewOrder></NewOrder>

    </main>
    <footer class="footer"></footer>
</div>

</div>

  );
};
