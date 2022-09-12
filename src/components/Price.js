import React from "react";
import formatMoney from "../lib/formatMoney";
import Card from "react-bootstrap/Card";
import { ITEM_PRICE } from "../constants";

function Price({ amount }) {
  return (
    <Card className="card price">
      <Card.Header>Price</Card.Header>
      <Card.Body className="price-body">
        <p>
          Total:{" "}
          <span style={{ fontWeight: "bold" }}>
            {formatMoney(amount * ITEM_PRICE)}
          </span>
        </p>
      </Card.Body>
    </Card>
  );
}

export default Price;
