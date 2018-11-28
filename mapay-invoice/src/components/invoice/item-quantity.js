import React from 'react';

class InvoiceItemQuantity extends React.Component {

    render() {
        return (
            <td>
                <input
                    type="number"
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.value}
                    onChange={this.props.onChanged}
                />
            </td>
        );
    }
}

export default InvoiceItemQuantity;