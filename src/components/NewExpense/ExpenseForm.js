import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  // using 3 diffrent state for state input management
  const [enteredTitle, setEnteredtitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // using a single state for input management
  // const [useInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: ""
  // });

  const titleChangeHandler = (event) => {
    //1st way
    setEnteredtitle(event.target.value);

    //2nd way
    // setUserInput({
    //   ...useInput,
    //   enteredTitle:event.target.value
    // })

    //3rd way  whenever your state update depend on previous state
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    // console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredtitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            step="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
