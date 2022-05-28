import React from 'react';
import { toast } from 'react-toastify';

const Dealer = () => {
    const becameDealer = () => {
        toast('We Received your request. we will contact your soon. Thanks')
    }
    return (
        <div className='pb-6'>

            <h2 className='text-center text-2xl lg:text-5xl font-bold uppercase p-3 mt-6'>Became A Dealer</h2>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Join now!</h1>
                        <p className="py-6">To join our World Wide dealer community and grow your business. fill out the form we will get in touch with you shortly</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Your Email" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Your Phone No" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button onClick={becameDealer} className="btn btn-primary text-white">Became a Dealer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dealer; 