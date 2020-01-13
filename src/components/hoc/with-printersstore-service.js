import React from 'react';
import { PrintersstoreServiceConsumer } from '../printers-service-context';

const withPrintersstoreService = () => (Wrapped) =>{
    return (props) => {
        return (
            <PrintersstoreServiceConsumer>
                {
                    (printersstoreService) => {
                        return( <Wrapped {...props}
                        printersstoreService={printersstoreService}/>);
                    }
                }
            </PrintersstoreServiceConsumer>
        );
    }

};

export default withPrintersstoreService;