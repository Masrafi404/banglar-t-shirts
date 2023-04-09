import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tShirts = useLoaderData();
    return (
        <div>
            <h4> t-shirt Available {tShirts.length}</h4>
        </div>
    );
};

export default Home;