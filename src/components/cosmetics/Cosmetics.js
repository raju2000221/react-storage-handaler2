import React from 'react';
import { add, multiplay } from '../../utilities/calculate';


const Cosmetics = () => {
    const first = 55;
    const secound = 88;
    const total = add(first,secound)
   
    return (
        
        <div>
            <add></add>
            <h1>Welcome to Cosmetics shop</h1>
            <p>Total: {total}</p>
            
        </div>
    );
};

export default Cosmetics;