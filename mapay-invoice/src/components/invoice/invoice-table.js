import React from 'react';

import InvoiceRow from './invoice-row';

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
                    ...this.defaultRowData, 
                    number: 0
                }
            ],
            nextRowId: 1,
        };
    }

    addRow() {
        
        let currentRowId = this.state.nextRowId;
        this.setState({ nextRowId: currentRowId + 1 });

        console.log('Adding row: ' + currentRowId);

        let newRow = {
            ...this.defaultRowData,
            number: currentRowId
        };
        const rows = this.state.rows.slice();
        rows.push(newRow);
        this.setState({ rows: rows });
    }

    deleteRow(rowNumber) {
        console.log('deleting row: ' + rowNumber);
        const rows = this.state.rows.slice();
        let rowIndexToDelete = rows.findIndex(r => r.number === rowNumber);
        rows.splice(rowIndexToDelete, 1);
        this.setState({ rows: rows });
    }

    renderRow(rowData) {

        return <InvoiceRow
            key={rowData.number}
            data={rowData}
            onAddRow={() => { const rowNumber = rowData.number; this.addRowAfter(rowNumber); }}
            onDeleteRow={() => { const rowNumber = rowData.number; this.deleteRow(rowNumber) }}
            onRowChanged={(data) => this.updateRow(data)}
        />
    }

    updateRow(updatedRowData) {
        console.log('updateRow', updatedRowData);   
        
        let rows = this.state.rows.slice();

        let index = rows.findIndex(row => row.number === updatedRowData.number);
        if (index > -1) {
            rows[index] = updatedRowData;
            this.setState({rows: rows});
        }
    }

    render() {
        const rows = this.state.rows.slice();
        const rowElements = rows.map(row => this.renderRow(row));

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

                <tbody>
                    <tr>
                        <td>
                            <button onClick={() => this.addRow()}>Add Row</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default InvoiceTable;