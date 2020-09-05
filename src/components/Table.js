import React, { Component } from "react";
import HeaderRow from "./HeaderRow";
import TableDataRow from "./TableDataRow";
import "bootstrap/dist/css/bootstrap.css";
import ".././App.css";

class Table extends Component {
    removeButtonClicked = (id) => {
        this.props.removeExpense(id);
    };

    render() {
        if (this.props.expenses.length > 0) {
            let tableDataRowComponents = this.props.expenses.map((item) => {
                return <TableDataRow removeButton={this.removeButtonClicked} key={item.id} expense={item} />;
            });

            return (
                <div className="shadows">
                    <table className="table  table-hover table-dark text-center">
                        <HeaderRow />
                        {tableDataRowComponents}
                    </table>
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default Table;
