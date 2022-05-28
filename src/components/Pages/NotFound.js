import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/dddddd.png'

const NotFound = () => {
    return (
        <div class="card  bg-[#F7F7F7] shadow-xl">
            <figure class="px-10 pt-10">
                <img src={notFound} alt="Shoes" />
            </figure>
            <div class="card-body items-center text-center">
                <div class="card-actions">
                    <Link to='/' class="btn btn-error btn-xl text-white">Back to Homepage</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;