import React from 'react';

class InvoiceItemTotal extends React.Component {

    render() {
        return (
            <td>
                <input
                    readOnly
                    type="text"
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={this.props.onChanged}
                />
            </td>
        );
    }
}

export default InvoiceItemTotal;