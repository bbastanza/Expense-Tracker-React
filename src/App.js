import React from "react";
import "./App.css";
import ExpenseRow from "./ExpenseRow";
import TableHeaderRow from "./ExpenseRow";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>React Expense Tracker</h1>
            </header>
            <table className="table">
                <TableHeaderRow />
            </table>
        </div>
    );
}

export default App;
