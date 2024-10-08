import { useEffect, useState } from "react";
import "./LoginStyle.css";
import { useNavigate } from "react-router-dom";

function Adminlogin(){
    const navigate = useNavigate()
    const [data,setData] = useState({});
    const apiUrl = "http://localhost:4000/admin/login"
    
    function addToObj(e){
        setData({...data,[e.target.name]:e.target.value})
        console.log(data);
     }
    //  const [final,setFinal]= useState({});
    //  useEffect(()=>{
    //     fetch(apiUrl).then((res)=>{return res.json()}).then((res)=>{
    //         setFinal(res);
    //     })
    //  },[]);
     

    return(
        <>
        <div class="loginBox"> <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" />
    <h3>Admin Login</h3>
    <form  method="post">
        <div class="inputBox"> <input id="email" type="text" name="userName" placeholder="UserName"  onChange={(e)=>addToObj(e)}/> 
        <input id="pass" type="password" name="passWord" placeholder="Password"  onChange={(e)=>addToObj(e)}/> </div> 
        <input type="submit" name="Login" value="Login" onClick={(e)=>{
            e.preventDefault()
             fetch(apiUrl,{method:"POST",credentials:'include',headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)})
                .then((res)=>{
                    if(res.status===401){
                        console.log("incorrect");
                        alert("Login Fail");
                    }
                    else{
                        navigate('/admin/dashboard') //admin side
                    }
                });
        }}/>
    </form>
   
</div>
        </>
    );
}
export default Adminlogin;