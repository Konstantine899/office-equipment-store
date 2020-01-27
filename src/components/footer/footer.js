import React from 'react';
import {Link} from 'react-router-dom';

import Visa from '../../assets/svg/footer/visa';
import Maestro from '../../assets/svg/footer/maestro';
import MasterCard from '../../assets/svg/footer/mastercard';

import FooterNav from '../footer-nav';
import FooterInformation from '../footer-information';

import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <section className="footer__info">
                <h4>OfficeEquipmentStoreStore</h4>

                <p>Свидетельство 0129174<br/>
                     24 января 2020г.<br />
                    УНП 192761153<br />
                    Дата регистрации в Торговом реестре РБ:08.03.2020</p>


                <div className="footer__info-carts">

                    <div className="visa">
                        <Visa />
                    </div>

                    <div className="maestro">
                        <Maestro />
                    </div>
                    <div className="mastercard">
                        <MasterCard />
                    </div>
                </div>
            </section>


            <section className="footer__menu">
                <h4>Каталог</h4>
                <FooterNav/>
            </section>


            <section className="footer__menu__info">
                <h4>Информация</h4>
                <FooterInformation />
            </section>


            <section className="footer__contacts">
                <h4>Контакты</h4>
                <Link to="+375 29 891-89-71">+375 29 891-89-71</Link>
                <Link to="+375 44 891-89-71">+375 44 891-89-71</Link>
                <Link to="officeEquipmentStore.gmail.com" >OfficeEquipmentStore.gmail.com</Link>
                <p>210040 г.Витебск<br/> ул Чкалова к 1, д 41, каб 312</p>
            </section>
        </footer>
    );

};

export default Footer;

