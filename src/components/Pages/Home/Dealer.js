import React from 'react';
import { toast } from 'react-toastify';

const Dealer = () => {
    const becameDealer = () => {
        toast('We Received your request. we will contact your soon. Thanks')
    }
    return (
        <div className='pb-6'>

            <h2 className='text-center text-2xl lg:text-5xl font-bold uppercase p-3 mt-6'>Became A Dealer</h2>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold">Join now!</h1>
                        <p class="py-6">To join our World Wide dealer community and grow your business. fill out the form we will get in touch with you shortly</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Your Email" class="input input-bordered" />

                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Your Phone No" class="input input-bordered" />

                            </div>
                            <div class="form-control mt-6">
                                <button onClick={becameDealer} class="btn btn-primary text-white">Became a Dealer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dealer; 