import React from "react";
import Nav from "react-bootstrap/Nav";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export const Order = () => {
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
              
          <div>

      <h2 style={{ textAlign: "center", marginTop: "24px" }}>Order ID</h2>
      <div className="restaurant-name">
        <div>
          <img
            src="https://img.icons8.com/bubbles/50/000000/restaurant.png"
            alt="pic"
          />
        </div>
        <h3>Restaurant name</h3>
      </div>
      <div className="table-container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Meal</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>username</td>
              <td>meal name</td>
              <td>370</td>
            </tr>
            <tr>
              <td>2</td>
              <td>username</td>
              <td>meal name</td>
              <td>250</td>
            </tr>
            <tr>
              <td>3</td>
              <td>username</td>
              <td>meal name</td>
              <td>250</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="chart">
        <h3>Chart</h3>
      </div>

      <div style={{ textAlign: "center" }}>
        <Link to="home">
          <button className="btn btn-primary" style={{ margin: "20px", width:"400px" }}>
            BACK TO MAIN
          </button>
        </Link>
      </div>
    </div>

          </main>
          <footer class="footer"></footer>
      </div>

    </div>

  );
};
