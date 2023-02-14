import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Authentication()

   {   
    const navigate= useNavigate();
    useEffect(()=>{
    var path=window.location.pathname;
    /*if(path=="/admin" || path=="/manageusers" || path=="/addcategory" || path=="/addsubcategory")
     {
      if(!localStorage.getItem("token") || localStorage.getItem("role")!="admin")   
        navigate("/logout")
     }
     else if(path=="/user")
     {
      if(!localStorage.getItem("token") || localStorage.getItem("role")!="user")   
        navigate("/logout");
     }
     else
     {
        if(localStorage.getItem("role")=="admin")            
            navigate("/admin");
        else
            navigate("/user");
     }*/
    if(path=="/admin" || path=="/manageusers" || path=="/addcategory" || path=="/addsubcategory" || path=="/user" || path=="/searchtenders" || path=="/viewsubcat")    
     {
      if(!localStorage.getItem('token'))
      navigate('/login')
     }
     if(path=="/" || path=="/about" || path=="/contact" || path=="/service" || path=="/register" || path=="/login" || path=="/admin" || path=="/manageusers" || path=="/addcategory" || path=="/addsubcategory")
      {
        if(localStorage.getItem("role")=="user")
        navigate('/user')
      }
     if(path=="/" || path=="/about" || path=="/contact" || path=="/service" || path=="/register" || path=="/login" ||path=="/user" || path=="/searchtenders" || path=="/viewsubcat" )
      {
        if(localStorage.getItem("role")=="admin")
        navigate('/admin')
      } 
    },[]);
       
    return(
        <div></div>
    )
}

export default Authentication