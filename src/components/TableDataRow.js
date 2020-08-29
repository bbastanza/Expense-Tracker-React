import React from "react";

function TableDataRow(props) {
    return (
        <tbody>
            <tr>
                <td>{props.expense.date}</td>
                <td>{props.expense.amount}</td>
                <td>{props.expense.type}</td>
                <td>{props.expense.description}</td>
                <td>
                    <button onClick={() => props.handleChange(props.expense.id)}>X</button>
                </td>
            </tr>
        </tbody>
    );
}

export default TableDataRow;
