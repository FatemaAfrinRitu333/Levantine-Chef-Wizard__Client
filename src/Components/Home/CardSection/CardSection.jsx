import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import ChefCard from './ChefCard';

const CardSection = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('https://assignment-ten-server-delta.vercel.app/chefCard')
        .then(res=>res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='my-5 container'>
            <h2 className='brandName text-center mb-5'>Out Chefs Who Are Dedicated To Levantine Cuisine</h2>
            <Row xs={1} sm={2} lg={3}   className="g-4">
                {
                    data.map(chef=> <ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
                </Row>
        </div>
    );
};

export default CardSection;