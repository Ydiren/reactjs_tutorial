import React from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

class InvoiceDetails extends React.Component {
    
    render() {
        console.log('details', this.props.details);

        return (
            <section>
                <div className="label-column">
                    <label htmlFor="invoice-date">Invoice Date:</label>
                    <label htmlFor="due-date">Due Date:</label>
                </div>
                <div className="field-column">
                    <DatePicker id="invoice-date" name="invoice-date" 
                        selected={this.props.details.invoiceDate} 
                        onChange={this.handleDateChange}
                        placeholderText="Click to select a date"
                        />
                    <DatePicker id="due-date" name="due-date" 
                        selected={this.props.details.dueDate} 
                        onChange={this.handleDateChange}
                        placeholderText="Click to select a date"
                        />
                    
                </div>
            </section>
        )
    }
}

export default InvoiceDetails;