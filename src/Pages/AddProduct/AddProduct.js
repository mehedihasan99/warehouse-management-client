import React from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
const AddProduct = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = `http://localhost:5000/cloth`;
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
            })
    };
    return (
        <div className='add-products mx-auto mt-5 '>
            <h2 className='text-center text-primary my-5'>Add new item</h2>
            <form className='d-flex  flex-column border p-5 rounded' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Photo Url' {...register("image")} />
                <input placeholder='Email' value={user.email} {...register("email")} readOnly />
                <input placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='Price' type="number" {...register("price")} />
                <input placeholder='Quantity' type="number" {...register("quantity")} />
                <input placeholder='Supplier Name' {...register("supplier")} />
                <textarea placeholder='Description' {...register("description")} />
                <input type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;