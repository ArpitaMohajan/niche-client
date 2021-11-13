import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Details = () => {
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



    const { serviceId } = useParams()
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
        fetch(`https://calm-dawn-19419.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setBookingDetail(data))
    }, [])

    return (
        <div>
            <h1>This is About Detail page:{serviceId}</h1>
            <h2>This:{bookingDetail.name}</h2>
            <h3>This:{bookingDetail.price}</h3>
            <p ><h2 className="bold">Description:</h2>{bookingDetail.description}</p>
            <img width="25%" src={bookingDetail?.img} alt="" />

            <form className="w-100 " onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 80 })} placeholder="name" defaultValue={user.displayName} onBlur={handleOnBlur} />
                <br />
                <input {...register("email")} placeholder="email" defaultValue={user.email} onBlur={handleOnBlur} />
                <br />
                <input {...register("address")} placeholder="address" onBlur={handleOnBlur} />
                <br />
                <input type="number" {...register("price")} placeholder="price" defaultValue="price" />
                <br />
                <input {...register("img")} placeholder="img" />
                <br />

                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default Details;