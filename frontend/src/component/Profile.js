import { useEffect, useState } from "react";
// import "./profile.css";
import swal from 'sweetalert';

function Profile() {
    const [data,setData]=useState({});
    useEffect(()=>{
      fetch("http://localhost:4000/home",{credentials:'include'})
          .then((res)=>{
              if(res.status!==401){
                  return res.json()
              }
          }).then((res)=>setData(res))
   },[])

   const [info,setInfo] =useState({});
   function addToObj(e){
    setData({...data,[e.target.name]:e.target.value})
 }
    return (data && <>
        <div className="container ">
            <div className="row ">
                <div className="col m-5">
                    <h1 className="text-center"> My Profile</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label for="fullName" class="form-label">FullName</label>
                    <input type="text" id="fullName" class="form-control"  name="fullName" onChange={(e)=>addToObj(e)}  value={data.fullName}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label for="emailId" class="form-label">EmailId</label>
                    <input type="text" id="emailId" class="form-control" name="emailId"  value={data.emailId}  disabled />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label for="contactNo" class="form-label">contactNo</label>
                    <input type="text" id="contactNo" class="form-control" onChange={(e)=>addToObj(e)} value={data.contactNo?data.contactNo:""} name="contactNo"  />
                </div>
            </div>
            <div className="row">
                <div className="col text-center m-5">
                    <button className="btn-outline-success" onClick={(e)=>{
                        e.preventDefault()
                        fetch("http://localhost:4000/user/edit",{method:"PUT",headers: {
                            'Content-Type': 'application/json'
                        },
                        body:JSON.stringify(data)})
                            .then((res)=>{
                               
                            }).then((res)=>{
                                swal({
                                    title: "Good job!",
                                    text: "Profile Updated!!",
                                    icon: "success",
                                    button: "Ok",
                                  });
                            })
                    }}> Save Changes</button>
                </div>
            </div>

        </div>
    </>);
}
export default Profile;