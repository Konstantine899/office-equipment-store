import React from 'react';

import Header from '../header';
import ContactInformation from '../contact-information';
import Main from '../main';
import OurProductionNav from '../our-production';
import './app.scss';




const App = () => {

    return (
        <div>
            <ContactInformation />
            <Header />
            <Main />
            <OurProductionNav />
        </div>
    );
};

export default App;