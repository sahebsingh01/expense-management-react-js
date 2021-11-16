import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import { useState } from "react";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2020");

  const onFilterDateHandler = (selectedFilterDate) => {
    console.log(selectedFilterDate);
    setFilterDate(selectedFilterDate);
  };

  const filterdExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear() == filterDate
  );

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterDate}
          onFilterDateSelect={onFilterDateHandler}
        />
        <ExpensesChart expenses={filterdExpenses} />
        <ExpensesList items={filterdExpenses} />
      </Card>
    </li>
  );
};

export default Expenses;
