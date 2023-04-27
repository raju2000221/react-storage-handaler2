import React from 'react';
import { add,multiplay } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';


const Cosmetics = () => {
    // const first = 55;
    // const secound = 88;
    // const total = add(first,secound)
    // const multi = multiplay(first,secound)
    
    // const cosmetics =[
    //     {
    //       "id": "644a88aa60ab861d73bb1ecf",
    //       "price": 32,
    //       "name": "Rose Carlson"
    //     },
    //     {
    //       "id": "644a88aa7446699445a2bf48",
    //       "price": 236,
    //       "name": "Allison Crawford"
    //     },
    //     {
    //       "id": "644a88aa3fc1a1cc2d4699b4",
    //       "price": 61,
    //       "name": "Lynch Reyes"
    //     },
    //     {
    //       "id": "644a88aa07b6947d2ee5a833",
    //       "price": 335,
    //       "name": "Gwen Rhodes"
    //     },
    //     {
    //       "id": "644a88aa0e3fb124dfdf2309",
    //       "price": 259,
    //       "name": "Pitts Ortega"
    //     },
    //     {
    //       "id": "644a88aaef1a0734f393500d",
    //       "price": 219,
    //       "name": "Bell Clemons"
    //     }
    //   ]
    
    return (
        
        <div>
            
            <h1>Welcome to Cosmetics shop :</h1>
           { cosmetics.map(cosmetic => <Cosmetic
           key={cosmetic.id}
           cosmetic={cosmetic}
           ></Cosmetic>

            )}
            {/* <p>Total: {total}</p>
            <p>Total: {multi}</p> */}
            
        </div>
    );
};

export default Cosmetics;