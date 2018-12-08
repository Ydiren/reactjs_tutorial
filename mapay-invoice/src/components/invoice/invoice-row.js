import React from 'react';

import InvoiceItemName from './rowItems/item-name';
import InvoiceItemQuantity from './rowItems/item-quantity';
import InvoiceItemPrice from './rowItems/item-price';
import InvoiceItemTotal from './rowItems/item-total';
import InvoiceItemDescription from './rowItems/item-description';
import InvoiceItemDelete from './rowItems/item-delete';

// Row
class InvoiceRow extends React.Component {
    constructor(props) {
        super(props);

        this.onNameChanged = this.onNameChanged.bind(this);
        this.onQuantityChanged = this.onQuantityChanged.bind(this);
        this.onPriceChanged = this.onPriceChanged.bind(this);
        this.onTotalChanged = this.onTotalChanged.bind(this);
        this.onDescriptionChanged = this.onDescriptionChanged.bind(this);
    }

    onNameChanged(newName) {
        var newData = Object.assign({}, this.props.data, {name: newName});
        this.props.onRowChanged(newData);
    }

    onQuantityChanged(newQuantity) {
        var newData = {
            ...this.props.data, 
            quantity: newQuantity,
            total: newQuantity * this.props.data.price
        };
        this.props.onRowChanged(newData);
    }

    onPriceChanged(newPrice) {
        var newData = {
            ...this.props.data, 
            price: newPrice,
            total: this.props.data.quantity * newPrice
        };
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
                        onChanged={(newPrice) => this.onPriceChanged(newPrice)}
                    />
                    <InvoiceItemTotal
                        content='0.00'
                        value={this.props.data.total}
                        onChanged={(event) => this.onTotalChanged(event.target.value)}
                    />
                    
                    <InvoiceItemDelete
                        onDeleteRow={this.props.onDeleteRow}
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
            </tbody>
        );
    }
}

export default InvoiceRow;