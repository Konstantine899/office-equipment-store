import React from 'react';
import { EquipmentstoreServiceConsumer } from '../equipmentstore-service-сontext';

const withEquipmentstoreService = () => (Wrapped) => {

    return (props) => {
        return (
            <EquipmentstoreServiceConsumer>
                {
                    (equipmentstoreService) => {
                       return( <Wrapped  {...props} 
                        equipmentstoreService={equipmentstoreService}/>);
                    }
                }
            </EquipmentstoreServiceConsumer>
        );
    }
};

export default withEquipmentstoreService;