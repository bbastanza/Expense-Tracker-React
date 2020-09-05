import React, { Component } from "react";
import ".././App.css";
import "bootstrap/dist/css/bootstrap.css";
import FormLayout from "./FormLayout";

class FormData extends Component {
    state = {
        id: "",
        date: "",
        amount: "",
        type: "Cash",
        description: "",
    };

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    pressedSubmit = (e) => {
        this.props.addExpense(this.state, e);
        this.setState({
            id: "",
            date: "",
            amount: "",
            type: "Cash",
            description: "",
        });
    };

    render() {
        return <FormLayout pressedSubmit={this.pressedSubmit} handleChange={this.handleChange} data={this.state} />;
    }
}

export default FormData;
