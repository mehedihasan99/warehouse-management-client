import React from 'react';
import notFound from '../../../images/NotFound.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='not-found'>
            <img src={notFound} alt="" />
        </div>
    );
};

export default NotFound;