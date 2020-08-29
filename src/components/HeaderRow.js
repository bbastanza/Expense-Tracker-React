import React from "react";

function TableHeaderRow() {
    return (
        <tbody>
            <tr>
                <th className="data-cell">Date</th>
                <th className="data-cell">Amount</th>
                <th className="data-cell">Type</th>
                <th className="data-cell">Description</th>
                <th className="data-cell">Remove</th>
            </tr>
        </tbody>
    );
}

export default TableHeaderRow;
