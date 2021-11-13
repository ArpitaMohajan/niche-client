import React from 'react';
import { Link } from 'react-router-dom';
import './AllProduct.css'
const AllProduct = ({ product }) => {
    const { _id, name, price, description, img } = product;
    return (
        <div className='service pb-3'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price:{price}</h5>
            <p className='px-3'>{description}</p>


            <Link to={`/detailing/${_id}`}>
                <button className="btn btn-warning">Book Now</button>
            </Link>
        </div>
    );
};

export default AllProduct;