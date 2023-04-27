import React from 'react';

const Cosmetic = (props) => {
    const {name,price,id} =props.cosmetic
    return (
        <div>
            <p>Buy This: {name}</p>
            <p><small>price: {price}</small></p>
            <p><small>id: {id}</small></p>
        </div>
    );
};

export default Cosmetic;