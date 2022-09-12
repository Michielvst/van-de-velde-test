import React from "react";
import Card from "react-bootstrap/Card";
import { MAX_AMOUNT } from "../constants";
import { MIN_AMOUNT } from "../constants";

function AmountSelect({ amount, incrementAmount, decrementAmount }) {
  return (
    <Card className="amountSelect">
      <Card.Header>AmountSelect</Card.Header>
      <Card.Body className="amountSelect-body">
        <button
          onClick={() => {
            incrementAmount();
          }}
          disabled={amount >= MAX_AMOUNT ? true : false}
        >
          +
        </button>
        <p>{amount}</p>
        <button
          onClick={() => {
            decrementAmount();
          }}
          disabled={amount <= MIN_AMOUNT ? true : false}
        >
          -
        </button>
      </Card.Body>
    </Card>
  );
}

export default AmountSelect;
