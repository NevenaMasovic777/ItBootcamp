import React from "react";
import { NewOrder } from "./new-order";
import "./orders.css";

export const Orders = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <input type="text" value="radna subota" style={{ marginTop: "40px" }} />
      </div>
      <NewOrder></NewOrder>
    </div>
  );
};
