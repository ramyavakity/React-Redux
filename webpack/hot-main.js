import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './hot-app';
import store from '../src/store';

const AppBundle = () => (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);

ReactDOM.render(<AppBundle />, document.getElementById('root'));