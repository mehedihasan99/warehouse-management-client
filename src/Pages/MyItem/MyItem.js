import React from 'react';

const MyItem = ({ product }) => {
    console.log(product);
    const { name, image, description, price, quantity, supplier } = product;
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Name: {name}</h5>
                <h6>Price: {price}</h6>
                <h6>Quantity: {quantity}</h6>
                <h6>Supplier Name: {supplier}</h6>
                <p className="card-text">{description}</p>
                <button href="#" className="btn btn-primary">Delete</button>
            </div>
        </div>
    );
};

export default MyItem;