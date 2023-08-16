// import ExpenseItem from "./components/ExpenseItem";
import Expense from "./components/Expenses/Expense";
import NewExpense from "./components/NewExpense/NewExpenses";
import "./styles.css";
import { useState } from "react";
const DUMMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 9420,
    date: new Date(2023, 7, 14)
  },
  {
    id: "e2",
    title: "New TV",
    amount: 7990,
    date: new Date(2022, 2, 12)
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 2940,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 4500,
    date: new Date(2021, 5, 12)
  }
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense item={expenses} />
    </>
  );
};

export default App;
