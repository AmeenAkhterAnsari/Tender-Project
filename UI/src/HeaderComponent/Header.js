import './Header.css';
import React , { useState , useEffect } from 'react';
import Authentication from '../AuthenticationComponent/Authentication';

function Header() {

    const [ HeaderContent , setHeaderContent ] = useState();                      
    
        useEffect(()=>{
        setInterval(()=>{   
        if(localStorage.getItem("role")=="admin")
        {
         setHeaderContent(<div>
         {/* Topbar Start */}
         <div class="container-fluid bg-dark px-5 d-none d-lg-block">
         <div class="row gx-0">
                 <div class="col-lg-12 ">
                   <div class="d-inline-flex align-items-center" style={{"height": "45px"}}>
                         <h6 class="me-3 text-light">WELCOME ADMIN</h6>
                         <h6 class="me-3 text-light">{localStorage.getItem("email")}</h6>
                     </div>
                </div>
          </div>
         </div>
         {/* Topbar End */}
         </div>);    
          }
          else if(localStorage.getItem("role")=="user")
          {
           setHeaderContent(<div>
            
           {/* Topbar Start */}
            <div class="container-fluid bg-dark px-5 d-none d-lg-block">
               <div class="row gx-0">
                  <div class="col-lg-12 ">
                     <div class="d-inline-flex align-items-center" style={{"height": "45px"}}>
                        <h6 class="me-3 text-light">WELCOME USER</h6>
                        <h6 class="me-3 text-light">{localStorage.getItem("email")}</h6>
                     </div>
                  </div>
               </div> 
            </div>
            {/* Topbar End */}
        
            </div>);    
          }                     
          else
          {
           setHeaderContent(<div>
            
            {/* Topbar Start */}
         <div class="container-fluid bg-dark px-5 d-none d-lg-block">
             <div class="row gx-0">
                 <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                     <div class="d-inline-flex align-items-center" style={{"height": "45px"}}>
                         <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>X Street, Indore, India</small>
                         <small class="me-3 text-light"><i class="fa fa-phone-alt me-2"></i>XXX XXX XXXX</small>
                         <small class="text-light"><i class="fa fa-envelope-open me-2"></i>tenders@gmail.com</small>
                     </div>
                 </div>
                 <div class="col-lg-4 text-center text-lg-end">
                     <div class="d-inline-flex align-items-center" style={{"height": "45px"}}>
                         <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-twitter fw-normal"></i></a>
                         <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                         <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                         <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-instagram fw-normal"></i></a>
                         <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i class="fab fa-youtube fw-normal"></i></a>
                     </div>
                 </div>
             </div>
         </div>
         {/* Topbar End */}
     </div>);}
      },2000);
      },[]);
return (<div>
    <Authentication/>    
    {HeaderContent}
  </div>);
} 
export default Header;
