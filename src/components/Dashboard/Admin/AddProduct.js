import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useAdmin from '../../../hooks/useAdmin';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        const productInfo = {
            addedBy: user?.email,
            name: data?.name,
            description: data?.description,
            price: data?.price,
            stock: data.stock,
            moq: data.moq,
            img: data?.img
        };

        if (admin) {
            fetch(`https://ancient-meadow-60272.herokuapp.com/product`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productInfo)
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.insertedId) {
                        toast.success(`Item Added Successfully: ${data?.insertedId}`);
                        reset();
                    }

                })

        }

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
                        Add Product
                    </li>
                </ul>
            </div>
            <h2 className='text-center my-6' ><span className=' text-3xl font-bold inline-block bg-primary text-white p-3 rounded-lg'>Add a Product</span></h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control flex-row w-full max-w-xl mt-1">
                    <label className="label w-1/2">
                        <span className="label-text font-bold">Product Name</span>
                    </label>
                    <input
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Input Product Name"
                            }
                        })}
                        type="text"
                        placeholder='Type Product Name'
                        className="input input-bordered w-full max-w-xs" />

                </div>
                <label className="label">
                    <span className="label-text-alt text-red-500">{errors.name?.type === 'required' && `${errors?.name?.message}`}</span>
                </label>
                <div className="form-control flex-row w-full max-w-xl mt-1">
                    <label className="label w-1/2">
                        <span className="label-text font-bold">Short Description</span>
                    </label>
                    <input
                        {...register("description", {
                            required: {
                                value: true,
                                message: "Input Product Description"
                            }
                        })}
                        type="text"
                        placeholder='Type Prodcut Description'
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <label className="label">
                    <span className="label-text-alt text-red-500">{errors.description?.type === 'required' && `${errors?.description?.message}`}</span>
                </label>
                <div className="form-control flex-row w-full max-w-xl mt-1">
                    <label className="label w-1/2">
                        <span className="label-text font-bold">Product Img</span>
                    </label>
                    <input
                        {...register("img", {
                            required: {
                                value: true,
                                message: "Product Image Link"
                            }
                        })}
                        type="text"
                        placeholder='Product Image Link'
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <label className="label">
                    <span className="label-text-alt text-red-500">{errors.img?.type === 'required' && `${errors?.img?.message}`}</span>
                </label>


                <div className="form-control flex-row  w-full max-w-xl mt-1">
                    <label className="label w-1/2">
                        <span className="label-text font-bold">Unit Price</span>
                    </label>
                    <input
                        {...register("price", {
                            required: {
                                value: true,
                                message: "Input Unit Price"
                            }
                        })}
                        type="number"
                        placeholder='Per Unit Cost'
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <label className="label">
                    <span className="label-text-alt text-red-500">{errors.price?.type === 'required' && `${errors?.price?.message}`}</span>
                </label>
                <div className="form-control flex-row  w-full max-w-xl mt-1">
                    <label className="label w-1/2">
                        <span className="label-text font-bold">Opening Stock</span>
                    </label>
                    <input
                        {...register("stock", {
                            required: {
                                value: true,
                                message: "Input Stock Qty"
                            }
                        })}
                        type="number"
                        placeholder='Opening Stock'
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <label className="label">
                    <span className="label-text-alt text-red-500">{errors.stock?.type === 'required' && `${errors?.stock?.message}`}</span>
                </label>
                <div className="form-control flex-row  w-full max-w-xl mt-1">
                    <label className="label w-1/2">
                        <span className="label-text font-bold">Minimum order Qty</span>
                    </label>
                    <input
                        {...register("moq", {
                            required: {
                                value: true,
                                message: "Input Minimum Order Qty"
                            }
                        })}
                        type="number"
                        placeholder='Minimum Order Quantity'
                        className="input input-bordered w-full max-w-xs" />
                </div>
                <label className="label">
                    <span className="label-text-alt text-red-500">{errors.moq?.type === 'required' && `${errors?.moq?.message}`}</span>
                </label>

                <input type="submit" className='btn btn-primary  text-white w-full mx-auto my-5' value='Add Product' />
            </form>
            <div className='text-center'>
                <Link className='btn btn-accent text-white mx-auto' to='/dashboard/manageproducts'>Manage Product</Link>

            </div>
        </div>
    );
};

export default AddProduct;