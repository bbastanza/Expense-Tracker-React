import React, { Component } from "react";
import "./App.css";
import HeaderRow from "./components/HeaderRow";
import TableDataRow from "./components/TableDataRow";

class App extends Component {
    constructor() {
        super();
        this.state = {
            expenses: [{ id: Math.random(), name: "here", date: 1990, amount: 342.33, type: "credit" }],
            dataComponents: [],
        };
        this.updateState = this.updateState.bind(this);
    }

    updateState() {
        this.setState((prevState) => {
            let newExpenseComponents = [];
            for (const expense of prevState.expenses) {
                newExpenseComponents.push(<TableDataRow key={expense.id} item={expense} />);
                console.log(<TableDataRow key={expense.id} item={expense} />);
            }
            return { dataComponents: newExpenseComponents };
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 onClick={this.updateState}>React Expense Tracker</h1>
                </header>
                <table>
                    <thead className="table">
                        <HeaderRow />
                    </thead>
                    <tbody>{this.state.dataComponents}</tbody>
                </table>
            </div>
        );
    }
}

export default App;
