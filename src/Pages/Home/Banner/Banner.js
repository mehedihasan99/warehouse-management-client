import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner-1.jpg'
import banner2 from '../../../images/banner/banner-2.jpg'
import banner3 from '../../../images/banner/banner-3.png'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    style={{ height: '530px' }}
                    className="d-block w-100"
                    alt="First slide"
                    src={banner1}
                />
                <Carousel.Caption>
                    <h3>Hooded Sweatshirt</h3>
                    <p>Made of cotton & polyester fabrics.Dry function is added which helps to dry faster evene after waashing or sweating..</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '530px' }}
                    className="d-block w-100"
                    alt="Second slide"
                    src={banner2}
                />

                <Carousel.Caption>
                    <h3>Cooldry Crop</h3>
                    <p>Water Repellent Fabric, Dry Repellent Fabric & Wrinkle Resistant</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ height: '530px' }}
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Singlet</h3>
                    <p>
                        Made from 100% cotton fabrics with printed pattern in various colors.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;