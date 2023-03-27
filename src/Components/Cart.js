import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { addItems, deleteItems } from '../Action/Cartaction';

const Cart = () => {

    const State= useSelector((state)=>state);
    const Dispatch= useDispatch();
  return (
    <div className='cart'>
        <h2> Items in the Cart{State.numOfItem}</h2>
        <button className='red' onClick={()=>{Dispatch(addItems())}}>ADD ITEM</button>


        <button className='green' onClick={()=>{Dispatch(deleteItems())}}>DELETE ITEM</button>
    </div>
  )
}

export default Cart