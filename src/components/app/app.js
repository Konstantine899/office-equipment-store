import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {
    HomePage,
    CartPage,
    CartridgesPage,
    ComplatePage,
    LaptopsPage,
    PrintersPage,
    TonerPage
} from '../pages';
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