const initialState ={
  equipment:[],



  printers:[ {
    id: 1,
    name: ' Лазерное МФУ Ricon SP 230SFNw ',
    price: 509 + ' BYN ',
    coverImage: './img/full_438.jpg'
},
{
    id: 2,
    name: ' Лазерное МФУ Ricon SP 330SN ',
    price: 581.26 + ' BYN ',
    coverImage: ''
},
]
  
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
