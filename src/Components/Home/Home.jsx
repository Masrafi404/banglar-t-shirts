import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Shirt from '../Shirt/Shirt';
import './Home.css'
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';


const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([])

    const buyNowHandler = tshirt => {
        const exist = cart.find(ts => ts._id === tshirt._id)
        if (exist) {
            toast('You have Already this t-shirt!');
        }
        else {

            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    }
    const deleteHandler = id => {
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining)
    }
    return (
        <div className='home-container'>
            <div className='shirts-container'>
                {
                    tShirts.map(shirt => <Shirt
                        key={shirt._id}
                        shirt={shirt}
                        buyNowHandler={buyNowHandler}
                    ></Shirt>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                    deleteHandler={deleteHandler}
                ></Cart>

            </div>
        </div>
    );
};

export default Home;