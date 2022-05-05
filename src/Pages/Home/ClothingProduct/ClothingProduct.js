import React from 'react';

const ClothingProduct = ({ cloth }) => {
    const { name, image, price, quantity, supplier, description } = cloth;
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <h6>Price: {price}</h6>
                <h6>Quantity: {quantity}</h6>
                <h6>Supplier Name: {supplier}</h6>
                <p className="card-text">{description}</p>
                <button href="#" className="btn btn-primary">Update</button>
            </div>
        </div>
    );
};

export default ClothingProduct;