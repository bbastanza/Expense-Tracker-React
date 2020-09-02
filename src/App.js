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

    componentDidMount() {
        const itemsFromLocalStorage = JSON.parse(localStorage.getItem("expenses")) || [];
        this.setState({ items: itemsFromLocalStorage });
    }

    componentDidUpdate() {
        localStorage.setItem("expenses", JSON.stringify(this.state.items));
    }

    addExpense(newExpense, e) {
        e.preventDefault();
        newExpense.id = Math.random() * 100;
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
                <header className="App-header shadowss">
                    <h1>React Expense Tracker</h1>
                </header>
                <div style={{ float: "right", paddingRight: 70 }}>
                    <img alt="react" src="./logo192.png" />
                </div>
                <div>
                    <Form addExpense={this.addExpense} />
                </div>
                <div id="table">
                    <Table removeExpense={this.removeExpense} expenses={this.state.items} />
                </div>
            </div>
        );
    }
}

export default App;
