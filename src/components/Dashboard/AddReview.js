import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const AddReview = () => {
    const [user] = useAuthState(auth);
    const { data: userProfile, isLoading, refetch } = useQuery('userProfile', () => fetch(`https://ancient-meadow-60272.herokuapp.com/user/${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => {
        if (res.status === 403) {
            toast.error('Unauthorized');
        }
        return res.json()
    }))
    if (isLoading) {
        <Loading></Loading>
    }
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const userReview = {
            email: user?.email,
            name: userProfile?.name,
            review: data?.review,
            rating: data?.rating,
            img: userProfile?.img
        };

        if (user?.email) {
            fetch(`https://ancient-meadow-60272.herokuapp.com/review`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(userReview)
            })
                .then(res => {
                    if (res.status === 403) {
                        signOut(auth);
                        toast.error('Unauthorized');
                    }
                    return res.json()
                })
                .then(data => {
                    refetch();
                    toast.success(`Review Added Successfully`);
                    reset();
                })
        }
    }
    return (
        <div>
            <div className="text-sm breadcrumbs">
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        Home
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        Dashboard
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Add Review
                    </li>
                </ul>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control flex-row w-full max-w-xl mt-1">
                    <label className="label w-1/2">
                        <span className="label-text font-bold">Rating</span>
                    </label>
                    <input
                        {...register("rating")}
                        type="number"
                        min={1}
                        max={5}
                        placeholder='Insert Your Rating 1-5'
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="form-control flex-row w-full max-w-xl mt-2">
                    <label className="label w-1/2">
                        <span className="label-text font-bold">Review</span>
                    </label>
                    <input
                        {...register("review")}
                        type="text"
                        placeholder='Type Review'
                        className="input input-bordered w-full max-w-xs" />
                </div>

                <input type="submit" className='btn btn-primary  text-white w-full mx-auto my-5' value='Add Review' />
            </form>
        </div>
    );
};

export default AddReview;