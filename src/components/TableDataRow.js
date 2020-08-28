import React, { Component } from "react";

class TableDataRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.date}</td>
                <td>{this.props.item.amount}</td>
                <td>{this.props.item.type}</td>

                <td>
                    <button></button>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;
