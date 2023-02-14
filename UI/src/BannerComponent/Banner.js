
import './Banner.css';
import React , { useState , useEffect } from 'react';
import {Link} from 'react-router-dom';

function Banner() {

    const [ BannerContent , setBannerContent ] = useState();

    useEffect(()=>{
        setInterval(()=>{
           if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
           {
            setBannerContent();    
           }                     
           else
           {
            setBannerContent(<div>
      
                {/* Carousel Start */}
                  <div class="container-fluid position-relative p-0">
                  <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
                      <div class="carousel-inner">
                          <div class="carousel-item active">
                              <img class="w-100" src="assets/img/banner01.jpg" alt="Image"/>
                              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                  <div class="p-3" style={{"maxWidth": "900px"}}>
                                      <h5 class="text-white text-uppercase mb-3 animated slideInDown"></h5>
                                      <h1 class="display-1 text-white mb-md-4 animated zoomIn">BID YOUR TENDERS</h1>
                                      <a class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                                      <a class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"><Link to="/contact">Contact Us</Link></a>
                                  </div>
                              </div>
                          </div>
                          <div class="carousel-item">
                              <img class="w-100" src="assets/img/banner02.jpg" alt="Image"/>
                              <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                  <div class="p-3" style={{"maxWidth": "900px"}}>
                                      <h5 class="text-white text-uppercase mb-3 animated slideInDown"></h5>
                                      <h1 class="display-1 text-white mb-md-4 animated zoomIn">BID YOUR TENDERS</h1>
                                      <a class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                                      <a class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"><Link to="/contact">Contact Us</Link></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                          data-bs-slide="prev">
                          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Previous</span>
                      </button>
                      <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                          data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                      </button>
                  </div>
              </div>
              {/* Carousel End */}
          </div>);}
        },2000);  
       },[]);

  return (<div>
      {BannerContent}
      </div>);
   } 
export default Banner;
