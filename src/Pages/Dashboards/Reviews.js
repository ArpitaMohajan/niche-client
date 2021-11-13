import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth()
    const history = useHistory()


    const onSubmit = data => {
        console.log(data)
        axios.post('https://calm-dawn-19419.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset()
                }
            })


    }
    return (
        <div>
            <h1>Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className="input-field"
                    name="email"
                    value={user?.email}
                    type="email"
                    {...register("email", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="comments"
                    placeholder="Comments"
                    {...register("comments", { required: true })}
                />
                <br />
                <input
                    className="input-field"
                    name="rate"
                    placeholder="rate"
                    type="number"
                    {...register("rate", { required: true, maxLength: 5 })}
                />
                <br />

                <input
                    className="submit-btn btn btn-danger mt-3"
                    type="submit"
                    value="Register"
                />
            </form>
        </div>
    );
};

export default Reviews;