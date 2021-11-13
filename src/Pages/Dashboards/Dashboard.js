
import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import {

  Switch,
  Route,
  Link,

  useRouteMatch
} from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AddProduct from '../AddProduct/AddProduct';
import Footer from '../Shared/Footer/Footer';

import AdminRoute from '../Shared/Login/AdminRoute';
import MakeAdmin from './MakeAdmin';
import ManageAllProduct from './ManageAllProduct';
import ManageOrder from './ManageOrder';
import MyOrders from './MyOrders';
import Pay from './Pay';
import Reviews from './Reviews';

// import { Link } from 'react-router-dom';

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, user, logOut } = useAuth()


  return (
    <div className="row sticky">
      <div className="col-3  vh-100 pt-5 bg-dark text-primary">

        <Container>
          <ul className=" text-primary ">
            {/* <div className="  "> <Nav.Link as={Link} to="/home#home">Home</Nav.Link> </div> */}
            {/* <div className=" "><Nav.Link as={Link} to="/home#services">Products</Nav.Link></div> */}
            <div className=""><Nav.Link as={Link} to={`${url}`}>Dashboard</Nav.Link></div>
            <div className=""><Nav.Link as={Link} to={`${url}/myOrders`}>My Orders</Nav.Link></div>

            <div className=""><Nav.Link as={Link} to={`${url}/reviews`}>Review</Nav.Link></div>
            <div className=""><Nav.Link as={Link} to={`${url}/pay`}>Pay</Nav.Link></div>


            {admin && <div>
              <Nav.Link as={Link} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
              <Nav.Link as={Link} to={`${url}/addProduct`}>AddProduct</Nav.Link>
              <Nav.Link as={Link} to={`${url}/manageOrder`}>Manage Order</Nav.Link>
              <Nav.Link as={Link} to={`${url}/manageAllProduct`}>Manage All Product</Nav.Link>
            </div>}
            {user?.email ?
              <Button onClick={logOut} variant="light">Logout</Button> :
              <Nav.Link href="/login">Login</Nav.Link>}


          </ul>
        </Container>


      </div>

      <div className="col-9 pt-5">
        <Switch>

          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews></Reviews>
          </Route>
          <Route path={`${path}/manageOrder`}>
            <ManageOrder></ManageOrder>
          </Route>
          <AdminRoute path={`${path}/manageAllProduct`}>
            <ManageAllProduct></ManageAllProduct>
          </AdminRoute>
          <Route path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
        </Switch>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
      </div>
      <Footer></Footer>
    </div>

  );
};

export default Dashboard;