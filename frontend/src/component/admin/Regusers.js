import { useEffect, useState } from "react";

function Regusers() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/user").then((res) => res.json()).then((res) => setData(res))
    }, [])


    const formatted = data.map((item, index) => {
        return (<>
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{item.fullName}</td>
                <td>{item.emailId}</td>
                <td>{item.contactNo}</td>
                <td>{item.regDate}</td>
                <td>{item.updationDate}</td>
            </tr>
            </>)
        });
    return (<>
        <div className="container p-5">
            <div className="border border-2 p-5">
                <h1 className="mb-5">Users</h1>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">fullName</th>
                            <th scope="col">emailId</th>
                            <th scope="col">contactNo</th>
                            <th scope="col">regDate</th>
                            <th scope="col">updationDate</th>
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
export default Regusers;