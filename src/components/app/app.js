import React from 'react';

import Header from '../header';
import ContactInformation from '../contact-information';
import './app.scss';




const App = () => {

    return (
        <div>
            <ContactInformation />
            <Header />
        </div>
    );
};

export default App;