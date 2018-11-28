import React from 'react';

import InvoiceItemName from './item-name';
import InvoiceItemQuantity from './item-quantity';
import InvoiceItemPrice from './item-price';
import InvoiceItemTotal from './item-total';
import InvoiceItemDescription from './item-description';

// Row
class InvoiceRow extends React.Component {
    constructor(props) {
        super(props);

        this.onNameChanged = this.onNameChanged.bind(this);
    }

    onNameChanged(newName) {
        var newData = Object.assign({}, this.props.data, {name: newName});
        this.props.onRowChanged(newData);
    }

    onQuantityChanged(newQuantity) {
        var newData = Object.assign({}, this.props.data, {quantity: newQuantity});
        this.props.onRowChanged(newData);
    }

    onPriceChanged(newPrice) {
        var newData = Object.assign({}, this.props.data, {price: newPrice});
        this.props.onRowChanged(newData);
    }

    onTotalChanged(newTotal) {
        var newData = Object.assign({}, this.props.data, {total: newTotal});
        this.props.onRowChanged(newData);
    }

    onDescriptionChanged(newDescription) {
        var newData = Object.assign({}, this.props.data, {description: newDescription});
        this.props.onRowChanged(newData);
    }

    render() {
        return (
            <tbody className="invoiceItem" id={this.props.number} key={this.props.number}>
                <tr className="itemRow">
                    <InvoiceItemName
                        placeholder='Item name'
                        name={this.props.data.name}
                        onChanged={(event) => this.onNameChanged(event.target.value)}
                    />
                    <InvoiceItemQuantity
                        placeholder='1'
                        value={this.props.data.quantity}
                        onChanged={(event) => this.onQuantityChanged(event.target.value)}
                    />
                    <InvoiceItemPrice
                        placeholder='0.00'
                        value={this.props.data.price}
                        onChanged={(event) => this.onPriceChanged(event.target.value)}
                    />
                    <InvoiceItemTotal
                        content='0.00'
                        value={this.props.data.total}
                        onChanged={(event) => this.onTotalChanged(event.target.value)}
                    />
                </tr>
                <tr className="itemDescription">
                    <InvoiceItemDescription
                        colspan="3"
                        placeholder='Enter a detailed description (optional)'
                        description={this.props.data.description}
                        onChanged={(event) => this.onDescriptionChanged(event.target.value)}
                    />
                </tr>
                <tr>
                    <td>
                        <button onClick={() => this.props.onAddRow()}>Add Row</button>
                    </td>
                    <td>
                        <button onClick={() => this.props.onDeleteRow()}>Delete Row</button>
                    </td>
                </tr>
            </tbody>
        );
    }
}

export default InvoiceRow;