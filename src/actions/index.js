import {equipment_loaded} from '../action-types';

const equipmentLoaded = (newEquipment) =>{

    return{
        type:{equipment_loaded},
        payload: newEquipment
    };

};

export{
    equipmentLoaded
};
