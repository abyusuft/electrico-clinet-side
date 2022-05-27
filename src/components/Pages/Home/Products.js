import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import ProductInfo from './ProductInfo';

const Products = () => {
    const { data: products, isLoading } = useQuery('homeProduct', () => fetch(`http://localhost:5000/product`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }

    }).then(res => res.json()));

    if (isLoading) {
        <Loading></Loading>
    }
    const navigate = useNavigate();

    const handlePurchaseItem = (id) => {
        navigate(`dashboard/purchase/${id}`);
    }

    return (
        <div>
            <h2 className='text-center text-2xl lg:text-5xl font-bold uppercase p-3'>Our Products</h2>
            <div className="product-section grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto p-8 mt-5">
                {
                    products?.slice(0, 6).map(product => <ProductInfo
                        key={product._id}
                        product={product}
                        handlePurchaseItem={handlePurchaseItem}
                    ></ProductInfo>)
                }

            </div>
        </div>
    );
};

export default Products;