import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './component/Header';
import Layout from './component/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Demo from './component/Demo';
import HomePage from './component/HomePage';
import LoginForm from './component/Login-signup/LoginForm';
import SignupForm from './component/Login-signup/SignupForm';
import Aboutus from './component/Aboutus';
import BikeListing from './component/BikeListing';
import DetailVehicle from './component/DetailVehicle';
import Profile from './component/Profile';
import Booking from './component/Booking';
import Adminlogin from './component/admin/Adminlogin';
import LayoutAdmin from './component/admin/LayoutAdmin';
import Changepass from './component/admin/Changepass';
import Addbrand from './component/admin/Addbrand';
import Managebrand from './component/admin/Managebrands';
import Addvehicle from './component/admin/Addvehicle';
import Managevehicle from './component/admin/Managevehicle';
import Managebooking from './component/admin/Managebooking';
import Regusers from './component/admin/Regusers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<Aboutus />} />
      <Route path='/bike-listing' element={<BikeListing />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/booking' element={<Booking />} />
      <Route path='/detail/:vehicleTittle' element={<DetailVehicle />} />
    </Route>

    <Route>
      <Route path='/login' element={<LoginForm />} />
    </Route>
    <Route path='/admin' >
      {/* <Route path='/admin/dashboard' element={<LayoutAdmin/>} /> */}
      <Route index element={<Adminlogin />} />
      <Route path='dashboard' element={<LayoutAdmin />} >
          <Route index element={ <Changepass /> }/>
          <Route path='changepass' element={ <Changepass /> }/>
          <Route path='addbrand' element={ <Addbrand /> }/>
          <Route path='editbrand/:id' element={ <Addbrand /> }/>
          <Route path='managebrand' element={ <Managebrand /> }/>
          <Route path='addvehicle' element={ <Addvehicle /> }/>
          <Route path='editvehicle/:id' element={ <Addvehicle /> }/>
          <Route path='managevehicle' element={ <Managevehicle /> }/>
          <Route path='managebooking' element={ <Managebooking /> }/>
          <Route path='users' element={ <Regusers /> }/>
      </Route>
    </Route>

    <Route>
      <Route path='/signup' element={<SignupForm />} />
    </Route>
  </Routes>
</BrowserRouter>
);

