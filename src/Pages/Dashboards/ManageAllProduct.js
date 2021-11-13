import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form"

const ManageAllProduct = () => {
    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();


    const [orderId, setOrderId] = useState("");
    // console.log(status);
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };
    useEffect(() => {
        fetch("https://calm-dawn-19419.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);


    const onSubmit = (data) => {
        console.log(data, orderId)

    };
    const handleDelete = id => {
        const url = `https://calm-dawn-19419.herokuapp.com/dltProducts/${orderId}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Want to delete?')
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining)
                }
            })
    }
    return (
        <div className="container">
            <h1>All orders {orders.length}</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Title</th>
                        <th>Product description</th>

                        <th>Status</th>

                    </tr>
                </thead>

                {orders?.map((pd, index) => (

                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.description}</td>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    onClick={() => handleOrderId(pd?._id)}
                                    {...register("status")}
                                >
                                    <option value={pd?.status}>{pd?.status}</option>

                                </select>
                                <input type="submit" />
                            </form>

                            <button onClick={() => handleDelete(orders._id)} className="btn bg-danger p-1"><i className="fas fa-trash-alt" />Delete</button>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div >
    );
};

export default ManageAllProduct;