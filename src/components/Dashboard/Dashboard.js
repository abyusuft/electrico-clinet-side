import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    if (adminLoading) {
        <Loading></Loading>
    }
    return (
        <div className="drawer drawer-mobile py-6">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">


                <h2 className='text-2xl font-bold text-center uppercase bg-primary text-white rounded-lg py-4'>Welcome to your Dashboard</h2>
                <Outlet />

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-60 bg-transparent text-base-content">
                    {/* <!-- All Access --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {/* <!-- User Access Access --> */}

                    {
                        !admin &&
                        <>
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        </>
                    }

                    {/* <!-- Admin Access Access --> */}
                    {
                        admin &&
                        <>
                            <li><Link to='/dashboard/addproduct'>Add a Product</Link></li>
                            <li><Link to='/dashboard/manageorders'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/manageproducts'>Manage All Products</Link></li>
                            <li><Link to='/dashboard/users'>Manage Users</Link></li>
                        </>}
                </ul>

            </div>
        </div >
    );
};

export default Dashboard;