import React from "react";
import ".././App.css";
import "bootstrap/dist/css/bootstrap.css";

function FormLayout(props) {
    return (
        <div className="container">
            <form onSubmit={props.pressedSubmit}>
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
                            value={props.data.description}
                            onChange={props.handleChange}
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
                            value={props.data.amount}
                            onChange={props.handleChange}
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
                            value={props.data.type}
                            onChange={props.handleChange}
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
                            value={props.data.date}
                            onChange={props.handleChange}
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

export default FormLayout;
