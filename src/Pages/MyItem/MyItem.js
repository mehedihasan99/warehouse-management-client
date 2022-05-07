import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItem.css'
const MyItem = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const email = user.email;
            const url = `http://localhost:5000/clothes?email=${email}`;
            const { data } = await axios.get(url);
            setItems(data)
        }
        getItems();


    }, [user])
    return (
        <div className='container'>
            <h2 className='text-center mt-5'>My Items:{items.length}</h2>
            <div className='myItems-container mt-5'>
                {
                    items.map(item =>
                        <div
                            key={item._id}
                            class="card">
                            <img src={item.image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <h6>Price: {item.price}</h6>
                                <h6>Quantity: {item.quantity}</h6>
                                <h6>Supplier: {item.supplier}</h6>
                                <p class="card-text">{item.description}</p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyItem;