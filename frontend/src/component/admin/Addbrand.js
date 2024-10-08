import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import swal from 'sweetalert';


function Addbrand() {
    const [data, setData] = useState({});
    const id = useParams().id;
    function addToObj(e) {
        console.log(e.target.value);
        setData({ brandName: e.target.value })

    }

    useEffect(()=>{
        if (typeof (id) != 'undefined') {
        fetch("http://localhost:4000/brand/detail/" + id).then((res) => {
            return res.json();
        }).then((res) =>{ setData(res); console.log(res);})

    }
    },[])

    return (<>
        <div className="container p-5">
            <div className="border border-2 p-5">
                {!id && <h1 className="mb-5">Add Brand</h1>}
                {id && <h1 className="mb-5">Edit Brand</h1>}
                <form>
                    <label for="brand" class=" form-label">Enter Brand Name</label>
                    <input type="text" className="form-control " id="brand" name="brandName" value={data.brandName} onChange={(e) => addToObj(e)} class="form-control mb-5" required />

                    {!id &&
                        <div className="btn btn-success " type="submit" onClick={() => {
                            if (data.brandName != "" && typeof (data.brandName) != "undefined") {
                                fetch("http://localhost:4000/brand/add", {
                                    method: "POST", headers: {
                                        'Content-Type': 'application/json'
                                    },
                                    body: JSON.stringify(data)
                                }).then(() => {
                                    setData({ ...data, brandName: "" });
                                    swal("Good job!", " Brand Added Successfully", "success");
                                })
                            } else {
                                swal("Error!", " Please Enter Brand Name", "warning");

                            }
                        }}>
                            Add Brand
                        </div>}
                    {id && <div className="btn btn-success " type="submit" onClick={() => {
                        if (data.brandName != "" && typeof (data.brandName) != "undefined") {
                            fetch("http://localhost:4000/brand/edit/" + id, {
                                method: "PUT", headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(data)
                            }).then(() => {
                                setData({ ...data, brandName: "" });
                                swal("Good job!", " Brand Change Successfully", "success");
                            })
                        } else {
                            swal("Error!", " Please Enter Brand Name", "warning");

                        }
                    }}>
                        Save Changes
                    </div>}
                </form>
            </div>
        </div>
    </>);
}
export default Addbrand;