import React from 'react';

class InvoiceItemDelete extends React.Component {

    render() {
        return (
            <td>
                <button onClick={this.props.onDeleteRow}
                    className="delete-item"
                    alt="Delete Row" 
                    />
            </td>
        );
    }
}

export default InvoiceItemDelete;