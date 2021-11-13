import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MyOrder = ({ order }) => {
    const [orders, setOrders] = useState([])
    const [success, setSuccess] = useState(false)
    const { _id, email, name, price, address, img } = order;
    const handleDelete = id => {
        const url = `https://calm-dawn-19419.herokuapp.com/dltOrders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Are You sure want to delete?')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }
            })
    }

    return (
        <div className="service pb-3">
            <img className="w-50" src={img} className="w-50" alt="" srcset="" />
            <h2>{name}</h2>
            <h3>{email}</h3>
            <h4>Price:{price}</h4>
            <Link to={`/myOrders/${_id}`}></Link>
            <button onClick={() => handleDelete(order._id)} className="btn btn-warning">Delete</button>
            {
                success && <Alert variant="success">Successfully purchse</Alert>
            }
        </div>
    );
};

export default MyOrder;