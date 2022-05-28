import { faPerson, faMapLocation, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Business = () => {
    return (
        <div>
            <h2 className='text-center text-2xl lg:text-5xl font-bold uppercase p-3 mt-6'>Business Summury</h2>
            <div className="product-section grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto p-8 mt-5">

                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FontAwesomeIcon className='text-6xl text-primary' icon={faMapLocation}></FontAwesomeIcon>
                    </figure>
                    <div className=" text-center p-6">
                        <h2 className="text-2xl">We Serve</h2>
                        <p className='my-5 text-5xl font-bold'>100+</p>
                        <p className='text-2xl'>Countries </p>

                    </div>
                </div>
                <div className="card bg-primary text-white shadow-xl">
                    <figure className="px-10 pt-10">
                        <FontAwesomeIcon className='text-6xl text-error' icon={faPerson}></FontAwesomeIcon>
                    </figure>
                    <div className=" text-center p-6">
                        <h2 className="text-2xl">We</h2>
                        <p className='my-5 text-5xl font-bold'>10K+</p>
                        <p className='text-2xl'>Happy Clients </p>

                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <FontAwesomeIcon className='text-6xl text-primary' icon={faMagnifyingGlass}></FontAwesomeIcon>
                    </figure>
                    <div className=" text-center p-6">
                        <h2 className="text-2xl">We Ensure</h2>
                        <p className='my-5 text-5xl font-bold'>100%</p>
                        <p className='text-2xl'>Quality </p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Business;