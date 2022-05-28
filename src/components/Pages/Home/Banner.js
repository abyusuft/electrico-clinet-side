import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../images/EBanner.jpg'

const Banner = () => {
    return (
        <div className='text-white text-center p-16 lg:p-36' style={{ backgroundImage: `url(${bannerImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
            <h3 className='text-2xl uppercase'>ElectriCo Manufecturing</h3>
            <h2 className='lg:text-8xl text-4xl mt-3  text-primary uppercase font-bold'>Commited</h2>
            <h2 className='uppercase text-2xl mt-3 lg:text-6xl'>to supply quality</h2>
            <p className='mt-3 text-lg'>We won Many Industrial Awards and Got Many Certificates Since 2001-2022</p>
            <Link to='/products' className='btn btn-primary mt-10 text-white'>View Products</Link >

        </div>
    );
};

export default Banner;