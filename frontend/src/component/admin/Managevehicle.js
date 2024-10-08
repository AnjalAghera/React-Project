import { useEffect, useState } from "react";
import { Link, json, useNavigate, useParams } from "react-router-dom";

function Managevehicle() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch("http://localhost:4000/vehicle").then((res) => {
            return res.json()
        }).then((res) => setData(res))

    }, []);
    const formatted = data.map((item, index) => {
        return (<>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.vehicleTittle}</td>
                <td>{item.vehicleBrand}</td>
                <td>{item.pricePerDay}</td>
                <td>{item.fuelType}</td>
                <td>{item.modelYear}</td>
                <span onClick={() => {
                    fetch("http://localhost:4000/vehicle/delete/" + item._id, {
                        method: "DELETE",
                    }).then(() => {
                        window.location.reload(false)
                    })
                }} role="button"><td><i class="fa-solid fa-xmark"></i></td></span>

                <span role="button" onClick={()=>{
                    navigate("../editvehicle/"+item._id)
                }}><i class="fa-solid fa-pen-to-square"></i></span>
            </tr>
        </>);
    })
    return (<>
        <div className="container p-5">
            <div className="border border-2 p-5">
                <h1 className="mb-5">Manage Brand</h1>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Vehicle Tittle</th>
                            <th scope="col">Brand</th>
                            <th scope="col">Price per Day</th>
                            <th scope="col">fuelType</th>
                            <th scope="col">Model Year</th>
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
export default Managevehicle;