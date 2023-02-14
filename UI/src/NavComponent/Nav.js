
import './Nav.css';
import React , { useState , useEffect } from 'react';
import {Link} from 'react-router-dom';

function Nav() {
   
    const [ NavContent , setNavContent ] = useState();

    useEffect(()=>{
         setInterval(()=>{ 
           if(localStorage.getItem("role")=="admin")
           {
            setNavContent(<div>
                {/* Navbar Start */}
              <div class="container-fluid position-relative p-0">
                  <nav class="navbar navbar-expand-lg navbar-dark bg-light px-5 py-3 py-lg-0">
                      <a href="" class="navbar-brand p-0">
                          <h1 class="m-0" style={{"color":"black"}} >TENDERS</h1>
                      </a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                          <span class="fa fa-bars"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarCollapse">
                            <div class="navbar-nav ms-auto py-0">
                              <a class="nav-item nav-link "><Link style={{"color":"black"}} to="/admin">Admin Home</Link></a>
                              <a class="nav-item nav-link "><Link style={{"color":"black"}} to="/manageusers">Manage Users</Link></a>
                              <div class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"style={{"color":"black"}} >Category</a>
                              <div class="dropdown-menu m-0">
                              <a  class="dropdown-item"><Link style={{"color":"black"}} to="/addcategory">Add Category</Link></a>
                              <a class="dropdown-item"><Link style={{"color":"black"}} to="/addsubcategory">Add SubCategory</Link></a>
                              </div>
                            </div>     
                          </div>
                          <a  class="btn btn-primary py-2 px-4 ms-3"><Link style={{"color":"black"}} to="/logout">Logout</Link></a>
                      </div>
                  </nav>
              </div>
                {/* Navbar End */}
          </div>);    
           }
           else if(localStorage.getItem("role")=="user")
           {
            setNavContent(<div>
                {/* Navbar Start */}
              <div class="container-fluid position-relative p-0">
                  <nav class="navbar navbar-expand-lg navbar-dark bg-light px-5 py-3 py-lg-0">
                      <a href="" class="navbar-brand p-0">
                          <h1 class="m-0" style={{"color":"black"}}>TENDERS</h1>
                      </a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                          <span class="fa fa-bars"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarCollapse">
                          <div class="navbar-nav ms-auto py-0">
                              <a class="nav-item nav-link "><Link style={{"color":"black"}} to="/user">User Home</Link></a>
                              <a class="nav-item nav-link "><Link style={{"color":"black"}} to="/searchtenders">Search Tenders</Link></a>
                          </div>
                          <a  class="btn btn-primary py-2 px-4 ms-3"><Link style={{"color":"black"}} to="/logout">Logout</Link></a>
                      </div>
                  </nav>
              </div>
                {/* Navbar End */}
          </div>);    
           }                     
           else
           {
            setNavContent(<div>
                {/* Navbar Start */}
              <div class="container-fluid position-relative p-0">
                  <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                      <a href="" class="navbar-brand p-0">
                          <h1 class="m-0">TENDERS</h1>
                      </a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                          <span class="fa fa-bars"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarCollapse">
                          <div class="navbar-nav ms-auto py-0">
                              <a  class="nav-item nav-link"><Link to="/">Home</Link></a>
                              <a  class="nav-item nav-link"><Link to="/about">About</Link></a>
                              <a  class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                              <a class="nav-item nav-link"><Link to="/service">Service</Link></a>
                              <a class="nav-item nav-link"><Link to="/register">Register</Link></a>    
                          </div>
                          <a  class="btn btn-primary py-2 px-4 ms-3"><Link style={{"color":"white"}} to="/login">Login</Link></a>
                      </div>
                  </nav>
              </div>
                {/* Navbar End */}
          </div>);}
       },2000);  
       },[]);

  return (<div>
    {NavContent}
  </div>);
    
} 

export default Nav;
