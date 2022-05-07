import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Inventory = () => {
    let { id } = useParams();
    const [cloth, setCloth] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        const url = `http://localhost:5000/cloth/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCloth(data))
    }, [])
    // ---------- update-----------
    const handleUpdateStock = event => {
        event.preventDefault();
        const inputQuantity = parseInt(event.target.quantity.value);
        const mainQuantity = parseInt(cloth.quantity);
        const quantity = inputQuantity + mainQuantity;
        const updateStock = { quantity };

        //send data to the server
        fetch(`http://localhost:5000/cloth/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateStock),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Item Stock Successfully");
                event.target.reset();
                navigate('/')
            })
    }
    // ------------ delivered------------
    const handleDeliveredStock = event => {
        const mainQuantity = parseInt(cloth.quantity);
        const quantity = mainQuantity - 1;
        if (quantity <= 0) {
            toast("Sold Out");
        }
        const updateStock = { quantity };

        //send data to the server
        fetch(`http://localhost:5000/cloth/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateStock),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast("Item delivered Successfully");
                navigate('/')
            })
    }
    return (
        <div className="card mx-auto mt-5" style={{ width: "400px" }}>
            <img src={cloth.image} className="card-img-top" alt="..." style={{ width: "200px" }} />
            <div className="card-body">
                <h5 className="card-title">{cloth.name}</h5>
                <h6>Price: {cloth.price}</h6>
                <h6>Quantity: {cloth.quantity}</h6>
                <h6>Supplier: {cloth.supplier}</h6>
                <p className="card-text">{cloth.description}</p>
                <div className='mb-3'>
                    <button
                        onClick={handleDeliveredStock}
                        className="btn btn-warning ">delivered</button>
                </div>
                <form onSubmit={handleUpdateStock}>
                    <input type="text" name='quantity' placeholder='Update quantity' />
                    <br />
                    <input className='btn btn-primary mt-3' type="submit" value="Stock" />
                </form>
            </div>
        </div>
    );
};

export default Inventory;