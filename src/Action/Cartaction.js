import { ADD_ITEMS,DELETE_ITEMS } from "./Actions";

 const addItems =()=>{
    return{
        type:ADD_ITEMS}
}

 const deleteItems=()=>{
    return{
        type:DELETE_ITEMS}
}
export { addItems, deleteItems }