import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './CuisinHistory.css'

function CuisinHistory() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const captionStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '80%',
    };

    const caption = (
        <div style={captionStyle} className='carousel-text'>
            <h3 className='brandName text-white text-center'>History of Levantine Cuisine</h3>
            <p>Levantine cuisine is a style of cooking that originated in the Eastern Mediterranean region and has been influenced by various cultures and civilizations throughout the ages. It is known for its use of fresh, locally sourced ingredients such as vegetables, fruits, herbs, and spices, as well as meats like lamb and chicken, and grains like rice and bulgur. Some popular dishes include hummus, falafel, tabbouleh, baba ghanoush, shawarma, and kebab. The cuisine has a rich history that dates back thousands of years and has been shaped by various conquerors and empires, each of which brought their own culinary traditions and ingredients to the region.
            </p>
        </div>
    );

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
            <Carousel.Item>
                <img
                    className="d-block w-100 image-height"
                    src="/1.jpg"
                    alt="First slide"
                />
                {caption}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image-height"
                    src="/3.jpg"
                    alt="Second slide"
                />
                {caption}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image-height"
                    src="/4.jpg"
                    alt="Third slide"
                />
                {caption}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image-height"
                    src="/5.jpg"
                    alt="Fourth slide"
                />
                {caption}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image-height"
                    src="/6.jpg"
                    alt="Fifth slide"
                />
                {caption}
            </Carousel.Item>
        </Carousel>
    );
}

export default CuisinHistory;
