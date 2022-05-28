import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

import Loading from '../../Shared/Loading';
import ManageOrderItem from './ManageOrderItem';

const ManageOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('manageProduct', () => fetch(`https://ancient-meadow-60272.herokuapp.com/orders`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));

    if (isLoading) {
        <Loading></Loading>
    }
    const handleDelete = id => {
        const url = `https://ancient-meadow-60272.herokuapp.com/order/${id}`;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data, id);
                    refetch();
                    toast.success(`Order id : ${id} Deleted Successfully! `);
                }

            })
    }
    const handleShipment = id => {
        console.log(id);
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
                            <th>Purchase By</th>
                            <th>Price</th>
                            <th>Order Qty</th>
                            <th>Total</th>
                            <th>Paid</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map(order => <ManageOrderItem
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleShipment={handleShipment}
                        >

                        </ManageOrderItem>)}
                    </tbody>
                </table>


            </div>
        </div>
    );
};

export default ManageOrders;