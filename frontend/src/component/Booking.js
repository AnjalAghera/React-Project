import { useEffect, useState } from "react";
import { json } from "react-router-dom";

function Booking(){
    const [data,setData]=useState({});
    useEffect(()=>{
      fetch("http://localhost:4000/home",{credentials:'include'})
          .then((res)=>{
              if(res.status!==401){
                  return res.json()
              }
          }).then((res)=>{setData(res);console.log(data);})
   },[])
   const [booking,setBooking] = useState();


    useEffect(()=>{
     fetch("http://localhost:4000/vehicle/userbooking",{method:"POST",headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)})
            .then((res)=>{
               return res.json()
            }).then((res)=>{
                console.log(res);
               setBooking(res);
            })
    },[data])

    const [vdata,setVdata] = useState({});
        // useEffect(()=>{
        //     {booking && fetch("http://localhost:4000/vehicle/detailvehicle/"+booking.vehicleId).then((res)=>{return res.json()}).then((res)=>{
        //         setVdata(res);
        //         console.log(res);
        //     })}
        // },[booking])

        
        // {booking && fetch("http://localhost:4000/vehicle/detailvehicle/"+booking.vehicleId).then((res)=>{return res.json()}).then((res)=>{
        //     setVdata(res);
        //     console.log(res);
        // })}

        // const [cfm,setCfm] = useState(false);
        // if(booking && booking.status==1){
        //     setCfm(true);
        // }
        return( booking&&<>
        <div className="container  ">
            <div className="">
            <div className="row ">
                    <div className="col m-5">
                        <h1 className="text-center"> My Booking</h1>
                    </div>
                </div>
              {
                booking.map((item)=>  <div className="row border">
                <div className="col-3  w-100 h-50"><img className="w-100 h-100" src={item.vimage1}  /></div>
                <div className="col  w-100 h-50 ">
                    <div className="row">
                        <div className="col"><b> Vehicle Tittle : {item && item.vehicleTittle}</b></div>
                    </div>
                    
                    <div className="row">
                        <div className="col"><b> Vehicle Brand :{item && item.vehicleBrand}</b></div>
                    </div>
                    <div className="row mb-2 mt-2">
                        <div className="col"><b> From Date :{item.fromDate}</b></div>
                        <div className="col"><b> To Date :{item.toDate}</b></div>
                    </div>
                    <div className="row">
                        <div className="col"><b>Model Year :{item && item.modelYear}</b></div>
                        { item.status === 2 && <div className="col"> Booking Status :<button className="btn-success" disabled>success</button></div>}
                        { item.status === 1 && <div className="col"> Booking Status :<button className="btn-danger" disabled>cancel</button></div>}
                    </div>
                </div>
            </div>
)
              }
            </div>
        </div>
        </>);
}
export default Booking;