import React from 'react';

class InvoiceRecipients extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            to: "",
            cc: ""
        };

        this.ccChanged = this.ccChanged.bind(this);
        this.toChanged = this.toChanged.bind(this);
    }

    ccChanged(event) {
        console.log('event', event.target.value);
        
        const state = Object.assign({}, this.state, {cc: event.target.value});
        this.setState(state);

        console.log('state', this.state);        
    }

    toChanged(event) {
        console.log('event', event.target.value);
        
        const state = Object.assign({}, this.state, {to: event.target.value});
        this.setState(state);

        console.log('state', this.state);        
    }

    render() {
        return (
            <section className="recipients">
                <div className="label-column">
                    <label htmlFor="to-email">Bill to:</label>
                    <label htmlFor="cc-email">Cc:</label>
                </div>
                <div className="field-column">
                    <input type="email" id="to-email" name="to-email" placeholder="Email address" onChange={this.toChanged} />
                    <input type="email" id="cc-email" name="cc-email" placeholder="Email address" onChange={this.ccChanged} />
                </div>
            </section>
        );
    }
}

export default InvoiceRecipients;