import React from 'react';

const WomenProduct = ({ womenProduct }) => {
    const { image, name } = womenProduct;
    return (
        <div>
            <div className="card" >
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </div>
    );
};

export default WomenProduct;