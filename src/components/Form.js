import React, { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            date: "",
            amount: "",
            type: "Cash",
            description: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.pressedSubmit = this.pressedSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    pressedSubmit(e) {
        this.props.addExpense(this.state, e);
        this.setState({
            id: "",
            date: "",
            amount: "",
            type: "Cash",
            description: "",
        });
    }

    render() {
        return (
            <form style={{ color: "white" }} onSubmit={this.pressedSubmit}>
                <label>
                    Description:
                    <input
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Amount:
                    <input
                        type="number"
                        name="amount"
                        value={this.state.amount}
                        onChange={this.handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Type:
                    <select name="type" value={this.state.type} onChange={this.handleChange}>
                        <option value="Cash">Cash</option>
                        <option value="Credit Card">Credit</option>
                        <option value="Debit Card">Debit</option>
                        <option value="Crypto">Crypto</option>
                        <option value="Direct">Direct</option>
                    </select>
                </label>
                <br />
                <label>
                    Date:
                    <input name="date" type="date" value={this.state.date} onChange={this.handleChange} required />
                </label>
                <br />
                <input type="submit" value="Add Expense" />
            </form>
        );
    }
}

export default Form;
