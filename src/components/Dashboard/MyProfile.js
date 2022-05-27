import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { data: userProfile, isLoading, refetch } = useQuery('userProfile', () => fetch(`http://localhost:5000/user/${user?.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
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

        const updatedProfileData = {
            email: user?.email,
            name: data?.name ? data?.name : userProfile?.name,
            education: data?.education ? data?.education : userProfile?.education,
            location: data?.location ? data?.location : userProfile?.location,
            phone: data.phone ? data.phone : userProfile.phone,
            linkedin: data.linkedin ? data.linkedin : userProfile.linkedin,
            img: data?.img ? data?.img : userProfile?.img
        };
        if (user?.email) {
            fetch(`http://localhost:5000/user/${user.email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedProfileData)
            })
                .then(res => res.json())
                .then(data => {
                    refetch();
                    toast.success(`Profile update Successfully`);
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
                        My Profile
                    </li>
                </ul>
            </div>

            <div className="card w-full mx-auto bg-base-100">
                <figure className=" pt-1">
                    <img style={{ maxHeight: '150px' }} src={userProfile?.img ? userProfile?.img : 'https://summit.helphour.org/wp-content/uploads/2016/05/users-vector-icon-png_260862.jpg'} alt="Profile Pic" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title uppercase text-primary font-bold">{userProfile?.name}</h2>
                    <div className="overflow-x-auto">
                        <table className="table w-full">
                            <tbody>
                                <tr>
                                    <th>Email</th>
                                    <th>Education</th>
                                    <th>Location</th>
                                    <th>Phone</th>
                                    <th>Linkedin</th>
                                </tr>
                                <tr>
                                    <td>{userProfile?.email}</td>
                                    <td>{userProfile?.education ? userProfile?.education : <span className='text-red-500'>Please Update</span>}</td>
                                    <td>{userProfile?.location ? userProfile?.location : <span className='text-red-500'>Please Update</span>}</td>
                                    <td>{userProfile?.phone ? userProfile?.phone : <span className='text-red-500'>Please Update</span>}</td>
                                    <td>{userProfile?.linkedin ? <a className='btn btn-primary btn-sm' href={userProfile?.linkedin} target="_blank" rel="noreferrer">Visit</a> : <span className='text-red-500'>Please Update</span>}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Update Profile section  */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control flex-row w-full max-w-xl mt-1">
                        <label className="label w-1/2">
                            <span className="label-text font-bold">Full Name</span>
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            placeholder={userProfile?.name || 'Type Here'}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control flex-row w-full max-w-xl mt-1">
                        <label className="label w-1/2">
                            <span className="label-text font-bold">Education</span>
                        </label>
                        <input
                            {...register("education")}
                            type="text"
                            placeholder={userProfile?.education || 'Type Here'}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control flex-row w-full max-w-xl mt-1">
                        <label className="label w-1/2">
                            <span className="label-text font-bold">Profile Img</span>
                        </label>
                        <input
                            {...register("img")}
                            type="text"
                            placeholder={userProfile?.img || 'Image Link'}
                            className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control flex-row  w-full max-w-xl mt-1">
                        <label className="label w-1/2">
                            <span className="label-text font-bold">Location</span>
                        </label>
                        <input
                            {...register("location")}
                            type="text"
                            placeholder={userProfile?.location || 'Type Here'}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control flex-row  w-full max-w-xl mt-1">
                        <label className="label w-1/2">
                            <span className="label-text font-bold">Phone</span>
                        </label>
                        <input
                            {...register("phone")}
                            type="text"
                            placeholder={userProfile?.phone || 'Type Here'}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control flex-row  w-full max-w-xl mt-1">
                        <label className="label w-1/2">
                            <span className="label-text font-bold">Linkedin</span>
                        </label>
                        <input
                            {...register("linkedin")}
                            type="text"
                            placeholder={userProfile?.linkedin || 'Type Here'}
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input type="submit" className='btn btn-primary  text-white w-full mx-auto my-5' value='Update Profile' />
                </form>

            </div>

        </div>
    );
};

export default MyProfile;