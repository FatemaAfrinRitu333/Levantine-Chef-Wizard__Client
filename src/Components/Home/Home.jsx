import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import CardSection from './CardSection/CardSection';
import CuisinHistory from './CuisinHistory/CuisinHistory';
import Newsletter from './Newsletter/Newsletter';

const Home = () => {
    return (
        <div className=''>
            <HeroSection></HeroSection>
            <CardSection></CardSection>
            <CuisinHistory></CuisinHistory>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;