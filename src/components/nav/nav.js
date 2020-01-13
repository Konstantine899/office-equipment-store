import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {Link} from 'react-router-dom';

import HomePage from '../pages/home-page';
import CartPage from '../pages/cart-page';
import CartridgesPage from '../pages/cartridges-page';
import ComplatePage from '../pages/complate-page';
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
                <Link to="/cart">Корзина</Link>
            </li>
            <li>
                <Link to="/cartridges">Картриджи</Link>
            </li>
            <li>
                <Link to="/laptops">Ноутбуки</Link>
            </li>
            <li>
                <Link to="/complate">Запчасти</Link>
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
            <Route path="/cart" component={CartPage} />
            <Route path="/cartridges" component={CartridgesPage} />
            <Route path="/laptops" component={LaptopsPage} />
            <Route path="/complate" component={ComplatePage} />
            <Route path="/printers" component={PrintersPage} />
            <Route path="/toner" component={TonerPage} />
        </Switch>
    );
};

export default Navigation;