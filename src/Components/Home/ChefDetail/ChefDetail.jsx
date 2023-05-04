import React from 'react';
import { useParams } from 'react-router-dom';

const ChefDetail = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <div className='my-5 container'>
            Hello
        </div>
    );
};

export default ChefDetail;