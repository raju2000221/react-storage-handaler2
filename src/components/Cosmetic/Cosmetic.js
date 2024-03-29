import React from 'react';
import './Cosmetic.css'
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    const {name,price,id} =props.cosmetic
    const addToCart = (id) =>{
      addToDb(id, 1)
    }
      
    const removeFromCard =id =>{
           removeFromDb(id)
    }
    
    return (
       <div className='product'>
         <div>
            <p>Buy This: {name}</p>
            <p><small>price: {price}</small></p>
            <p><small>id: {id}</small></p>
            <button onClick={ ()=> addToCart(id)}> Add To cart</button>
            <button onClick={ ()=> removeFromCard(id)}> Remove</button>
        </div>
       </div>
    );
};

export default Cosmetic;