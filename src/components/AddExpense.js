import React, { useState } from "react";
import { Button, Collapse, Form } from "react-bootstrap";

const AddExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredExpenseType, setEnteredExpenseType] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredPurschaseType, setEnteredPurchaseType] = useState("");
  /*  const [collapseState, setCollapseState] = useState(false);

  const toggle1 = () => {
    setCollapseState(!collapseState);
  }; */

  // useEffect(()=> {console.log("len",props.isValid.length)})
  const newItemTitleHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const newItemAmountHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const newItemExpenseTypeHandler = (e) => {
    setEnteredExpenseType(e.target.value);
    console.log("purchaseTest", varr);
  };
  let varr;
  const newItemPuchaseTypeHandler = (e) => {
    varr = e.target.value;
    setEnteredPurchaseType(e.target.value);
    /* console.log("purchase", e.target[e.target.value].innerHTML); */
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredAmount > props.isValid) {
      window.alert("OOPS!! You have spent more than you own.");
      return;
    }

    const newExpenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      type: enteredExpenseType,
      purchase: enteredPurschaseType,
    };
    const finalMoney = props.isValid - enteredAmount;
    console.log("finalMoney:",finalMoney);
    props.moneyLeft(finalMoney);
    props.onSave(newExpenseData);
    setEnteredTitle("");
    setEnteredExpenseType("");
    setEnteredPurchaseType("");
    setEnteredAmount("");
  };

  return (
    <div className="alert-primary rounded p-3 border-primary border">
      <h3>Add New Expense Details</h3>
      <hr />
      <Form onSubmit={submitHandler}>
        <Form.Row>
          <Form.Group className="col-md-12">
            <Form.Label>New Expense Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={enteredTitle}
              onChange={newItemTitleHandler}
            />
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label>New Expense Type</Form.Label>
            <Form.Control
              as="select"
              custom
              value={enteredExpenseType}
              onChange={newItemExpenseTypeHandler}
            >
              <option>Choose...</option>
              <option>Electronic Device</option>
              <option>Clothes Shopping</option>
              <option>Gifts</option>
              <option>Date</option> value="1"
              <option>Commute</option>
            </Form.Control>
          </Form.Group>
          <Form.Group className="col-md-6">
            <Form.Label>New Expense Purchase Type</Form.Label>
            <Form.Control
              as="select"
              custom
              value={enteredPurschaseType}
              onChange={newItemPuchaseTypeHandler}
            >
              <option>Choose...</option>
              <option>Full Payment</option>
              <option>EMI</option>
            </Form.Control>
          </Form.Group>

          <Collapse in={false}>
            <Form.Group>
              <Form.Label>Collapse label</Form.Label>
              <Form.Control />
            </Form.Group>
          </Collapse>
          <Form.Group className="col-md-12">
            <Form.Label>Amount spent</Form.Label>
            <Form.Control
              type="number"
              min="0"
              value={enteredAmount}
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
