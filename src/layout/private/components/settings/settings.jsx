import React from "react";
import "./settings.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

export const Settings = () => {
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
          </main>
          <footer class="footer"></footer>
      </div>

    </div>

  );
};
