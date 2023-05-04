import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from './Banner/Banner';

const ChefDetail = () => {
    const {id} = useParams();
    const chefDetail = useLoaderData();
    console.log(chefDetail);
    console.log(id);
    return (
        <div className='my-5 container'>
            <Banner
            key={chefDetail.chefId}
            chefDetail={chefDetail}
            ></Banner>
        </div>
    );
};

export default ChefDetail;