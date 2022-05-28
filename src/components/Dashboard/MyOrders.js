import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const { data: orders, isLoading, refetch } = useQuery('myOrders', () => fetch(`https://ancient-meadow-60272.herokuapp.com/order/${user.email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));

    if (isLoading) {
        <Loading></Loading>
    }
    const handleCancleOrder = id => {
        const url = `https://ancient-meadow-60272.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data, id);
                    refetch();
                    toast.success(`Order id : ${id} Cancelled Successfully! `);
                }

            })
    }
    const navigate = useNavigate();
    const handlePayment = (id) => {
        navigate(`/dashboard/payment/${id}`);
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
                        My Orders
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
                            <th>Order Qty</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map(order => <tr key={order._id}>
                            <td><img src={order.img} style={{ maxHeight: '30px' }} alt="" /></td>
                            <td>{order.name}</td>
                            <td>${order.price}</td>
                            <td>{order.purQty}</td>
                            <td>{order.totalPrice}</td>
                            <td>{order.paid ? order.trId : <button onClick={() => handlePayment(order._id)} className='btn btn-sm btn-secondary text-white font-bold'>Pay</button>}</td>
                            <td>{order.shipped ?
                                order.shipped
                                : 'Pending'

                            }
                            </td>
                            {/* <td><button onClick={() => click(order._id)}>delete</button></td> */}

                            <td>{!order.paid && <>
                                <label htmlFor="item-delete-modal" className="btn btn-primary modal-button btn-sm">Cancel</label>
                                <input type="checkbox" id="item-delete-modal" className="modal-toggle" />
                                <div className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg"> Your are Delecting order : {order._id}</h3>
                                        <p className="py-4">Are You Sure You want to delete This Order! <br></br> This action cant be undone.</p>
                                        <div className="modal-action">
                                            <label htmlFor="item-delete-modal" onClick={() => handleCancleOrder(order._id)} className="btn btn-primary text-white">Yes Proceed</label>
                                            <label htmlFor="item-delete-modal" className="btn border-0 bg-red-500 text-white">No</label>
                                        </div>
                                    </div>
                                </div>

                            </>

                            }</td>
                        </tr>

                        )}
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default MyOrders;