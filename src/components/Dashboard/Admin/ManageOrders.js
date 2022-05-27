import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';
import Loading from '../../Shared/Loading';

const ManageOrders = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    const { data: orders, isLoading, refetch } = useQuery('manageProduct', () => fetch(`http://localhost:5000/orders`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));

    if (isLoading) {
        <Loading></Loading>
    }

    const handleDelete = id => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Item Deleted Successfully!`);
                }

            })
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
                        Manage Orders
                    </li>
                </ul>
            </div>
            <div className="overflow-x-auto mt-6">
                <table className="table w-full ">
                    <thead>
                        <tr>
                            <th>Img</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>MOQ</th>
                            <th>Stock</th>
                            <th>AddedBy</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((order, index) => <tr key={order._id}>
                            <th><img src={order.img} style={{ maxHeight: '30px' }} alt="" /></th>
                            <td>{order.name}</td>
                            <td>{order.price}</td>
                            <td>{order.moq}</td>
                            <td>{order.stock}</td>
                            <td>{order.addedBy}</td>
                            <td>{admin && <>
                                <label for="item-delete-modal" className="btn btn-primary modal-button btn-md">Delete</label>
                                <input type="checkbox" id="item-delete-modal" className="modal-toggle" />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg"> Your are Delecting : {order.name}</h3>
                                        <p className="py-4">Are You Sure You want to delete This product! <br></br> This action cant be undone.</p>
                                        <div className="modal-action">
                                            <label for="item-delete-modal" onClick={() => handleDelete(order._id)} className="btn btn-primary">Yes Proceed</label>
                                            <label for="item-delete-modal" class="btn btn-red">No</label>
                                        </div>
                                    </div>
                                </div>

                            </>

                            }</td>
                        </tr>)}
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default ManageOrders;