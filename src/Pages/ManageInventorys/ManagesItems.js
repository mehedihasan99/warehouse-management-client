import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageItem from '../ManageInventory/ManageItem';
import './ManagesItems.css'
const ManagesItems = () => {
    const [products, setProducts] = useProducts();
    return (
        <div className='container'>
            <h2 className='text-center my-5 text-primary'>All Products</h2>
            <div className='managesItems-container'>
                {
                    products.map(product => <ManageItem
                        key={product._id}
                        product={product}
                    ></ManageItem>)
                }
            </div>
        </div>
    );
};

export default ManagesItems;