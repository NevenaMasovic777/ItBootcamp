import React from "react";
import Nav from "react-bootstrap/Nav";
import { NewPoll } from "./polls/new-poll";
import { Link } from "react-router-dom";

export const Home = () => {
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
              <NewPoll></NewPoll>
          </main>
          <footer class="footer"></footer>
      </div>

    </div>

  );
};
