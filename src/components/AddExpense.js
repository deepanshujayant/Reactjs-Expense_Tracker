import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredExpenseType, setEnteredExpenseType] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredPurschaseType, setEnteredPurchaseType] = useState("");

  const newItemTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
    console.log("title:", e.target.value);
  };
  const newItemAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
    console.log("Amount:", e.target.value);}

  const newItemExpenseTypeHandler = (e) => {
    setEnteredExpenseType(e.target.value);
    console.log("Type:", e.target.value);
  };
  const newItemPuchaseTypeHandler = (e) => {
    setEnteredPurchaseType(e.target.value);
    console.log("Purchase:", e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if(enteredAmount > props.isValid){
        window.alert("OOPS!! You have spent more than you own.")
        return;
    }
    const newExpenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        type: enteredExpenseType,
        purchase: enteredPurschaseType
    }
    props.onSave(newExpenseData);
    setEnteredPurchaseType("");
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredExpenseType("");
  }
  return (
    <div className="alert-primary rounded p-3 border-primary border">
      <h3>Add New Expense Details</h3>
      <hr />
      <Form onSubmit={submitHandler}>
        <Form.Row>
          <Form.Group className="col-md-12">
            <Form.Label>New Expense Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" onChange={newItemTitleHandler} />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label>New Expense Type</Form.Label>
            <Form.Control as="select" custom onChange={newItemExpenseTypeHandler}>
              <option>Choose...</option>
              <option>Electronic Device</option>
              <option>Clothes Shopping</option>
              <option>Gifts</option>
              <option>Date</option>
              <option>Commute</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label>New Expense Purchase Type</Form.Label>
            <Form.Control as="select" custom onChange={newItemPuchaseTypeHandler}>
              <option>Choose...</option>
              <option>Full Payment</option>
              <option>EMI</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-md-12">
            <Form.Label>Amount spent</Form.Label>
            <Form.Control
              type="number"
              min="0"
              placeholder="Enter Amount"
              onChange={newItemAmountHandler}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit" className="mr-2">
          ADD
        </Button>
        <Button variant="outline-primary" onClick={props.onClose}>
          Close
        </Button>
      </Form>
    </div>
  );
};

export default AddExpense;
