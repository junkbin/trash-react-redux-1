import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import store from './store'

const renderElement = (
    <div>
        <Provider store={store}>
            <App />
        </Provider>

        <Provider store={store}>
            <App />
        </Provider>

        <Provider store={store}>
            <App />
        </Provider>
    </div>
    
);

ReactDOM.render(renderElement, document.getElementById('root'));
registerServiceWorker();
