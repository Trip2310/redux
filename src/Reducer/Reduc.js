import { ADD_ITEMS, DELETE_ITEMS } from "../Action/Actions";

const initialState= {
    numOfItem : 0
};

const cartReducer=(state= initialState,action)=>{
     switch(action.type){
        case ADD_ITEMS:{
            return{
                ...state, 
                numOfItem: state.numOfItem+1,
            };
        }
        case DELETE_ITEMS:{
            return{
                ...state,
                numOfItem: state.numOfItem-1,
            };
                   
        }
        default: return state;  
     };

    };
export default cartReducer;
