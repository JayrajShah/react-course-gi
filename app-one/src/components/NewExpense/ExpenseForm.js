import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = ({ onAddExpense, setShowForm }) => {
  const initialStateData = {
    title: "",
    amount: "",
    date: "",
  };
  const [formData, setFormData] = useState(initialStateData);

  const inputHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      title: formData.title,
      amount: +formData.amount,
      date: new Date(formData.date),
    };
    onAddExpense(data);
    setFormData(initialStateData);
    setShowForm(false);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            onChange={inputHandler}
            value={formData.title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            onChange={inputHandler}
            value={formData.amount}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            onChange={inputHandler}
            value={formData.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
            setShowForm(false);
          }}
        >
          Cancel
        </button>
        <button type="submit" onClick={submitHandler}>
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
