import React from 'react';
import useProducts from '../../hooks/useProducts';
import MyItem from '../MyItem/MyItem';
import './MyItems.css'
const MyItems = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='container'>
            <h2 className='text-center my-5 text-primary'>All Products</h2>
            <div className='my-items-container'>
                {
                    products.map(product => <MyItem
                        key={product._id}
                        product={product}
                    ></MyItem>)
                }
            </div>
        </div>
    );
};

export default MyItems;