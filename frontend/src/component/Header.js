import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [data,setData]=useState({});
  const [login,setLogin] = useState(false)
  useEffect(()=>{
    fetch("http://localhost:4000/home",{credentials:'include'})
        .then((res)=>{
            if(res.status!==401){
                setLogin(true)
                return res.json()
            }
        }).then((res)=>setData(res))
 },[])
  return (
    <section className="">
      <div className="default-header">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-md-2">
              <div className=""> <img className='' src={require('../img/logo.png')} />
              </div>
            </div>
            <div className="col-sm-9 col-md-10">
              <div className="header_info">
                <div className="header_widgets mt-4">
                  <div className="circle_icon"> <i className="fa fa-envelope" aria-hidden="true"></i> </div>
                  <p className="uppercase_text">For Support Mail us : </p>
                  <a href="mailto:info@example.com">DPMA1234@gmail.com</a> </div>
                <div className="header_widgets">
                  <div className="circle_icon text-center">
                    <i className="fa fa-phone" aria-hidden="true"></i> </div>
                  <p className="uppercase_text">Helpline Call Us: </p>
                  <a href="tel:61-1234-5678-09">+91-8866932712</a> </div>
                <div className="social-follow">
                  <ul>
                    
                    <li><a href=""><i className="fa-brands fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-square-twitter" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-square-google-plus" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-square-instagram" aria-hidden="true"></i></a></li>
                  </ul>
                </div>
                {!login && <div className="login_btn"> <a href='./login' className="btn btn-xs uppercase" data-bs-toggle="modal" data-bs-target="#exampleModal3" >Login / Register</a> </div>}
                {login && <p>welcome to { data.fullName }</p>}
                <div className="modal fade">
                </div>
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
          <div className="container">
            <a className="navbar-brand" href="#">Bike rental</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fa fa-bars"></span> Menu
            </button>

            <div className="collapse navbar-collapse" id="ftco-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item "><Link to="/" className="nav-link">Home</Link></li>

                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/bike-listing" className="nav-link">Bike Listing</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link">Faq's</Link></li>
                <li className="nav-item"><Link to="#" className="nav-link">Contact</Link></li>
                <li className="nav-item cta dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Profile</Link>
                  <div className="dropdown-menu" aria-labelledby="dropdown04">
                    <Link className="dropdown-item" to="/profile"><b>Profile</b></Link>
                    <Link className="dropdown-item" to="/booking"><b>My Booking</b></Link>
                    <Link className="dropdown-item" to="#"  onClick={()=>{
                      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                      window.location.reload(false);
                    }}><b>Logout</b></Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
