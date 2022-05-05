import React from 'react';
import useProducts from '../../../hooks/useProducts';
import ClothingProduct from '../ClothingProduct/ClothingProduct';
import './ClothingProducts.css'
const ClothingProducts = () => {
    const [products, setProducts] = useProducts();
    const cloths = products.slice(0, 6)
    return (
        <div className='container'>
            <h2 className='text-center my-5 text-primary'>Clothing Products</h2>
            <div className='cloth-container'>
                {
                    cloths.map(cloth => <ClothingProduct
                        key={cloth._id}
                        cloth={cloth}
                    ></ClothingProduct>)

                }
            </div>
        </div>
    );
};

export default ClothingProducts;