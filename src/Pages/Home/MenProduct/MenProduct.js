import React from 'react';

const MenProduct = ({ menProduct }) => {
    const { image, name } = menProduct;
    return (
        <div className="card" >
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
            </div>
        </div>
    );
};

export default MenProduct;