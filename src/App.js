import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Pages/Home/Header/Header';
import Login from './Pages/Shared/Login/Login';
import Register from './Pages/Shared/Login/Register';
import AuthProvider from './contexts/AuthProvider';
import AddProduct from './Pages/AddProduct/AddProduct';
import AddProducts from './Pages/AddProduct/AddProducts';
import Details from './Pages/Home/Details/Details';
import Dashboard from './Pages/Dashboards/Dashboard';
import ManageOrder from './Pages/Dashboards/ManageOrder';
import MyOrders from './Pages/Dashboards/MyOrders';
import MakeAdmin from './Pages/Dashboards/MakeAdmin';
import Reviews from './Pages/Dashboards/Reviews';
import ManageAllProduct from './Pages/Dashboards/ManageAllProduct';
import PrivateRoute from './Pages/Shared/Login/PrivateRoute/PrivateRoute';
import AllProduct from './Pages/AddProduct/AllProduct';
import Detailing from './Pages/Home/Details/Detailing';
import Pay from './Pages/Dashboards/Pay';
import NotFound from './Pages/Shared/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path="/addProduct">
              <AddProduct></AddProduct>
            </PrivateRoute>
            <PrivateRoute path='/addProducts'>
              <AddProducts></AddProducts>

            </PrivateRoute>

            <PrivateRoute path="/details/:serviceId">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/detailing/:productId">
              <Detailing></Detailing>
            </PrivateRoute>
            <Route path='/dashboard'>
              <Dashboard></Dashboard>
            </Route>
            <Route path='/pay'>
              <Pay></Pay>
            </Route>
            <Route path='/manageOrder'>
              <ManageOrder></ManageOrder>
            </Route>
            <PrivateRoute path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <Route path='/manageAllProduct'>
              <ManageAllProduct></ManageAllProduct>
            </Route>
            <Route path='/makeAdmin'>
              <MakeAdmin></MakeAdmin>
            </Route>

            <Route path='/reviews'>
              <Reviews></Reviews>
            </Route>

            <Route path='/addProducts'>
              <AddProducts></AddProducts>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
