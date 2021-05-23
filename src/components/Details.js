import React, { useEffect, useState } from "react";

import { Button, Card, Collapse } from "react-bootstrap";

import AddExpense from "./AddExpense";
import AddIncome from "./AddIncome";

const Details = (props) => {
  // const MONEY = props.income.funds;
  const [money, setMoney] = useState();
  const expenseIsValid = props.expenses.length;
  const saveCalcMoney = (moneySpent) => {
    setMoney(moneySpent);
    console.log("saveCalc", moneySpent);
    console.log("money:", money);
  };
  useEffect(() => {
    setMoney(props.income.funds);
  }, [props.income]);
  const saveIncomeHandler = (incomeData) => {
    const newIncome = {
      ...incomeData,
    };
    props.onAddIncome(newIncome);
    setCollapseState(false);
  };
  const saveNewItemHandler = (newExpenseData) => {
    const newData = {
      ...newExpenseData,
      id: Math.random().toString(),
    };

    props.onAdd(newData);
    setCollapseState1(false);
  };

  const [collapseState, setCollapseState] = useState(false);
  const [collapseState1, setCollapseState1] = useState(false);

  const toggle1 = () => {
    setCollapseState(!collapseState);
  };

  const toggle2 = () => {
    setCollapseState1(!collapseState1);
  };
  const closeForm1 = () => {
    setCollapseState(false);
  };
  const closeForm2 = () => {
    setCollapseState1(false);
  };

  return (
    <div className="container">
      <Card>
        <Card.Header>
          <Card.Title className="mb-0">
            <h2>Monthly Funds Status</h2>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <div className="d-flex justify-content-between mb-3">
            <span className="text-center">
              <h4 className="text-uppercase mb-1">Current Monthly Salary</h4>
              <h2>&#8377; {props.income.salary}</h2>
            </span>
            <span className="text-center">
              <h5>Mandatory Savings</h5>
              <h3>&#8377; {props.income.savings}</h3>
            </span>
            <span className="text-center">
              <h5>Expendable funds</h5>
              <h3>&#8377; {props.income.funds}</h3>
            </span>
          </div>
          <div className="float-left">
            <h3>
              Money Left:
              {expenseIsValid === 0 ? (
                <span className="text-info"> &#8377; {props.income.funds}</span>
              ) : (
                <span
                  className={`${money <= 500 ? "text-danger" : "text-success"}`}
                >
                  {" "}
                  &#8377; {money}
                </span>
              )}
            </h3>
          </div>
          <div className="text-right">
            <Button
              onClick={() => {
                toggle1();
                closeForm2();
              }}
              className="mx-1"
            >
              Add Income Details
            </Button>
            <Button
              onClick={() => {
                toggle2();
                closeForm1();
              }}
            >
              Add New Expense
            </Button>
          </div>
          <Collapse in={collapseState}>
            <div className="mt-3">
              <AddIncome
                onClose={closeForm1}
                onSaveIncome={saveIncomeHandler}
              />
            </div>
          </Collapse>
          <Collapse in={collapseState1}>
            <div className="mt-3">
              <AddExpense
                onClose={closeForm2}
                onSave={saveNewItemHandler}
                isValid={money}
                moneyLeft={saveCalcMoney}
              />
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Details;
