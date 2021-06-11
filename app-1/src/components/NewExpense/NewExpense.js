import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = ({ onAddExpense }) => {
  const [showForm, setShowForm] = useState(false);
  const AddExpenseButton = () => {
    return (
      <div className="new-expense__actions">
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            setShowForm(true);
          }}
        >
          Add Expense
        </button>
      </div>
    );
  };
  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm onAddExpense={onAddExpense} setShowForm={setShowForm} />
      ) : (
        <AddExpenseButton />
      )}
    </div>
  );
};

export default NewExpense;
