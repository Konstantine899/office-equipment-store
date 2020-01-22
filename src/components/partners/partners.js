import React from 'react';
import './partners.scss';


import Acer from '../../assets/svg/partners/acer';
import Asus from '../../assets/svg/partners/asus';
import Samsung from '../../assets/svg/partners/samsung';
import Canon from '../../assets/svg/partners/canon';
import Epson from '../../assets/svg/partners/epson';
import Xerox from '../../assets/svg/partners/xerox';
import Lenovo from '../../assets/svg/partners/lenovo';
import Dell from '../../assets/svg/partners/dell';
import Sony from '../../assets/svg/partners/sony';
import Ricoh from '../../assets/svg/partners/ricoh';




const Partners = () => {

    return (
        <section className="partners">

            <section className="partners__logo">
                <div className="partners__logo-items">

                    <div className="partners__logo-item-1">
                        <Acer />
                    </div>

                    <div className="partners__logo-item-2">
                        <Asus />
                    </div>

                    <div className="partners__logo-item-3">
                        <Samsung />
                    </div>

                    <div className="partners__logo-item-4">
                        <Canon />
                    </div>

                    <div className="partners__logo-item-5">
                        <Epson />
                    </div>

                    <div className="partners__logo-item-6">
                        <Xerox />
                    </div>

                    <div className="partners__logo-item-7">
                        <Lenovo />
                    </div>

                    <div className="partners__logo-item-8">
                        <Sony />
                    </div>

                    <div className="partners__logo-item-9">
                        <Dell />
                    </div>

                    <div className="partners__logo-item-10">
                        <Ricoh />
                    </div>

                </div>


            </section>
            <section className="partners__join__us">

                <div className="partners__join__us-rhombus">
                    <div className="partners__join__us-rhombus-background">
                        <div className="partners__join__us-rhombus-content">
                            <h2>Наши партнеры</h2>
                            <p>Индивидуальный подход к каждому клиенту, по<br/>
                             ценообразованию и условиям работы. Только качественный и<br/>
                              сертифицированный товар и оборудование.</p>
                              <span>Присоеденяйтесь!</span>
                        </div>
                    </div>
                </div>
            </section>

        </section>
    );

};

export default Partners;