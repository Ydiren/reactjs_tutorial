import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import {createLogger } from 'redux-logger';

import InvoiceTable from './components/invoice/invoice-table';

import { invoice } from './reducers/reducer';

var logger = createLogger({
    collapsed: true
});

var store = createStore(invoice, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <InvoiceTable />
    </Provider>,
    document.getElementById('root')
);