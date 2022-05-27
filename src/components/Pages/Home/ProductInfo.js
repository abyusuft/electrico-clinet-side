import React from 'react';

const ProductInfo = ({ product, handlePurchaseItem }) => {
    const { name, img, price, stock, _id, moq, description } = product;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className=" text-center p-6">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className='my-5 text-lg'>{description}</p>
                <div className='grid grid-cols-2 gap-5 mt-2'>
                    <div className=' border-2 bg-base-200 rounded-xl'>
                        <p className=' font-bold'>MOQ</p>
                        <p className=''>{moq}</p>
                    </div>
                    <div className='border-2 bg-base-200 rounded-xl'>
                        <p className='font-bold'>Stock</p>
                        <p className=''>{stock}</p>
                    </div>
                </div>
                <p className='font-bold text-2xl py-3'>Price: ${price}</p>
                <div className="card-actions">
                    <button onClick={() => handlePurchaseItem(_id)} className="btn btn-primary btn-block">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;