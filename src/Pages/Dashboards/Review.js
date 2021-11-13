import React, { useEffect, useState } from 'react';
import Reviewing from './Reviewing';

const Review = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://calm-dawn-19419.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div >

            <h2 className='text-primary mt-5'>Review</h2>
            <div className='service-container'>
                {
                    products.map(product => <Reviewing
                        key={product.id}
                        product={product}

                    ></Reviewing>)
                }
            </div>

        </div>
    );
};

export default Review;