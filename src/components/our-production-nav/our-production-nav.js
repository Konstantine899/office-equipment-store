import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import CartridgesPage from '../pages/cartridges-page';
import InkPage from '../pages/ink-page';
import LaptopsPage from '../pages/laptops-page';
import CompletePage from '../pages/complete-page';
import PrintersPage from '../pages/printers-page';
import TonerPage from '../pages/toner-page';

import './our-production-nav.scss';

const OurProductionNav = () => {
    return (
        <Switch>
            <nav className="our__production__nav">
                <ul>
                    <li><div className="our__production__nav-img">
                    <img src={require('../../assets/img/production/1.png')} alt="Катриджи " />
                    </div>
                        <Link to="/cartridges">
                            <h3>Катриджи</h3>
                        </Link>
                    </li>
                    <li>
                    <div className="our__production__nav-img">
                    <img src={require('../../assets/img/production/2.png')} alt="Чернила " />
                    </div>
                        <Link to="/ink">   
                            <h3>Чернила</h3>
                        </Link>
                    </li>
                    <li>
                        <div className="our__production__nav-img">
                    <img src={require('../../assets/img/production/3.png')} alt="Тонеры " />
                    </div>
                        <Link to="/toner">  
                            <h3>Тонеры</h3>
                        </Link>
                    </li>
                    <li>
                    <div className="our__production__nav-img">
                    <img src={require('../../assets/img/production/4.png')} alt="Комплектующие " />
                    </div>
                        <Link to="/complete">
                            <h3>Запчасти</h3>
                        </Link>
                    </li>
                    <li>
                    <div className="our__production__nav-img">
                    <img src={require('../../assets/img/production/5.png')} alt="Принтеры " />
                    </div>
                        <Link to="/printers">
                            <h3>Принтеры</h3>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Route path="/cartridges" component={CartridgesPage} />
            <Route path="/ink" component={InkPage} />
            <Route path="/laptops" component={LaptopsPage} />
            <Route path="/complete" component={CompletePage} />
            <Route path="/printers" component={PrintersPage} />
            <Route path="/toner" component={TonerPage} />
        </Switch>
    );

};

export default OurProductionNav;