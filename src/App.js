import React, { Component } from "react";
import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";

class App extends Component {
    constructor() {
        super();
        this.state = {
            items: [],
        };
        this.removeExpense = this.removeExpense.bind(this);
        this.addExpense = this.addExpense.bind(this);
    }

    addExpense(newExpense, e) {
        e.preventDefault();
        this.setState((prevState) => {
            let newItems = prevState.items;
            newItems.push(newExpense);
            return { items: newItems };
        });
    }

    removeExpense(id) {
        this.setState((prevState) => {
            let remainingItems = [];
            for (const item of prevState.items) {
                if (item.id !== id) remainingItems.push(item);
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
