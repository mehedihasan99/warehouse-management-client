import React from 'react';
import './MenProducts.css'

import men1 from '../../../images/mens/men-1.jpg'
import men2 from '../../../images/mens/men-2.jpg'
import men3 from '../../../images/mens/men-3.jpg'
import men4 from '../../../images/mens/men-4.jpg'
import men5 from '../../../images/mens/men-5.jpg'
import men6 from '../../../images/mens/men-6.jpg'
import MenProduct from '../MenProduct/MenProduct';
const MenProducts = () => {
    const menProducts = [
        { id: 1, name: "Jacket", image: men1 },
        { id: 2, name: "Yoke Panel", image: men2 },
        { id: 3, name: "Shorts", image: men3 },
        { id: 4, name: "Trackpants", image: men4 },
        { id: 5, name: "Basketball Singlet", image: men5 },
        { id: 6, name: "Dyed Pants", image: men6 }
    ]
    return (
        <div id='men' className='container'>
            <h2 className='text-center my-5 text-primary'>Men Products</h2>
            <div className='men-product-container'>
                {
                    menProducts.map(menProduct => <MenProduct
                        key={menProduct.id}
                        menProduct={menProduct}
                    ></MenProduct>)
                }
            </div>
        </div>
    );
};

export default MenProducts;