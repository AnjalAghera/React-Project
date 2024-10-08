import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from 'sweetalert';
function Addvehicle() {
    const [data, setData] = useState({});
    const id = useParams().id;
    function addToObj(e) {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const [brand, setBrand] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/brand").then((res) => res.json()).then((res) => setBrand(res))

    }, [])
    const brands = brand.map((item) => {
        return (<option value={item.brandName}>{item.brandName}</option>)
    })


    useEffect(()=>{
        if (typeof (id) != 'undefined') {
            fetch("http://localhost:4000/vehicle/detailvehicle/" + id).then((res) => {
                return res.json();
            }).then((res) =>{ setData(res); console.log(res);})
    
        }
    },[])
    return (<>

        <div className="container p-5">
            <div className="border border-2 p-5">
               {!id && <h1 className="mb-5">Add Vehicle</h1>}
                {id && <h1 className="mb-5">Edit Brand</h1>}
                <form>
                    <label for="tittle" class=" form-label">Enter Vehicle Tittle</label>
                    <input type="text" className="form-control " id="tittle" name="vehicleTittle" value={data && data.vehicleTittle} onChange={(e) => addToObj(e)} class="form-control mb-5" required />

                    <label for="brand" class=" form-label me-5">Choose Brand</label>
                    <select className="mb-5" name="vehicleBrand" onChange={(e)=>addToObj(e)}>
                        {brands}
                    </select>
                    <br />

                    <label for="vehicleOverview" class=" form-label ">Enter vehicleOverview</label>
                    <input type="text" className="form-control " id="vehicleOverview" name="vehicleOverview" value={data && data.vehicleOverview} onChange={(e) => addToObj(e)} class="form-control mb-5" required />

                    <label for="pricePerDay" class=" form-label">Enter pricePerDay</label>
                    <input type="number" className="form-control " id="pricePerDay" name="pricePerDay" value={data && data.pricePerDay} onChange={(e) => addToObj(e)} class="form-control mb-5" required />

                    <label for="fuelType" class=" form-label me-5">Choose fuelType</label>
                    <select name="fuelType" onChange={(e)=>addToObj(e)}>
                        <option value="Petrol">Petrol</option>
                        <option value="Disel">Disel</option>
                    </select>
                    <br/>
                    <label for="modelYear" class=" form-label mt-5">Enter modelYear</label>
                    <input type="number" className="form-control " id="modelYear" name="modelYear" value={data && data.modelYear} onChange={(e) => addToObj(e)} class="form-control mb-5" required />

                    <label for="vimage1" class=" form-label">Enter Vehicle Image 1</label>
                    <input type="text" className="form-control " id="vimage1" name="vimage1" value={data &&data.vimage1} onChange={(e) => addToObj(e)} class="form-control mb-5" required />

                    <label for="vimage2" class=" form-label">Enter Vehicle Image 2</label>
                    <input type="text" className="form-control " id="vimage2" name="vimage2" value={data && data.vimage2} onChange={(e) => addToObj(e)} class="form-control mb-5" required />

                    <label for="vimage3" class=" form-label">Enter Vehicle Image 3</label>
                    <input type="text" className="form-control " id="vimage3" name="vimage3" value={data && data.vimage3} onChange={(e) => addToObj(e)} class="form-control mb-5" required />

                    {!id &&
                        <div className="btn btn-success " type="submit" onClick={() => {
                            if (data.vehicleTittle != "" && typeof (data.vehicleTittle) != "undefined") {
                                fetch("http://localhost:4000/vehicle/add", {
                                    method: "POST", headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(data)
                                }).then(() => {
                                    setData({});
                                    swal("Good job!", " Vehicle Added Successfully", "success");
                                })
                            } else {
                                swal("Error!", " Please Enter Brand Name", "warning");

                            }
                        }}>
                            Add Vehicle
                        </div>}
                    {id && <div className="btn btn-success " type="submit" onClick={() => {
                        if (data.vehicleTittle != "" && typeof (data.vehicleTittle) != "undefined") {
                            fetch("http://localhost:4000/vehicle/edit/" + id, {
                                method: "PUT", headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(data)
                            }).then(() => {
                                setData({ });
                                swal("Good job!", " Vehicle Change Successfully", "success");
                            })
                        } else {
                            swal("Error!", " Please Enter Vehicle Tittle Name", "warning");

                        }
                    }}>
                        Save Changes
                    </div>}
                </form>
            </div>
        </div>
    </>);
}
export default Addvehicle;