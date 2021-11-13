import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import './AddProducts.css';
import AllProduct from './AllProduct';



const AddProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://calm-dawn-19419.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div >

            <h2 className='text-primary mt-5'>All Product</h2>
            <div className='service-container'>
                {
                    products.map(product => <AllProduct
                        key={product.id}
                        product={product}

                    ></AllProduct>)
                }
            </div>
            <Footer></Footer>
        </div>

    );
};

export default AddProducts;