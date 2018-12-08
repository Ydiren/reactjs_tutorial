import React from 'react';

import InvoiceRecipients from './invoice-recipients';
import InvoiceDetails from './invoice-details';
import InvoiceTable from './invoice-table';

class InvoiceForm extends React.Component {
    constructor(props) {
        super(props);

        const today = new Date();
        const nextMonth = new Date(new Date().setMonth(today.getMonth() + 1));
        this.state = {
            recipients: {
                to: "",
                cc: ""
            },
            details: {
                invoiceDate: today,
                dueDate: nextMonth
            },
            items: []
        };

        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(date) {
        console.log(date);
    }

    render() {
        return (
            <div className="invoice-form-container">
                <div className="invoice-form">
                    <InvoiceRecipients />
                    <InvoiceDetails 
                        details={this.state.details}
                        />
                    <InvoiceTable />
                </div>
            </div>
        );
    }
}

export default InvoiceForm;