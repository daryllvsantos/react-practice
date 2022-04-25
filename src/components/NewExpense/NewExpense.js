import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [openExpenseForm, setOpenExpenseForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const openExpenseHandler = () => {
    setOpenExpenseForm(true);
  };
  const closeExpenseHandler = () => {
    setOpenExpenseForm(false);
  };
  return (
    <div className="new-expense">
      {!openExpenseForm && (
        <button onClick={openExpenseHandler}>Add Expense</button>
      )}
      {openExpenseForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseForm={closeExpenseHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
