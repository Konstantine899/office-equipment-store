import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import CartridgesPage from '../pages/cartridges-page';
import LaptopsPage from '../pages/laptops-page';
import CompletePage from '../pages/complete-page';
import PrintersPage from '../pages/printers-page';
import TonerPage from '../pages/toner-page';

import './our-production.scss';

const OurProductionNav = () => {
    return (
        <Switch>
            <nav className="our__production__nav">
                <ul>
                    <li>
                        <Link to="/cartridges">
                        <img src={require('../../assets/img/production/1.png')} alt="катриджи "/>
                        <h3>Катриджи</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/laptops">
                            <h3></h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/complete"></Link>
                    </li>
                    <li>
                        <Link to="/printers"></Link>
                    </li>
                    <li>
                        <Link to="/toner"></Link>
                    </li>
                </ul>
            </nav>
            <Route path="/cartridges" component={CartridgesPage} />
            <Route path="/laptops" component={LaptopsPage} />
            <Route path="/complete" component={CompletePage} />
            <Route path="/printers" component={PrintersPage} />
            <Route path="/toner" component={TonerPage} />
        </Switch>
    );

};

export default OurProductionNav;