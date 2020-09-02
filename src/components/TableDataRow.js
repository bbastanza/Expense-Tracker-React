import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function TableDataRow(props) {
    let amountFormat = `$${parseFloat(props.expense.amount).toFixed(2)}`;
    return (
        <tbody>
            <tr>
                <td>{props.expense.description}</td>
                <td>{amountFormat}</td>
                <td>{props.expense.type}</td>
                <td>{props.expense.date}</td>
                <td>
                    <button className="btn btn-danger shadowss" onClick={() => props.removeButton(props.expense.id)}>
                        X
                    </button>
                </td>
            </tr>
        </tbody>
    );
}

export default TableDataRow;
