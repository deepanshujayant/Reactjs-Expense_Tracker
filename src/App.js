import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./components/Details";
import ExpenseList from "./components/ExpenseList";
const INCOME_ARR = {};
const EXPENSES_ARR = [];
const App = () => {
  const [income, setIncome] = useState(INCOME_ARR);
  const [expenses, setExpenses] = useState(EXPENSES_ARR);
  const addNewExpense = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };
  const addIncome = (expense) => {
    setIncome(expense);
  };
  const deleteExpenseItem = (id) => {
    console.log(id);
    const deletedItem = EXPENSES_ARR.filter((i)=> i.id !== id);
    setExpenses(deletedItem);
  }
  return (
    <>
      <h1 className="text-white text-center text-uppercase">
        Expense Management App
      </h1>
      <br />
      <Details onAddIncome={addIncome} onAdd={addNewExpense} income={income} />
      <br />
      <ExpenseList items={expenses} onDelete={deleteExpenseItem} />
    </>
  );
};

export default App;
