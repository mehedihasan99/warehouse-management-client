import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'
const Register = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passRef = useRef('');
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error1,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const navigate = useNavigate();
    if (user) {
        console.log('user', user);
    }
    const handleRegister = async event => {
        event.preventDefault();
        const displayName = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        // console.log(displayName, email, pass);
        await createUserWithEmailAndPassword(email, pass)
        await updateProfile({ displayName });
        navigate('/home')
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
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Register;