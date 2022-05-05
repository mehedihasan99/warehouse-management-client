import React from 'react';
import ClothingProducts from '../ClothingProducts/ClothingProducts';
import MenProducts from '../MenProducts/MenProducts';
import WomenProducts from '../WomenProducts/WomenProducts';

const Home = () => {
    return (
        <div>
            <ClothingProducts></ClothingProducts>
            <MenProducts></MenProducts>
            <WomenProducts></WomenProducts>
        </div>
    );
};

export default Home;