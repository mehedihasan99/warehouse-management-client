import React from 'react';
import useProducts from '../../hooks/useProducts';
import './MyItemsManage.css'
const MyItemsManage = () => {
    const [products, setProducts] = useProducts();
    const handleDelete = id => {
        const proceed = window.confirm("Want to delete?")
        if (proceed) {
            const url = `https://secret-falls-82494.herokuapp.com/cloth/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                })
        }
    }
    return (
        <div className='container'>
            <div className='myItems-container mt-5'>
                {
                    products.map(product =>
                        <div
                            key={product._id}
                            className="card">
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6>Price: {product.price}</h6>
                                <h6>Quantity: {product.quantity}</h6>
                                <h6>Supplier: {product.supplier}</h6>
                                <p className="card-text">{product.description}</p>
                                <button
                                    onClick={() => handleDelete(product._id)}
                                    href="#" className="btn btn-danger">Delete</button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default MyItemsManage;