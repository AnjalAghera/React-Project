import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage(){
    const navigate = useNavigate()
    
    

    return(<>
    <img className='w-100 h-100 ' src={require('../img/front-image.jpg')} />
    <section class="highlights py-5">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-3">
                    <div class="highlight-item">
                        <div class="icon"><i class="fa-solid fa-calendar"></i></div>
                        <h3>40+</h3>
                        <p>Years In Business</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="highlight-item">
                        <div class="icon"><i class="fa-solid fa-motorcycle"></i></div>
                        <h3>1000+</h3>
                        <p>New Bikes For Sale</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="highlight-item">
                        <div class="icon"><i class="fa-solid fa-motorcycle"></i></div>
                        <h3>999+</h3>
                        <p>Used Bikes For Sale</p>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="highlight-item">
                        <div class="icon"><i class="fa-solid fa-user"></i></div>
                        <h3>850+</h3>
                        <p>Satisfied Customers</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>);
}
export default HomePage;