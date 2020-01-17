import React from 'react';
import { Link } from 'react-router-dom';


import Magnifier from '../contact-information/magnifier/magnifier';
import './contact-information.scss';

const ContactInformation = () => {
    return (
        <div className="contact__information">

            <div className="contact__information-working-time">
                <p>09:00-18:00
                <span>пн-пт</span>
                </p>
                <h2>Сейчас на связи</h2>
            </div>

            <div className="contact__information-mail">
                <div className="contact__information-gmail">
                    <img src={require('./img/gmail.png')} alt="gmail" />
                    <Link to="officeEquipmentStore.gmail.com" className="contact__information-gmail-a">
                        OfficeEquipmentStore.gmail.com
                </Link>
                </div>

                <div className="contact__information-skype">
                    <img src={require('./img/skype.png')} alt="Skype" />
                    <Link to="Konstantine899" className="contact__information-skype-a">Konstantine899</Link>
                </div>
            </div>
            

            <div className="contact__information-tell">
                <div className="contact__information-tell-mts">
                    <img src={require('./img/icon-mts.png')} alt="MTS" />
                    <Link to="+375298918971" className="contact__information-tell-a" exact>
                        +375&nbsp;29&nbsp;891&nbsp;89&nbsp;71
                    </Link>
                </div>
                <div className="contact__information-tell-velcome">
                    <img src={require('./img/icon-velcom.png')} width="20px" alt="Velkome" />
                    <Link to="+375298918971" className="contact__information-tell-a" exact>
                        +375&nbsp;29&nbsp;891&nbsp;89&nbsp;71
                    </Link>
                </div>
            </div>


            <form action="" method="Get">
                <input placeholder="Введите стороку для поиска" type="search" />
                <button className="button__magnifier" type="summit">
                    <Magnifier />
                </button>
            </form>
        </div>
    );
};

export default ContactInformation;