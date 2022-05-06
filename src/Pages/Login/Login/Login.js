import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        signInWithEmailAndPassword(email, pass);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='container main-container'>
            <form onSubmit={handleLogin} className='form-container'>
                <h3 className='text-center mb-5'>Login</h3>
                <input type="email" ref={emailRef} name="email" placeholder='Your Email' required />
                <input type="password" ref={passRef} name="password" placeholder='Your Password' />
                <input type="submit" value="Login" required />
                <p className='text-center mt-4'>
                    <span className='text-primary'>New to perfect size?</span>
                    <span> <Link className='link-btn text-danger' to='/register'>Register</Link></span>
                </p>
                <SocialLogin></SocialLogin>
            </form>
        </div>
    );
};

export default Login;