import React from 'react';
import Banner from './Banner';
import Business from './Business';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Business></Business>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;