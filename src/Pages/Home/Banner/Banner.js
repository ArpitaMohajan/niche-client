import React from 'react';
import { Carousel } from 'react-bootstrap';
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='https://image.freepik.com/free-vector/shampoo-soap-bottles-vector-realistic-product-placement-label-designs_1268-18676.jpg'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p className="text-dark">Pharmacy is the science of preparing and dispensing medical drugs.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='https://as2.ftcdn.net/v2/jpg/04/52/55/69/1000_F_452556911_vp6JUBkZ67VpersqiEFdZYbR9kOwuiAC.jpg'
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p className="text-dark">A pharmacisit is a licenced healthcare professional who specializes in providing information.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 m-auto"
                        src='https://image.freepik.com/free-vector/realistic-argan-oil-hair-serum-promo_52683-58588.jpg'
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p className="text-dark">Pharmacist are health professional who dispense medications,advising patients regarding the use..</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;