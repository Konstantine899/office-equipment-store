import React from 'react';
import { Link } from 'react-router-dom';


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

             <div className="contact__information-tell"> 
            <div className="contact__information-tell-mts">
            <img src={require('./img/icon-mts.png')}  alt="MTS" />
                <Link to="+375298918971" className="contact__information-tell-a" exact>+375298918971</Link>
            </div>
            <div className="contact__information-tell-velcome">
            <img src={require('./img/icon-velcom.png')} width="20px"  alt="Velkome" />
                <Link to="+375298918971" className="contact__information-tell-a" exact>+375298918971</Link>
            </div>
            </div>  


            <form action ="" method="Get">
                <input  placeholder="Введите стороку для поиска" type="serch" />
                <button type="summit">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="20px" height="20px" viewBox="0 0 485.213 485.213" 
	 xmlSpace="preserve" className="button__search">

	
		<path d="M471.882,407.567L360.567,296.243c-16.586,25.795-38.536,47.734-64.331,64.321l111.324,111.324
			c17.772,17.768,46.587,17.768,64.321,0C489.654,454.149,489.654,425.334,471.882,407.567z"/>
		<path d="M363.909,181.955C363.909,81.473,282.44,0,181.956,0C81.474,0,0.001,81.473,0.001,181.955s81.473,181.951,181.955,181.951
			C282.44,363.906,363.909,282.437,363.909,181.955z M181.956,318.416c-75.252,0-136.465-61.208-136.465-136.46
			c0-75.252,61.213-136.465,136.465-136.465c75.25,0,136.468,61.213,136.468,136.465
			C318.424,257.208,257.206,318.416,181.956,318.416z"/>
		<path d="M75.817,181.955h30.322c0-41.803,34.014-75.814,75.816-75.814V75.816C123.438,75.816,75.817,123.437,75.817,181.955z" />
</svg>
                </button>
            </form>
        </div>
    );
};

export default ContactInformation;