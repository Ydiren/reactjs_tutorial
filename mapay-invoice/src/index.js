import React from 'react';
import ReactDOM from 'react-dom';

// Cell
class InvoiceItemName extends React.Component {

    render() {
        return (
            <td>
                <input
                    type="text"
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.name} />
            </td>
        );
    }
}

class InvoiceItemQuantity extends React.Component {

    render() {
        return (
            <td>
                <input
                    type="number"
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.value}
                />
            </td>
        );
    }
}

class InvoiceItemPrice extends React.Component {

    render() {
        return (
            <td>
                <input
                    type="number"
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.value}
                />
            </td>
        );
    }
}

class InvoiceItemTotal extends React.Component {

    render() {
        return (
            <td>
                <input
                    readOnly
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                />
            </td>
        );
    }
}

class InvoiceItemDescription extends React.Component {

    render() {
        return (
            <td colSpan={this.props.colspan}>
                <textarea
                    style={{ width: "100%" }}
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.description}
                />
            </td>
        )
    }
}

// Row
class InvoiceRow extends React.Component {

    render() {
        return (
            <tbody className="invoiceItem" id={this.props.number} key={this.props.number}>
                <tr className="itemRow">
                    <InvoiceItemName
                        placeholder='Item name'
                        name={this.props.name}
                    />
                    <InvoiceItemQuantity
                        placeholder='1'
                        value={this.props.quantity}
                    />
                    <InvoiceItemPrice
                        placeholder='0.00'
                        value={this.props.price}
                    />
                    <InvoiceItemTotal
                        content='0.00'
                        value={this.props.total}
                    />
                </tr>
                <tr className="itemDescription">
                    <InvoiceItemDescription
                        colspan="3"
                        placeholder='Enter a detailed description (optional)'
                        description={this.props.description}
                    />
                </tr>
                <tr>
                    <td>
                        <button onClick={() => this.props.onClick()}>Add Row</button>
                    </td>
                </tr>
            </tbody>
        );
    }
}

// Table
// Will hold the state of the invoice. e.g. running totals etc.
class InvoiceTable extends React.Component {

    constructor(props) {
        super(props);

        this.defaultRowData = {
            number: 0,
            name: 'Bernard',
            description: 'Hello World',
            quantity: 0,
            price: 0.00,
            total: 0
        };

        this.state = {
            rows: [
                {
                    number: 0,
                    name: this.defaultRowData.name,
                    description: this.defaultRowData.description,
                    quantity: this.defaultRowData.quantity,
                    price: this.defaultRowData.price,
                    total: this.defaultRowData.total
                },
            ],
            nextRowId: 1,
        };
    }

    addRowAfter(rowNumber) {
        console.log(this.state);
        let currentRowId = this.state.nextRowId;
        this.setState({ nextRowId: currentRowId + 1 });

        let newRow = {
            number: currentRowId,
            name: this.defaultRowData.name,
            description: this.defaultRowData.description,
            quantity: this.defaultRowData.quantity,
            price: this.defaultRowData.price,
            total: this.defaultRowData.total
        }
        const rows = this.state.rows.slice();
        let rowBefore = rows.find(r => r.number === rowNumber)
        rows.splice(rowBefore.number + 1, 0, newRow);
        this.setState({ rows: rows });
    }

    renderRow(rowData) {

        return <InvoiceRow
            key={rowData.number}
            number={rowData.number}
            name={rowData.name}
            description={rowData.description}
            quantity={rowData.quantity}
            price={rowData.price}
            total={rowData.total}
            onClick={() => this.addRowAfter(rowData.number)}
        />
    }

    render() {
        const rows = this.state.rows.slice();

        let rowElements = [];
        for (let row = 0; row < rows.length; row++) {
            const rowData = rows[row];
            rowElements.push(this.renderRow(rowData));
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                {rowElements}

            </table>
        );
    }
}

//---------------------------------------------------------

ReactDOM.render(
    <InvoiceTable />,
    document.getElementById('root')
);