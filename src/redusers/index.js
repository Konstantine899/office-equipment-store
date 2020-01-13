const initialState ={
  equipment:[],



 
  
};

const reduser = (state = initialState, action) =>{
    switch(action.type){
        case 'EQUIPMENT_LOADED':
        return {
            equipment: action.payload
        };
        default: return state;
    }
    
};




export default reduser;
