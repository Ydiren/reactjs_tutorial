import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class InvoiceDetails extends React.Component {
    
    render() {
        console.log('details', this.props.details);

        return (
            <section className="details">
                <div className="form-group">
                    <label htmlFor="invoice-date">Invoice Reference:</label>
                    <input id="invoice-reference" name="invoice-reference" 
                        type="text"
                        placeholder="Invoice reference"
                        className="form-control"
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="invoice-date">Invoice Date:</label>
                    <DatePicker id="invoice-date" name="invoice-date" 
                        selected={this.props.details.invoiceDate} 
                        onChange={this.handleDateChange}
                        placeholderText="Click to select a date"
                        className="form-control"
                        />
                </div>
                <div className="form-group">
                    <label htmlFor="due-date">Due Date:</label>
                    <DatePicker id="due-date" name="due-date" 
                        selected={this.props.details.dueDate} 
                        onChange={this.handleDateChange}
                        placeholderText="Click to select a date"
                        className="form-control"
                        />                    
                </div>
            </section>
        )
    }
}

export default InvoiceDetails;