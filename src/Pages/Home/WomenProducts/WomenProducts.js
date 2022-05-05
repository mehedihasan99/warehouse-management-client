import React from 'react';
import women1 from '../../../images/womens/women-1.jpg'
import women2 from '../../../images/womens/women-2.jpg'
import women3 from '../../../images/womens/women-3.jpg'
import WomenProduct from '../WomenProduct/WomenProduct';
const WomenProducts = () => {
    const womenProducts = [
        { id: 1, name: "Sweatshirt", image: women1 },
        { id: 2, name: "Neck Sweat", image: women2 },
        { id: 3, name: "Zip Thru Hoddie", image: women3 },
    ]
    return (
        <div className='container'>
            <h2 className='text-center my-5 text-primary'>Women Products</h2>
            <div className='men-product-container'>
                {
                    womenProducts.map(womenProduct => <WomenProduct
                        key={womenProduct.id}
                        womenProduct={womenProduct}
                    ></WomenProduct>)
                }
            </div>
        </div>
    );
};

export default WomenProducts;