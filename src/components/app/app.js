import React from 'react';

import Header from '../header';
import ContactInformation from '../contact-information';
import Main from '../main';
import OurProduction from '../our-production';
import DeliveryInformation from '../delivery-information';
import Partners from '../partners';
import './app.scss';




const App = () => {

    return (
        <div>
            <ContactInformation />
            <Header />
            <Main />
            <OurProduction />
            <DeliveryInformation />
            <Partners />
        </div>
    );
};

export default App;