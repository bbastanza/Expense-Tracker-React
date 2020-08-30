import React, { Component } from "react";
import HeaderRow from "./HeaderRow";
import TableDataRow from "./TableDataRow";

class Table extends Component {
    constructor() {
        super();
        this.removeButtonClicked = this.removeButtonClicked.bind(this);
    }

    removeButtonClicked(id) {
        this.props.removeExpense(id);
    }

    render() {
        let tableDataRowComponents = this.props.expenses.map((item) => {
            return <TableDataRow removeButton={this.removeButtonClicked} key={item.id} expense={item} />;
        });

        return (
            <div>
                <table className="table">
                    <HeaderRow />
                    {tableDataRowComponents}
                </table>
            </div>
        );
    }
}

export default Table;
