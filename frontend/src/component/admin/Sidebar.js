import { useState } from 'react';
import './style1.css'
import { Link, useNavigate } from 'react-router-dom';

function Sidebar() {

  const [brands, setBrands] = useState();
  const [vehicle, setVehicle] = useState();
const navigate = useNavigate();

  return (<>
    <div class="sidebar">
      <div class="sidebar-brand">
        <h2>Admin Dashboard</h2>
      </div>
      <ul class="list-unstyled components">
        <li class="active">
          <div className='d-flex justify-content-between'>
            <Link to="changepass">Change Password</Link>
            <i class="fa-solid fa-lock"></i>

          </div>
        </li>

        <li class="dropdown-two" onClick={() => setBrands(!brands)}>
          <div className='d-flex justify-content-between pe -2'>
            <label>Brand</label>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          {brands && <ul class="dropdown-menu-two">
            <li><Link to="./addbrand">Create Brand</Link></li>
            <li><Link to="./managebrand">Manage Brands</Link></li>
          </ul>}
        </li>

        <li class="dropdown-two" onClick={() => setVehicle(!vehicle)}>
          <div className='d-flex justify-content-between pe -2'>
            <label>Vehicle</label>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          {vehicle && <ul class="dropdown-menu-two">
            <li><Link to="./addvehicle">Post Vehicle</Link></li>
            <li><Link to="./managevehicle">Manage Vehicles</Link></li>
          </ul>}
        </li>
        <li>
          <Link to="./managebooking">Manage Booking</Link>
        </li>
        <li>
          <Link to="./users">Registered Users</Link>
        </li>
        <li>
          <Link to="/admin" onClick={()=>{
            document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            // navigate("/admin");
            
          }}>Logout</Link>
        </li>


      </ul>
    </div>

  </>);
}
export default Sidebar;