import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import AmountSelect from "./AmountSelect";
import Price from "./Price";
import { MAX_AMOUNT } from "../constants";
import { MIN_AMOUNT } from "../constants";

function Counter() {
  const [amount, setAmount] = useState(1);

  const incrementAmount = () => {
    if (amount >= MAX_AMOUNT) return;
    setAmount((prev) => prev + 1);
  };

  const decrementAmount = () => {
    if (amount <= MIN_AMOUNT) return;
    setAmount((prev) => prev - 1);
  };

  return (
    <Card className="card counter">
      <Card.Header className="counter-header">App</Card.Header>
      <Card.Body className="counter-body">
        <AmountSelect
          amount={amount}
          incrementAmount={incrementAmount}
          decrementAmount={decrementAmount}
        />
        <Price amount={amount} />
      </Card.Body>
    </Card>
  );
}

export default Counter;
