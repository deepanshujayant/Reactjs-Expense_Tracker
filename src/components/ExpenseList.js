import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="text-white text-center">
        <h2>Sorry! No Records Here</h2>
        <h5>Try Adding New Expenses</h5>
      </div>
    );
  }
  return (
    <div className="container">
      <h1 className="text-white">My Expenses</h1>
      <div>
        <ul className="p-0 m-0">
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              type={expense.type}
              onDeleteItem={props.onDelete}
              purchase={expense.purchase}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseList;
