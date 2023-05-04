import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

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
        <div style={captionStyle}>
            <h3 className='brandName text-white text-center'>History of Levantine Cuisine</h3>
            <p>Levantine cuisine is a rich and diverse culinary tradition that has its roots in the eastern Mediterranean region, including parts of Syria, Lebanon, Palestine, Jordan, and Israel. The cuisine has been shaped by centuries of cultural and historical influences, including Arab, Ottoman, and European, as well as the regions geography and climate. <br />
            At its core, Levantine cuisine is characterized by fresh, seasonal ingredients, bold flavors, and simple cooking techniques that highlight the natural flavors of the food. The cuisine is also known for its vibrant colors and aromatic spices, which are used to enhance the flavors of dishes and create complex, layered tastes. <br />
            Levantine cuisine is also known for its use of spices such as cumin, coriander, sumac, and zaatar, as well as fresh herbs like mint, parsley, and cilantro. Vegetables and grains are also important components of the cuisine, with dishes like mujadara (a lentil and rice dish) and stuffed grape leaves (a dish made with rice, herbs, and vegetables wrapped in grape leaves) being popular examples. <br />
            Overall, Levantine cuisine is a celebration of fresh, flavorful ingredients and simple cooking techniques that have been honed over centuries of tradition and culture. It continues to be a beloved and vibrant culinary tradition today, both in the eastern Mediterranean region and around the world.
            </p>
        </div>
    );

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100"
                    src="/1.jpg"
                    alt="First slide"
                />
                {caption}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100"
                    src="/3.jpg"
                    alt="Second slide"
                />
                {caption}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100"
                    src="/4.jpg"
                    alt="Third slide"
                />
                {caption}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100"
                    src="/5.jpg"
                    alt="Fourth slide"
                />
                {caption}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 vh-100"
                    src="/6.jpg"
                    alt="Fifth slide"
                />
                {caption}
            </Carousel.Item>
        </Carousel>
    );
}

export default CuisinHistory;
