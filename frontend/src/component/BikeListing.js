import { useEffect, useState } from "react";
import './bike.css'
import { Link } from "react-router-dom";
function BikeListing() {
    const [data, setData] = useState([]);
    const apiUrl = "http://localhost:4000/vehicle/";
    useEffect(() => {
        fetch(apiUrl).
            then((res) => {
                return res.json();
            }).then((res) => {
                console.log(res);
                setData(res);
            }).then((res) => {
            })
    }, []);
    const formatted = data.map((item) => {
        return (
            <>
                <div className="container">
                <div class="product-listing-m gray-bg">
                    <div class="product-listing-img"><img src={item.vimage1} class="img-responsive"  height={250} width={500}/>
                </div>
                <div class="product-listing-content">
                    <h5><Link to="#">{item.vehicleBrand} , {item.vehicleTittle}</Link></h5>
                    <p class="list-price">Rs {item.pricePerDay} Per Day</p>
                    <ul>
                        <li><i class="fa fa-user" aria-hidden="true"></i>2 seats</li>
                        <li><i class="fa fa-calendar" aria-hidden="true"></i>{item.modelYear} model</li>
                        <li><i class="fa fa-motorcycle" aria-hidden="true"></i>{item.fuelType}</li>
                    </ul>
                    <Link to={"/detail/"+item._id} class="btn " role="button">View Details <span class="angle_arrow"><i class="fa fa-angle-right" aria-hidden="true"></i></span></Link>
                </div>
            </div >
                </div>
            </>
        );
    })
return (
    <>
        {data && formatted}
    </>
);
}
export default BikeListing;