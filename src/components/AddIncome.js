import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const AddIncome = (props) => {
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [savings, setSavings] = useState("");
  /*  const [funds, setFunds] = useState(""); */

  const monthlyIncomeHandler = (e) => {
    setMonthlyIncome(e.target.value);
  };
  const savingsHandler = (e) => {
    setSavings(e.target.value);
  };
  /* const fundsHandler = () => {

    } */
  const storeIncomeHandler = (e) => {
    e.preventDefault();

    const newIncomeData = {
      salary: monthlyIncome,
      savings: savings,
      funds: monthlyIncome - savings,
    };
    props.onSaveIncome(newIncomeData);
    setMonthlyIncome("");
    setSavings("");
  };
  return (
    <div className="alert-primary rounded p-3 border-primary border">
      <h3>Add Income Details</h3>
      <hr />
      <Form onSubmit={storeIncomeHandler}>
        <Form.Row>
          <Form.Group className="col-md-6">
            <Form.Label>Add Monthly Income</Form.Label>
            <Form.Control
              required={true}
              type="number"
              value={monthlyIncome}
              placeholder="Enter"
              onChange={monthlyIncomeHandler}
            />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label>Add Savings Amount</Form.Label>
            <Form.Control
              required={true}
              type="number"
              value={savings}
              placeholder="Enter"
              onChange={savingsHandler}
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

export default AddIncome;
