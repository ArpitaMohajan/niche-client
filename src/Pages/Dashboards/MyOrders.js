import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MyOrder from './MyOrder';
import './MyOrders.css'
const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const { user } = useAuth()
    const [error, setError] = useState(false)
    useEffect(() => {
        fetch(`https://calm-dawn-19419.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(result => setOrders(result))
            .catch(error => setError(true))
    })

    return (
        <div>
            <h2 className="text-primary mt-5">
                My Orders
            </h2>
            <div className="order-container">
                {
                    orders.map(order => <MyOrder
                        key={order.id}
                        order={order}
                    ></MyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;