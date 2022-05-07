import React from 'react';
import notFound from '../../../images/NotFound.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='not-found'>
            <img className='img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;