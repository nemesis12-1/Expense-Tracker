import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpensesChart";
import { useState } from "react";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const filterChangeHandler = (seletedYear) => {
    setFilteredYear(seletedYear);
  };

  const filteredExpenses = props.item.filter((Expense) => {
    return Expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </>
  );
}

export default Expense;
