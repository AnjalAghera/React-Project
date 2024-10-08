import { useEffect, useState } from "react";
import { json, useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert';

import './bike.css'

function DetailVehicle(){
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0'); // Day
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // Month (January is 0)
  const yyyy = today.getFullYear(); // Year
  
  const currentDate = yyyy + '-' + mm + '-' + dd;
    const [data,setData] = useState({});
    const navigate = useNavigate();
    const apiUrl = "http://localhost:4000/vehicle/detailvehicle/"+useParams().vehicleTittle;
    useEffect(()=>{
        fetch(apiUrl).then((res)=>{
            return res.json();
        }).then((res)=>{
            setData(res);
        })
    },[]);

    const [details,setDetails] = useState({});
    function addToObj(e){

      setDetails({...details,[e.target.name]:e.target.value})
      console.log(details);

   }
   const [userInformation,setUserinformation] = useState({});
    const [login,setLogin] = useState(false)
  useEffect(()=>{
    fetch("http://localhost:4000/home",{credentials:'include'})
        .then((res)=>{
            if(res.status!==401){
                setLogin(true)
                return res.json();
            }
        })
 },[]);



 useEffect(()=>{
  fetch("http://localhost:4000/home",{credentials:'include'})
      .then((res)=>{
        if(res.status!==401){
          return( res.json());
      }
      }).then((res)=>{
        console.log(res);
        setUserinformation(res);
      })
},[])
    return(data &&<>
    {/* <div className="maindiv d-flex flex-row mb-3">
        <img className="" src={data.vimage1} width={650}/>
        <img className="" src={data.vimage2} width={650}/>
        <img src={data.vimage3} width={650}/>
    </div> */}

    
<section id="listing_img_slider" className="d-flex flex-row mb-3 l">
  <div><img src={data.vimage1} class="img-responsive" alt="image" width="600" height="500"/></div>
  <div><img src={data.vimage2} class="img-responsive" alt="image" width="600" height="500"/></div>
  <div><img src={data.vimage3} class="img-responsive" alt="image" width="600" height="500"/></div>
 </section>

<section class="listing-detail">
  <div class="container">
    <div class="listing_detail_head row">
      <div class="col-md-9">
        <h2>{data.vehicleBrand} ,{data.vehicleTittle}</h2>
      </div>
      <div class="col-md-3">
        <div class="price_info">
          <p>Rs{data.pricePerDay} </p>Per Day

        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-9">
        <div class="main_features">
          <ul>

            <li> <i class="fa fa-calendar" aria-hidden="true"></i>
              <h5>{data.modelYear}</h5>
              <p>Reg.Year</p>
            </li>
            <li> <i class="fa fa-cogs" aria-hidden="true"></i>
              <h5>{data.fuelType}</h5>
              <p>Fuel Type</p>
            </li>

            <li> <i class="fa fa-user-plus" aria-hidden="true"></i>
              <h5>2</h5>
              <p>Seats</p>
            </li>
          </ul>
        </div>
        <div class="listing_more_info">
          <div class="listing_detail_wrap">
      
            <ul class="nav nav-tabs gray-bg" role="tablist">
              <li role="presentation" class=""><a href="#vehicle-overview " aria-controls="vehicle-overview" role="tab" data-toggle="tab">Vehicle Overview </a></li>

              </ul>

         
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane active" id="vehicle-overview">

                <p>{data.vehicleOverview}</p>
              </div>
              <div role="tabpanel" class="tab-pane" id="accessories">
                <table>
                  
                  <tbody>



                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </div>

      </div>

   
      <aside class="col-md-3">

        <div class="share_vehicle">
          <p>Share: <a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a> <a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a> <a href="#"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a> <a href="#"><i class="fa fa-google-plus-square" aria-hidden="true"></i></a> </p>
        </div>
        <div class="sidebar_widget">
          <div class="widget_heading">
            <h5><i class="fa fa-envelope" aria-hidden="true"></i>Book Now</h5>
          </div>
          <form >
            <div class="form-group">
                from
              <input type="date" class="form-control" name="fromDate" placeholder="" min={currentDate}  onChange={(e)=>addToObj(e)} required/>
            </div>
            <div class="form-group">
                to
              <input type="date" class="form-control" name="toDate" placeholder="" onChange={(e)=>addToObj(e)} min={details.fromDate} required/>
            </div>
            <div class="form-group">
              <textarea rows="4" class="form-control" name="message" placeholder="Message" onChange={(e)=>addToObj(e)} required></textarea>
            </div>
         
             {login && <div class="form-group">
                <input type="submit" class="btn"  name="submit" onClick={(e)=>{
                  e.preventDefault()
                  // console.log(details);
                  details.emailId=userInformation.emailId;
                  details.vehicleId = data._id;
                  details.status = Number("1");
                  fetch( "http://localhost:4000/booking/add",{method:"POST",headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(details)})
                    .then((res)=>{
                       
                    }).then(()=>{
                      swal({
                        title: "Good job!",
                        text: "Booking SuccessFully Wait For Approval!",
                        icon: "success",
                        button: "Aww yiss!",
                      });
                    }).catch((res)=>{
                      console.log(res);
                    })

                }} value="Book Now"/>
              </div>}
              {!login && <div class="form-group">
                <input type="button" class="btn" onClick={()=>{
                    navigate("/login")
                }} value="Login For Book"/>
              </div>}
              
{/* <a href="#loginform" class="btn btn-xs uppercase" data-toggle="modal" data-dismiss="modal">Login For Book</a> */}

          </form>
        </div>
      </aside>
    </div>

    </div>
    </section>
    </>
    );

}
export default DetailVehicle;