import React from 'react';
import Rating from 'react-rating';

const Reviewing = ({ product }) => {
    const { email, comments, star } = product;
    return (
        <div className='service pb-3'>
            <h5>{email}</h5>
            <h3>{comments}</h3>
            <Rating initialRating={star} emptySymbol="far fa-star"
                fullSymbol="far fa-star"
            />
            {/* <img src={img} alt="" />
        <h3>{name}</h3>
        <h5>Price:{price}</h5>
            <p className='px-3'>{description}</p> */}
        </div>
    );
};

export default Reviewing;