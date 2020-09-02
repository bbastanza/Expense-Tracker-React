import React, { Component } from "react";
import ".././App.css";
import "bootstrap/dist/css/bootstrap.css";

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
            <div className="container">
                <form onSubmit={this.pressedSubmit}>
                    <div className="form-group row">
                        <label className="col-sm-2   col-form-label offset-sm-4" htmlFor="description">
                            Description:
                        </label>
                        <div className="col-sm-6">
                            <input
                                id="description"
                                className=" shadowss"
                                type="text"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2   col-form-label offset-sm-4" htmlFor="amount">
                            Amount:
                        </label>
                        <div className="col-sm-6">
                            <input
                                id="amount"
                                className=" shadowss"
                                type="number"
                                name="amount"
                                value={this.state.amount}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2   col-form-label offset-sm-4" htmlFor="type">
                            Type:
                        </label>
                        <div className="col-sm-6">
                            <select
                                id="type"
                                name="type"
                                className=" shadowss"
                                value={this.state.type}
                                onChange={this.handleChange}
                            >
                                <option value="Cash">Cash</option>
                                <option value="Credit Card">Credit</option>
                                <option value="Debit Card">Debit</option>
                                <option value="Crypto">Crypto</option>
                                <option value="Direct">Direct</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label offset-sm-4" htmlFor="date">
                            Date:
                        </label>
                        <div className="col-sm-6">
                            <input
                                id="date"
                                className="date  shadowss"
                                name="date"
                                type="date"
                                value={this.state.date}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="button-container">
                        <input className="btn btn-info buttons  shadowss" type="submit" value="Add Expense" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
