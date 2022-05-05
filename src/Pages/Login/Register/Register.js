import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    return (
        <div className='container main-container'>
            <form className='form-container'>
                <h3 className='text-center mb-5'>Register</h3>
                <input type="text" name="name" placeholder='Your Name' />
                <input type="email" name="email" placeholder='Your Email' required />
                <input type="password" name="password" placeholder='Your Password' />
                <input type="submit" value="Register" required />
                <p className='text-center mt-4'>
                    <span className='text-primary'>Already have a account?</span>
                    <span> <Link className='link-btn text-danger' to='/login'>Login</Link></span>
                </p>
            </form>
        </div>
    );
};

export default Register;