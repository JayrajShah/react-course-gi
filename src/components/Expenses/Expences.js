import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expences.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseChart from "./ExpenseChart";

const Expences = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedFilter) => {
    setFilterYear(selectedFilter);
  };

  const filterExpenses = () => {
    return expenses.filter(
      (ele) => ele.date.getFullYear().toString() === filterYear
    );
  };

  const NoItemsComponent = () => {
    return (
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          color: "white",
          fontWeight: 500,
        }}
      >
        <p>No item found</p>
      </div>
    );
  };

  const ExpensesListComponent = () => {
    return filterExpenses().map((ele, idx) => (
      <ExpenseItem
        key={idx}
        title={ele.title}
        amount={ele.amount}
        date={ele.date}
      />
    ));
  };
  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterChangeHandler} value={filterYear} />
      <ExpenseChart expenses={filterExpenses()} />
      {filterExpenses().length === 0 ? (
        <NoItemsComponent />
      ) : (
        <ExpensesListComponent />
      )}
    </Card>
  );
};

export default Expences;
