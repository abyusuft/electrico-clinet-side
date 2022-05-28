import React from 'react';
import img from '../../../images/EBanner.jpg';

const About = () => {
    return (
        <div>
            <div className="hero " style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center py-36 text-white">
                    <div className="max-w-5xl">
                        <h1 className="mb-5 text-5xl font-bold">About</h1>
                        <h2 className="mb-5 text-3xl text-primary font-bold">ElectriCo</h2>
                        <p className="mb-5 text-xl"> <span className='font-bold text-lg'>ElectriCo </span> helps manufacturers maximize the productivity they gain from their various Electric tools and related supplies. We dedicated to helping our customers andreduce operating costs.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default About;