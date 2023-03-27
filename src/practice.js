const store= configurestore(reducer)
const initialstate={numOfItem:0};
const reducer=(state= initialState, action)=>{
    switch(action.type){
        case" Add item"
            return{
                ...state,state.initialState+1
            };
    }
    case "Delete item"
    return{

    }
}