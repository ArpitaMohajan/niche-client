import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import './Detailing.css'
import useAuth from '../../../hooks/useAuth';


const Detailing = () => {
    const [bookingDetail, setBookingDetail] = useState({})
    const { register, handleSubmit, reset } = useForm()

    const { user } = useAuth()

    const initialInfo = { prodName: user.displayName, email: user.email }
    const [bookingInfo, setBookingInfo] = useState(initialInfo)

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo }
        newInfo[field] = value;
        setBookingInfo(newInfo)
    }



    const { productId } = useParams()
    const history = useHistory();
    const onSubmit = data => {

        console.log(data)
        axios.post('https://calm-dawn-19419.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {

                    reset()
                }
                console.log(res)
            })
    };
    useEffect(() => {
        fetch(`https://calm-dawn-19419.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setBookingDetail(data))
    }, []);

    return (
        <div className='add-detail'>
            <h1 className='ins'>This is About Detail page:{productId}</h1>
            <h2>This:{bookingDetail.name}</h2>
            <h3>This:{bookingDetail.price}</h3>
            <p ><h2 className="bold ins">Description:</h2>{bookingDetail.description}</p>
            <img width="25%" src={bookingDetail?.img} alt="" />

            <form className="w-100 " onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 80 })} placeholder="name" defaultValue={user.displayName} onBlur={handleOnBlur} />

                <input {...register("email")} placeholder="email" defaultValue={user.email} onBlur={handleOnBlur} />

                <input {...register("address")} placeholder="address" onBlur={handleOnBlur} />


                <input type="number" {...register("phone number")} placeholder="phone number" onBlur={handleOnBlur} />

                <input type="number" {...register("price")} placeholder="price" defaultValue="price" />

                <input {...register("img")} placeholder="img" />


                <input className="in" type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default Detailing;