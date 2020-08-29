import React from "react";

function Form(props) {
    let newExpense = {
        id: 1,
        date: 301988,
        amount: 300,
        type: "credit",
        description: "McDonald's",
    };

    return (
        <div>
            <button onClick={props.addExpense(newExpense)}>Submit</button>
        </div>
    );
}

export default Form;
