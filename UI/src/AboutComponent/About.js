import './About.css';
import axios from 'axios';

function About() { 
   const test=()=>{
    axios.get("http://localhost:3001/user/").then((result)=>{
    console.log(result);
    })
   }
  return( <div>
      {/* Content Start */}
  <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
          <div class="row g-5">
              <div class="col-lg-12">
                  <div class="section-title position-relative pb-3 mb-5">
                      <h5 class="fw-bold text-primary text-uppercase">About Us</h5>
                      <h1 class="mb-0">Welcome to Tenders, About Page</h1>
                      <h2>API Test</h2>
                      <button onClick={test} >Click here to make API work</button>
                  </div>
                 
              </div>
          </div>
      </div>
     {/* Content End */}
  </div>
  </div>);
    
}; 

export default About;
