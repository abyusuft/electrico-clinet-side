import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('homeReview', () => fetch(`https://ancient-meadow-60272.herokuapp.com/review`, {
        method: 'GET',
    }).then(res => res.json()));

    if (isLoading) {
        <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-center text-2xl lg:text-5xl font-bold uppercase p-3'>Reviews</h2>
            <div className="product-section grid grid-cols-2 lg:grid-cols-4 gap-5 container mx-auto p-8 mt-5">
                {
                    reviews?.slice(0, 6).map(review => <div key={review?._id} className="card  bg-base-100 shadow-xl">
                        <figure className="px-2 pt-2">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img src={review?.img ? review?.img : 'https://lasucom.edu.ng/wp-content/uploads/2020/10/114-1149847_avatar-unknown-dp.png'} alt="" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{review?.name ? review?.name : review?.email}</h2>
                            <p>{review?.review}</p>
                            <div className="card-actions">
                                <span className="badge border-0 text-3xl p-5 bg-primary text-white">{review?.rating}*</span>

                            </div>
                        </div>
                    </div>)
                }

            </div>

        </div>
    );
};

export default Reviews;