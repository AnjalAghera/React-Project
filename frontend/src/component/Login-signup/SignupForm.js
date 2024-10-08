import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm(){
    const apiUrl = "http://localhost:4000/user/add"
    const navigate = useNavigate();
    const [data,setData]=useState({
    });
    useEffect(()=>{
       fetch(apiUrl).
           then((res)=>res.json()).
               then((res)=>{setData(res);});
    },[]);

    function addToObj(e){
       setData({...data,[e.target.name]:e.target.value})
    }
    return(
        <>
            <div class="loginBox"> <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px"/>
    <h3>Sign Up here</h3>
    <form  method="post">
        <div class="inputBox">
        <input id="fnm" type="text" name="fullName" placeholder="FullName" onChange={(e)=>addToObj(e)} required/> 
        <input id="cno" type="text"  name="contactNo" placeholder="Contact no" onChange={(e)=>addToObj(e)} required/> 
        <input id="email" type="text" pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" name="emailId" placeholder="Email Id" onChange={(e)=>addToObj(e)} required/> 
        <input id="pass" type="password" name="passWord" placeholder="Password" onChange={(e)=>addToObj(e)} required/> </div> 
        <input type="submit" name="Sign Up" value="Register" onClick={()=>{
            fetch(apiUrl,{method:"POST",headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)})
                .then((res)=>{
                   
                }).then(()=>{
                    alert("Registration SuccessFull.. Please Login");
                }).then(()=>{
                    navigate(-1);
                });
        }}/>
    </form>
    <a href="#">Forget Password<br/> </a>
    <div class="text-center">
       Do you Have account ?? <a href="../login">Login</a>
    </div>
    </div>
        </>
    );
}
export default SignupForm;