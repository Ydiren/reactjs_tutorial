import React from 'react';

class InvoiceItemDescription extends React.Component {

    render() {
        return (
            <td colSpan={this.props.colspan}>
                <textarea
                    style={{ width: "100%" }}
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.description}
                    onChange={this.props.onChanged}
                />
            </td>
        )
    }
}

export default InvoiceItemDescription;