import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Register.css'
const Register = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const handleRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(name, email, pass);
        createUserWithEmailAndPassword(email, pass)
    }
    return (
        <div className='container main-container'>
            <form onSubmit={handleRegister} className='form-container'>
                <h3 className='text-center mb-5'>Register</h3>
                <input type="text" ref={nameRef} name="name" placeholder='Your Name' />
                <input type="email" ref={emailRef} name="email" placeholder='Your Email' required />
                <input type="password" ref={passRef} name="password" placeholder='Your Password' />
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