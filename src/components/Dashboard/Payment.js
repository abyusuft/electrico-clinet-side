import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { itemId } = useParams();

    const { data: orderItem, isLoading } = useQuery('payment', () => fetch(`http://localhost:5000/payment/${itemId}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        <Loading></Loading>
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
                        Payment
                    </li>
                </ul>
            </div>
            <div>
                <div className="card lg:card-side bg-base-100">
                    <figure className='p-12'><img src={orderItem?.img} alt="Album" /></figure>
                    <div className="card-body">
                        <strong>Order ID: {orderItem._id}</strong>
                        <h2 className="text-3xl font-bold"> {orderItem?.name}</h2>
                        <p className='text-xl'>{orderItem?.description}</p>
                        <p className='text-xl'>Unit Price: <strong>{orderItem?.price}</strong></p>
                        <p className='text-xl'>Orderd Qty: <strong>{orderItem?.purQty}</strong></p>
                        <p className='text-2xl font-bold'>Total Price : ${orderItem?.totalPrice}</p>
                        <button className='btn btn-primary font-bold w-1/2'>Pay</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;