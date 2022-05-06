import React from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";
const AddProduct = () => {
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
            })
    };
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2 className='text-center my-5'>Add new item</h2>
            <form className='d-flex flex-column border p-5 rounded' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Photo Url' {...register("image")} />
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