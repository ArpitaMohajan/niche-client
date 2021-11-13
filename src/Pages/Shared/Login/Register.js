import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Alert, Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const { user, registerUser, isLoading, authError } = useAuth();
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = { ...loginData };
        // console.log(newLoginData)
        newLoginData[field] = value;

        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password didnt match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault()
    }
    return (

        <Container>

            {!isLoading && <form onSubmit={handleLoginSubmit}>
                {/* <h3 className="text-primary">Please{isLogin ? 'Login' : 'Register'} </h3> */}
                <div className="row mb-3 p-5">
                    <label htmlFor="Your Name" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input onBlur={handleOnBlur} name="name" className="form-control" id="inputEmail3" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="Your Email" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={handleOnBlur} type="email" name="email" className="form-control" id="inputEmail3" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <label htmlFor="Your Password" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handleOnBlur} type="password" className="form-control" id="inputPassword3" name="password" required />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="Retype-Password" className="col-sm-2 col-form-label">Re-type Password</label>
                    <div className="col-sm-10">
                        <input onBlur={handleOnBlur} type="password" name="password2" className="form-control" id="inputPassword3" required />
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-sm-10 offset-sm-2">

                        {/* <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" /> */}

                        <Link to='/login'>Allready Registered? Please Login</Link>
                        <br />
                        <br />
                        <Button type="submit" className="btn btn-primary">Register</Button>

                    </div>
                </div>

                {/* <div className="row mb-3 text-danger">
                    {error}
                </div>
                <button type="submit" className="btn btn-primary">{isLogin ? 'Login' : 'Register'}</button> */}
            </form >}
            {
                isLoading && <Spinner animation="border" variant="secondary" />

            }
            {
                user?.email && <Alert variant="success">user registered successfully</Alert>
            }
            {
                authError && <Alert variant="danger">{authError}</Alert>
            }
        </Container>

    );

};

export default Register;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';
// // import useAuth from '../../hooks/useAuth';
// const Register = () => {
//     const { signInUsingGoogle } = useAuth()
//     return (
//         <div>
//             <h2 className="text-success">Register: Create Account</h2>
//             <form onSubmit="">
//                 <label htmlFor='email'>Email:</label>
//                 <input type="email" name="" id="" placeholder="Your Email" />
//                 <br />
//                 <label htmlFor='password'>Password:</label>
//                 <input type="password" name="" id="" placeholder="Your Password" />
//                 <br />
//                 <label htmlFor='password'>Re-enter Password:</label>
//                 <input type="password" name="" id="" placeholder="Re-enter Password" />
//                 <br />
//                 <input type="submit" value="Submit" />
//             </form>
//             <p>Already have an account? <Link to="/login">Login</Link></p>
//             <div>----------or-------------</div>
//             <br />
//             <button onClick={signInUsingGoogle} className="btn-warning">Google Sign In</button>
//         </div>
//     );

// };

// export default Register;