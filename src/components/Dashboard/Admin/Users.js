import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('userlist', () => fetch(`http://localhost:5000/users`).then(res => res.json()))

    if (isLoading) {
        <Loading></Loading>
    }

    const handleMakeAdmin = email => {
        const url = `http://localhost:5000/user/admin/${email}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('You do not have right to make and admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }


    return (
        <div>
            <h2 className='text-center text-2xl font-bold'>Users</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.name ? user.name : 'Not Available'}</td>
                            <td>{user.email}</td>
                            <td>{user.role ? user.role : 'user'}</td>
                            <td>{user.role === 'admin' ?
                                ''
                                : <button onClick={() => handleMakeAdmin(user.email)} className='btn btn-primary btn-sm text-white'>Admin</button>
                            }</td>
                        </tr>)}


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;