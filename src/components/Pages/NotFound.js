import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/dddddd.png'

const NotFound = () => {
    return (
        <div className="card  bg-[#F7F7F7] shadow-xl">
            <figure className="px-10 pt-10">
                <img src={notFound} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <div className="card-actions">
                    <Link to='/' className="btn btn-error btn-xl text-white">Back to Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;