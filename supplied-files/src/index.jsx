import React from 'react';
import ReactDOM from 'react-dom';
import getStore from './store/getStore';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

const store = getStore();

ReactDOM.render( 
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById( 'root' )
);