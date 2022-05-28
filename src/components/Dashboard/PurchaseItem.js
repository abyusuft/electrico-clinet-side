import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const PurchaseItem = () => {
    const [user] = useAuthState(auth);

    const [admin] = useAdmin(user);
    const { itemId } = useParams();



    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { data: product, isLoading, refetch } = useQuery('homeProduct', () => fetch(`https://ancient-meadow-60272.herokuapp.com/product/${itemId}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));
    if (isLoading) {
        <Loading></Loading>
    }
    const [totalPrice, setTotalPrice] = useState(parseInt(product?.moq) * parseInt(product?.price));
    const [loadTotal, setLoadTotal] = useState(parseInt(product?.moq) * parseInt(product?.price));
    useEffect(() => {
        setTotalPrice(loadTotal);
    }, [totalPrice, loadTotal])


    const onSubmit = data => {
        const purQty = parseInt(data?.purchaseQty);
        const price = parseInt(product?.price);
        const minQty = parseInt(product?.moq)
        const curStock = parseInt(product?.stock);
        const totalPrice = purQty * price;
        if (purQty < minQty) {
            return toast.error(`Minimum Purchase Qty is : ${minQty}.`)
        }
        if (purQty > curStock) {
            return toast.error(`Quantity on hand : ${curStock}`)
        }
        if (purQty > curStock) {
            return toast.error(`Quantity on hand : ${curStock}`)
        } if (totalPrice <= 0 && isNaN(totalPrice)) {
            return;
        }
        else {
            const purchaseInfo = {
                productId: product?._id,
                purchaseBy: user?.email,
                buyerName: user?.displayName,
                name: product?.name,
                description: product?.description,
                price: price,
                totalPrice: totalPrice,
                purQty: purQty,
                img: product?.img,
                address: data?.address,
                phone: data?.phone

            };

            if (!admin) {
                // Purchae product 
                fetch(`https://ancient-meadow-60272.herokuapp.com/purchase`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        }
                    },
                    body: JSON.stringify(purchaseInfo)
                })
                    .then(res => {
                        if (res.status === 403) {
                            toast.error('You do not have right to make and admin');
                        }
                        return res.json()
                    })
                    .then(data => {
                        if (data?.insertedId) {
                            toast.success(`Your Order Has Been Placed : ${data?.insertedId}`);
                            reset();
                        }
                    });

                // update stock qty 

                const newStockQty = curStock - purQty;
                const updateQty = { newStockQty };
                fetch(`https://ancient-meadow-60272.herokuapp.com/product/${product?._id}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(updateQty)

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            refetch();
                        }

                    })

            } else {
                toast.error('As an Admin Your cannot do this action')
            }

        }

    }
    const getTotalPrice = event => {
        const purQty = event.target.value;
        const price = parseInt(product?.price);
        setLoadTotal(purQty * price);
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
                        Purchase
                    </li>
                </ul>
            </div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='p-12'><img src={product?.img} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{product?.name}</h2>
                        <p>{product?.description}</p>
                        <p className='text-xl'>Minimum Order Qty : <strong>{product?.moq}</strong></p>
                        <p className='text-xl'>Current Stock : <strong>{product?.stock}</strong></p>
                        <p className=' text-2xl font-bold'>Unit Price : ${product?.price}</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Purchase Qty</span>
                                </label>
                                <input
                                    {...register("purchaseQty", {
                                        required: {
                                            value: true,
                                            message: "Purchase Qty is Required"
                                        }
                                    })}
                                    min={product?.moq}
                                    max={product?.stock}
                                    type="number"
                                    onChange={getTotalPrice}
                                    defaultValue={product?.moq}
                                    placeholder="Input Order Qty"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text-alt text-red-500">{errors.purchaseQty?.type === 'required' && `${errors?.purchaseQty?.message}`}</span>

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="">
                                    <span className="label-text font-bold">Total Price</span>
                                    <input
                                        {...register("totalPrice")}
                                        type="number"
                                        value={totalPrice}
                                        readOnly
                                        className="font-bold text-primary text-2xl" />
                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Phone</span>
                                </label>
                                <input
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: "Purchase Qty is Required"
                                        }
                                    })}
                                    type="number"
                                    placeholder="Input Phone Number"
                                    className="input input-bordered w-full max-w-xs" />
                                <label className="label">
                                    <span className="label-text-alt text-red-500">{errors.phone?.type === 'required' && `${errors?.phone?.message}`}</span>

                                </label>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-bold">Address (Optional)</span>
                                </label>
                                <input
                                    {...register("address")}
                                    type="text"
                                    placeholder="Input delivery address"
                                    className="input input-bordered w-full max-w-xs" />

                            </div>
                            <input type="submit" className='btn btn-primary text-white w-full max-w-xs mt-3' value='Buy Now' />
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PurchaseItem;