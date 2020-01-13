import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import 'normalize.css';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import EquipmentstoreService from './services/equipmentstore-cervice';
import { EquipmentstoreServiceProvider } from './components/equipmentstore-service-сontext';

import store from './store';

const equipmentstoreService = new EquipmentstoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <EquipmentstoreServiceProvider value={equipmentstoreService}>
                <Router>
                    <App />
                </Router>
            </EquipmentstoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);
