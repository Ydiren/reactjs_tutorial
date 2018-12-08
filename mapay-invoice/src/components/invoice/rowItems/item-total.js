import React from 'react';

class InvoiceItemTotal extends React.Component {

    render() {

        var numberFormatter = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        });
        var formattedValue = numberFormatter.format(this.props.value);

        return (
            <td>
                <input
                    className="item-total-amount form-control-plaintext"
                    readOnly
                    type="text"
                    placeholder={this.props.placeholder}
                    value={formattedValue}
                />
            </td>
        );
    }
}

export default InvoiceItemTotal;