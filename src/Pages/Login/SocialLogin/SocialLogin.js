import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    if (loading) {
        return <div className='text-center mt-5'>
            <Spinner className='mt-5' animation="border" variant="primary" />
        </div>
    }
    let errorMsg;
    if (error) {

        errorMsg = <p>Error: {error.message}</p>

    }

    if (user) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <span className='mx-2'>OR</span>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <p className='text-danger text-center'>{errorMsg}</p>
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-100 mt-4'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;