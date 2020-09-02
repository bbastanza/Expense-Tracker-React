import React from "react";

function TableHeaderRow() {
    return (
        <thead className="table-info">
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Date</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

export default TableHeaderRow;
