import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user.email);
    const { data: userProfile, isLoading } = useQuery('userProfile', () => fetch(`http://localhost:5000/user/${user?.email}`, {
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
    console.log('user profile:', userProfile);
    return (
        <div>
            <div class="text-sm breadcrumbs">
                <ul>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        Home
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                        Dashboard
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-4 h-4 mr-2 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        My Profile
                    </li>
                </ul>
            </div>

            <div class="card w-full mx-auto bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={userProfile?.img ? userProfile?.img : 'https://summit.helphour.org/wp-content/uploads/2016/05/users-vector-icon-png_260862.jpg'} alt="Profile Pic" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title uppercase text-primary font-bold">{userProfile?.name}</h2>
                    <table>
                        <div class="overflow-x-auto">
                            <table class="table w-full">
                                <tbody>
                                    <tr>
                                        <th>Email</th>
                                        <td>Education</td>
                                        <td>Location</td>
                                        <td>Phone</td>
                                        <td>Linkedin</td>
                                    </tr>
                                    <tr>
                                        <td>{userProfile?.email}</td>
                                        <td>{userProfile?.education ? userProfile?.education : <span className='text-red-500'>Please Update</span>}</td>
                                        <td>{userProfile?.location ? userProfile?.location : <span className='text-red-500'>Please Update</span>}</td>
                                        <td>{userProfile?.phone ? userProfile?.phone : <span className='text-red-500'>Please Update</span>}</td>
                                        <td>{userProfile?.linkedin ? userProfile?.linkedin : <span className='text-red-500'>Please Update</span>}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </table>

                </div>
            </div>

        </div>
    );
};

export default MyProfile;