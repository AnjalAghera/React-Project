import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Managebooking() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:4000/booking").then((res) => {
            return res.json()
        }).then((res) => setData(res))

    }, []);

    const [vdata,setVdata] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/vehicle").then((res) => {
            return res.json()
        }).then((res) => setVdata(res))

    }, []);

    const formatted = data.map((item, index) => {
        return (<>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.emailId}</td>
                <td>{item.vehicleTittle}</td>
                <td>{item.fromDate}</td>
                <td>{item.toDate}</td>
                <td>{item.message}</td>
                {item.status ===2 &&<td>Confirmed</td>}
                {item.status ===1 &&<td>Cancle</td>}
                <td>{item.postingDate}</td>
                <span onClick={() => {
                    fetch("http://localhost:4000/booking/"+item._id,{method: "PUT", headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({status:2})
                    })
                        window.location.reload(false);
                }} role="button"><td><i class="fa-solid fa-check"></i></td></span>

                <span role="button" onClick={()=>{
                    
                    fetch("http://localhost:4000/booking/"+item._id,{method: "PUT", headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({status:1})
                    })
                    window.location.reload(false);

                }}><i class="fa-solid fa-xmark"></i></span>
            </tr>
        </>);
    })
    return (<>
        <div className="container p-5">
            <div className="border border-2 p-5">
                <h1 className="mb-5">Manage Booking</h1>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Vehicle</th>
                            <th scope="col">From Date</th>
                            <th scope="col">To Date</th>
                            <th scope="col">Message</th>
                            <th scope="col">Status</th>
                            <th scope="col">PostingDate</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formatted}
                    </tbody>
                </table>
            </div>
        </div>
    </>);
}
export default Managebooking;