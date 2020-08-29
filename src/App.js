import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: [
                {
                    id: 1,
                    date: 301988,
                    amount: 300,
                    type: "credit",
                    description: "McDonald's",
                },
                {
                    id: 2,
                    date: 777547,
                    amount: 198,
                    type: "cash",
                    description: "Burger King",
                },
            ],
        };
        this.removeExpense = this.removeExpense.bind(this);
        this.addExpense = this.addExpense.bind(this);
    }

    addExpense(newExpense) {
        console.log(newExpense);
    }

    removeExpense(id) {
        this.setState((prevState) => {
            let remainingItems = [];
            for (const item of prevState.items) {
                if (item.id !== id) {
                    remainingItems.push(item);
                }
            }
            return { items: remainingItems };
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>React Expense Tracker</h1>
                </header>
                <Form addExpense={this.addExpense} />
                <Table removeExpense={this.removeExpense} expenses={this.state.items} />
            </div>
        );
    }
}

export default App;
