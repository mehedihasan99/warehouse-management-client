import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <span className='mx-2'>OR</span>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            <div>
                <button className='btn btn-primary w-100 mt-4'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;