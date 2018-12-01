import React from 'react';

class InvoiceItemPrice extends React.Component {

    constructor(props) {
        super(props);

        console.log('props', props);
        
        this.state = { value: props.value };

        this.onChanged = this.onChanged.bind(this);
    }
    onChanged(event) {
        try {
            let value = event.target.value;

            console.log(value);

            if(isNaN(value)){
                
                console.log('price is NaN', value);
                
                event.preventDefault();
                
                value = '';
            }

            this.props.onChanged(value);   
            this.setState({ value: value });

        } catch (error) {
            console.log(error);
        }
    }

    render() {
        var value = this.state.value || this.props.value;
        return (
            <td>
                <input
                    type="text"
                    placeholder={this.props.placeholder}
                    onChange={this.onChanged}
                    value={value}
                />
            </td>
        );
    }
}

export default InvoiceItemPrice;