import React from 'react';
import Banner from '../Banner/Banner';
import ClothingProducts from '../ClothingProducts/ClothingProducts';
import MenProducts from '../MenProducts/MenProducts';
import WomenProducts from '../WomenProducts/WomenProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ClothingProducts></ClothingProducts>
            <MenProducts></MenProducts>
            <WomenProducts></WomenProducts>
        </div>
    );
};

export default Home;