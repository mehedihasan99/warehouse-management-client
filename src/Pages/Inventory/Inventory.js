import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    let { id } = useParams();
    return (
        <div>
            <h2>Inventory: {id}</h2>
        </div>
    );
};

export default Inventory;