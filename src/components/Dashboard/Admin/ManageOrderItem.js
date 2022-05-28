import React from 'react';

const ManageOrderItem = ({ order, handleDelete, handleShipment }) => {
    // const click = (id) => {
    //     console.log(id)
    // }
    return (<>


        <tr>
            <td><img src={order.img} style={{ maxHeight: '30px' }} alt="" /></td>
            <td>{order.name}</td>
            <td>{order?.buyerName}</td>
            <td>${order.price}</td>
            <td>{order.purQty}</td>
            <td>{order.totalPrice}</td>
            <td>{order.paid ? 'Paid' : 'Unpaid'}</td>
            <td>{order.shipped ?
                'Shipped'
                : <button onClick={() => handleShipment(order._id)} className='btn btn-sm btn-secondary text-white font-bold'>Ship</button>

            }
            </td>
            {/* <td><button onClick={() => click(order._id)}>delete</button></td> */}

            <td>{!order.paid && <>
                <label htmlFor="item-delete-modal" className="btn btn-primary modal-button btn-sm">Delete</label>
            </>
            }</td>
        </tr>
        <div>
            <input type="checkbox" id="item-delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg"> Your are Delecting order : {order._id}</h3>
                    <p className="py-4">Are You Sure You want to delete This Order! <br></br> This action cant be undone.</p>
                    <div className="modal-action">
                        <button htmlFor="item-delete-modal" onClick={() => handleDelete(order._id)} className="btn btn-primary text-white">Yes Proceed</button>
                        <label htmlFor="item-delete-modal" className="btn border-0 bg-red-500 text-white">No</label>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
};

export default ManageOrderItem;