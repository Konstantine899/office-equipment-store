import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Payment from '../pages/payment';
import Delivery from '../pages/delivery';
import AboutShop from '../pages/about-shop';
import Comments from '../pages/comments';
import Blog from '../pages/blog';
import Stocks from '../pages/stocks';
import Contacts from '../pages/contacts';

import './footer-information.scss';


const FooterInformation = () => {
    return (
       <Switch>
           <nav className="footer__information">
               <ul>
                   <li>
                       <Link to="/payment">Оплата</Link>
                   </li>

                   <li>
                       <Link to="/delivery">Доставка</Link>
                   </li>

                   <li>
                       <Link to="/about-shop">О магазине</Link>
                   </li>

                   <li>
                       <Link to="/comments">Отзывы</Link>
                   </li>

                   <li>
                       <Link to="/blog">Блог</Link>
                   </li>

                   <li>
                       <Link to="/stocks">Акции</Link>
                   </li>

                   <li>
                       <Link to="/contacts">Контакты</Link>
                   </li>
               </ul>
           </nav>

           <Route path="/payment" component={Payment}/>
           <Route path="/delivery" component={Delivery}/>
           <Route path="/about-shop" component={AboutShop}/>
           <Route path="/comments" component={Comments}/>
           <Route path="/blog" component={Blog}/>
           <Route path="/stocks" component={Stocks}/>
           <Route path="/contacts" component={Contacts}/>
       </Switch>
    );
};

export default FooterInformation;
