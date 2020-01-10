import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import CartridgesPage from '../pages/cartridges-page';
import ComplatePage from '../pages/complate-page';
import LaptopsPage from '../pages/laptops-page';
import PrintersPage from '../pages/printers-page';
import TonerPage from '../pages/toner-page';

import './app.scss';



const App = () => {

    return (
        <Switch>
            <Route path="/" component={HomePage} exact/>
            <Route path="/cart" component={CartPage} />
            <Route path="/cartridges" component={CartridgesPage} />
            <Route path="/laptops" component={LaptopsPage} />
            <Route path="/complate" component={ComplatePage} />
            <Route path="/printers" component={PrintersPage} />
            <Route path="/toner" component={TonerPage} />
        </Switch>
    );
};

export default App;