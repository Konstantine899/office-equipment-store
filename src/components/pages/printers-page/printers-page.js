import React from 'react';
import PrintersList from '../../printers-list';

const PrintersPage = () =>{
    return(
        <PrintersList printers={[ {
            id: 1,
            name: ' Лазерное МФУ Ricon SP 230SFNw ',
            price: 509 + ' BYN ',
            coverImage: ''
        },
        {
            id: 2,
            name: ' Лазерное МФУ Ricon SP 330SN ',
            price: 581.26 + ' BYN ',
            coverImage: ''
        },
    ]} />
    );
};

export default PrintersPage;