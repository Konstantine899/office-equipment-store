import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';

import HomePage from '../pages/home-page';
import InkPage from '../pages/ink-page';
import CartridgesPage from '../pages/cartridges-page';
import CompletePage from '../pages/complete-page';
import LaptopsPage from '../pages/laptops-page';
import PrintersPage from '../pages/printers-page';
import TonerPage from '../pages/toner-page';

import './nav.scss';



const Navigation = () => {

    return (
        
        <Switch>
            <nav>
            <ul className="headerNav">
            <li>
                <Link to="/">Домашняя</Link>
            </li>
            <li>
                <Link to="/ink">Чернила</Link>
            </li>
            <li>
                <Link to="/cartridges">Картриджи</Link>
            </li>
            <li>
                <Link to="/laptops">Ноутбуки</Link>
            </li>
            <li>
                <Link to="/complete">Запчасти</Link>
            </li>
            <li>
                <Link to="/printers">Принтеры</Link>
            </li>
            <li>
                <Link to="/toner">Тонер</Link>
            </li>
        </ul>
        </nav>
            <Route path="/" component={HomePage} exact/>
            <Route path="/ink" component={InkPage} />
            <Route path="/cartridges" component={CartridgesPage} />
            <Route path="/laptops" component={LaptopsPage} />
            <Route path="/complete" component={CompletePage} />
            <Route path="/printers" component={PrintersPage} />
            <Route path="/toner" component={TonerPage} />
        </Switch>
    );
};

export default Navigation;