

const equipmentLoaded = (newEquipment) =>{

    return{
        type:'EQUIPMENT_LOADED',
        payload: newEquipment
    };

};

export{
    equipmentLoaded
};
