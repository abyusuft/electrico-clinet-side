import React from 'react';
import About from './About';
import Banner from './Banner';
import Business from './Business';
import Dealer from './Dealer';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Business></Business>
            <Reviews></Reviews>
            <About></About>
            <Dealer></Dealer>
        </div>
    );
};

export default Home;