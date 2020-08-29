import React, { Component } from "react";
import HeaderRow from "./HeaderRow";
import TableDataRow from "./TableDataRow";

class Table extends Component {
    constructor() {
        super();
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked(id) {
        this.props.removeExpense(id);
    }

    render() {
        let tableDataRowComponents = this.props.expenses.map((item) => {
            return <TableDataRow handleChange={this.buttonClicked} key={item.id} expense={item} />;
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
