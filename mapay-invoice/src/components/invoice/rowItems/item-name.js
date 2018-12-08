import React from 'react';

// Cell
class InvoiceItemName extends React.Component {

    render() {
        return (
            <td>
                <input
                    className="item-name form-control"
                    type="text"
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.name} 
                    onChange={this.props.onChanged}
                />
            </td>
        );
    }
}

export default InvoiceItemName;