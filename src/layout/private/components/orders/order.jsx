import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

export const Order = () => {
  return (
    <div>
      <h2 style={{ margin: "30px" }}>Order ID</h2>
      <hr />
      <div style={{ textAlign: "center" }}>
        <Link to="home">
          <button className="btn btn-primary" style={{ margin: "20px", width:"400px" }}>
            BACK TO MAIN
          </button>
        </Link>
      </div>
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
    </div>
  );
};
