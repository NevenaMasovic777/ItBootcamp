import React from "react";
import { NewOrder } from "./new-order";
import { Order } from "./order";
import './orders.css'

export const Orders = () => {
  return (
    <div>
      <NewOrder></NewOrder>
      <Order></Order>
    </div>
  );
};
