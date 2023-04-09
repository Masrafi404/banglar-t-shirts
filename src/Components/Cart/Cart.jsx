import React from 'react';

const Cart = ({ cart, deleteHandler }) => {
    return (
        <div>
            order summery: {cart.length}
            {
                cart.map(ts => <p key={ts._id}>{ts.name} <button onClick={() => deleteHandler(ts._id)}>X</button></p>)
            }
        </div>
    );
};

export default Cart;