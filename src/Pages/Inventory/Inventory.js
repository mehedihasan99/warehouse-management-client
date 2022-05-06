import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    let { id } = useParams();
    const [cloth, setCloth] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/cloth/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCloth(data))
    }, [])
    return (
        <div className="card mx-auto mt-5" style={{ width: "400px" }}>
            <img src={cloth.image} class="card-img-top" alt="..." style={{ width: "200px" }} />
            <div className="card-body">
                <h5 className="card-title">{cloth.name}</h5>
                <h6>Price: {cloth.price}</h6>
                <h6>Quantity: {cloth.quantity}</h6>
                <h6>Supplier: {cloth.supplier}</h6>
                <p className="card-text">{cloth.description}</p>
                <div >
                    <button href="#" className="btn btn-primary">Stock</button>
                    <button className="btn btn-warning ms-4">delivered</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;