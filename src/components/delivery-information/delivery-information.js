import React from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import DeliveryInformationLearnMore from '../pages/delivery-information-learn-more';
import LogisticsDelivery from '../../assets/svg/delivery-information';
import MapSvg from '../../assets/svg/map';
import SertificateSvg from '../../assets/svg/сertificate';
import OperatorSvg from '../../assets/svg/operator';
import './delivery-information.scss';

const DeliveryInformation = () => {
    return (
        <section className="delivery__information">
            <section className="delivery__information-row">
                <div className="delivery__information-items">

                    <div className="delivery__information-item-1">
                        <div className="delivery__information-img">
                            <MapSvg />
                        </div>
                        <p>
                            Возможность&nbsp;<strong>самовызова</strong>
                        </p>
                    </div>

                    <div className="delivery__information-item-2">
                        <div className="delivery__information-img">
                            <LogisticsDelivery />
                        </div>
                        <p>
                            <strong>Доставка&nbsp;в&nbsp;день&nbsp;заказа</strong>
                            &nbsp; при&nbsp;заказе&nbsp;до&nbsp;<br />13:30
                       </p>
                    </div>

                    <div className="delivery__information-learn-more">
                    <div className="delivery__information-learn-more-inner">
                        <Link className="delivery__information-learn-more-inner-a" to="delivery-information-learn-more">Узнать подробнее</Link>
                        <Route path="delivery-information-learn-more"  component={DeliveryInformationLearnMore} />
                        </div> 
                    </div>


                    <div className="delivery__information-item-3">
                        <div className="delivery__information-img">
                            <SertificateSvg />
                        </div>
                        <p>
                            <strong>Качественный,&nbsp;сертифицированный</strong>
                            <br />&nbsp;товар/оборудование
                        </p>
                    </div>
                    <div className="delivery__information-item-4">
                        <div className="delivery__information-img">
                            <OperatorSvg />
                        </div>
                        <p>
                            <strong>Индивидуальная&nbsp;консультация</strong>
                            <br />&nbsp;в&nbsp;подборе&nbsp;товара
                        </p>
                    </div>
                </div>




            </section>
        </section>
    );
};

export default DeliveryInformation;