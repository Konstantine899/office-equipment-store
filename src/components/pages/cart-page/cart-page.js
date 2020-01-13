import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = () =>{
    return (
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
    );
};

export default CartPage;