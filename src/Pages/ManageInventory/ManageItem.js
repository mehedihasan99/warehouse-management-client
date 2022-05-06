import React from 'react';
const ManageItem = ({ product }) => {
    const { _id, image, name, price, quantity, supplier, description } = product;
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <h6>Price: {price}</h6>
                <h6>Quantity: {quantity}</h6>
                <h6>Supplier Name: {supplier}</h6>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default ManageItem;