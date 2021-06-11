import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expences.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

const Expences = ({ expenses }) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedFilter) => {
    setFilterYear(selectedFilter);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterChangeHandler} value={filterYear} />
      {expenses.map((ele, idx) => (
        <ExpenseItem
          key={idx}
          title={ele.title}
          amount={ele.amount}
          date={ele.date}
        />
      ))}
    </Card>
  );
};

export default Expences;
