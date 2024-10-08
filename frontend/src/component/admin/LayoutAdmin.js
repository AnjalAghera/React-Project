import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom"
function LayoutAdmin() {
    return (<>
        <div className=" h-100 w-100 row" >
            <div className=" bg-danger h-100 col">
                <Sidebar/>
            </div>
            <div className="col-10">
                <Outlet />
            </div>
        </div>
    </>);
}
export default LayoutAdmin;