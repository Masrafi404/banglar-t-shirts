import React from 'react';
import './shirt.css'

const Shirt = ({ shirt, buyNowHandler }) => {
    const { picture, name, price, gender, _id } = shirt;
    return (
        <div className='shirt-info'>
            <img src={picture} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: ${price}</p>
            <button onClick={() => buyNowHandler(shirt)}>Buy Now</button>

        </div>
    );
};

export default Shirt;