import { useEffect, useState } from "react";
import swal from 'sweetalert';


function Changepass() {
    const [data, setData] = useState({});
    function addToObj(e) {
        setData({ ...data, [e.target.name]: e.target.value })
        
    }

    const [admininfo, setAdmininfo] = useState([{}]);
    useEffect(() => {
        fetch("http://localhost:4000/admin").then((res) => res.json()).then((res) => { setAdmininfo(res);}).then(()=>{
            
        });
    }, [data])
    return (
        admininfo&&

        <>
            <div className="container p-5">
                <div className="border border-2 p-5">
                    <h1 className="mb-5">Change Password</h1>
                    <label for="oldpass" class=" form-label">Old Password</label>
                    <input type="text" id="oldpass" name="oldpass" onChange={(e) => addToObj(e)} class="form-control mb-5" aria-describedby="passwordHelpBlock" />

                    <label for="newpass" class="form-label">New Password</label>
                    <input type="text" id="newpass" name="newpass1" onChange={(e) => addToObj(e)} class="form-control mb-5" aria-describedby="passwordHelpBlock" />

                    <label for="cfmpass" class="form-label">Confirm Password</label>
                    <input type="text" id="cfmpass" name="newpass2" onChange={(e) => addToObj(e)} class="form-control mb-5" aria-describedby="passwordHelpBlock" />

                    <div className="btn btn-success " onClick={() => {

                        if (data.newpass1 != data.newpass2) {
                            swal("Error!", "Password not Match", "error");
                        }
                        else if(data.oldpass !=admininfo[0].passWord){
                            swal("Error!", "Old PassWord incorrect", "error");
                        }
                        else if(data.oldpass ==admininfo[0].passWord){
                            fetch("http://localhost:4000/admin/changepassword" ,{ method:"PUT",
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body:JSON.stringify(data)})
                            swal("Good job!", "Password Change SuccessFully....", "success");
                        }
                        else {
                            swal("Good job!", "You clicked the button!", "success");
                        }
                    }}>
                        Save Changes
                    </div>
                </div>
            </div>
        </>
    );
}
export default Changepass;