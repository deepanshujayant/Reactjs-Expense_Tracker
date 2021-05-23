import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./components/Details";
import ExpenseList from "./components/ExpenseList";
const INCOME_ARR = {};
const EXPENSES_ARR = [];
// const MONEY = 0;
//const money = 0;
const App = () => {
  // const [money, setMoney] = useState(MONEY);
  const [income, setIncome] = useState(INCOME_ARR);
  const [expenses, setExpenses] = useState(EXPENSES_ARR);
  useEffect(() => {
    console.log("len:", income.salary);
    // setIncome(income);
  }, [income]);
  const addNewExpense = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };
  const addIncome = (expense) => {
    setIncome(expense);
  };
  const deleteExpenseItem = (id) => {
    console.log("Expenses",expenses.amount, "id:", id);
    const deletedItem = expenses.filter((i) => i.id !== id);
    setExpenses(deletedItem);
    // setIncome(expenses);
  };
  /* const calcMoney = (moneyLeft) => {
    setMoney(moneyLeft);
    console.log("moneyLeft:", moneyLeft);    
  }; */
  return (
    <>
      <h1 className="text-white text-center text-uppercase">
        Expense Management App
      </h1>
      <br />
      <Details
        onAddIncome={addIncome}
        onAdd={addNewExpense}
        income={income}
        expenses={expenses}
        // onCalcMoney={calcMoney}
        // money={money}
      />
      <br />
      <ExpenseList items={expenses} onDelete={deleteExpenseItem} />
    </>
  );
};

export default App;
