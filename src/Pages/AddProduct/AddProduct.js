import React from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const AddProduct = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `https://secret-falls-82494.herokuapp.com/cloth`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast("user-added successfully")
                navigate('/manage');
            })
    };
    return (
        <div className='add-products mx-auto mt-5 '>
            <h2 className='text-center text-primary'>Add new item</h2>
            <form className='d-flex  flex-column border p-5 rounded' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Photo Url' {...register("image")} required />
                <input placeholder='Email' value={user.email} {...register("email")} readOnly required />
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} required />
                <input placeholder='Price' type="number" {...register("price")} required />
                <input placeholder='Quantity' type="number" {...register("quantity")} required />
                <input placeholder='Supplier Name' {...register("supplier")} required />
                <textarea placeholder='Description' {...register("description")} required />
                <input type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;