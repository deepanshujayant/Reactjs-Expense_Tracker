import React from "react";
import { Badge, Button, Card } from "react-bootstrap";

const ExpenseItem = (props) => {
  return (
    <Card className="my-3">
      <Card.Body className="d-flex justify-content-between">
        <span>
          <h2>{props.title}</h2>
          <h5>{props.type}</h5>
        </span>
        <span>
          <h2>
            <Badge variant="primary" pill>
              Rs. {props.amount}
            </Badge>
          </h2>
          <h6 className="text-right">{props.purchase}</h6>
        </span>
      </Card.Body>
      <span className="text-right mx-1 mb-1">
        <Button variant="outline-danger" onClick={props.onDeleteItem}>Delete</Button>
      </span>
    </Card>
  );
};

export default ExpenseItem;
