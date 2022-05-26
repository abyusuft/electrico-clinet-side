import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content  ">
                {/* <!-- Page content here --> */}

                <h2 className='text-2xl text-primary font-bold'>Welcome to your Dashboard</h2>
                <Outlet />

            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- All Access --> */}
                    <li><Link to='/dashboard'>My Profile</Link></li>
                    {/* <!-- User Access Access --> */}

                    {
                        // user && 
                        <>
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            <li><Link to='/dashboard/addreview'>Add Review</Link></li>
                        </>
                    }

                    {/* <!-- Admin Access Access --> */}
                    {
                        // admin && 
                        <>
                            <li><Link to='/dashboard/addproduct'>Add a Product</Link></li>
                            <li><Link to='/dashboard/manageorders'>Manage All Orders</Link></li>
                            <li><Link to='/dashboard/managedoctor'>Manage Doctor</Link></li>
                        </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;