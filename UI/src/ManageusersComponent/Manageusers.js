import './Manageusers.css';
import { useEffect , useState } from 'react';
import axios from 'axios';
import { _apiURLUser } from '../apiURL';

  function Manageusers() {

  const [ userDetails , setUserDetails ] = useState([]);
  
  useEffect(()=>{
    axios.get(_apiURLUser+"fetch?role=user").then((result)=>{
    setUserDetails(result.data);
    });
  },[]);
  
  const manageUserStatus=( _id,s)=>{

    var updateDetails;
    if(s=="verify")
    {
     updateDetails={"condition":{"_id":_id},"set":{"status":1}};     
     axios.patch(_apiURLUser+"update",updateDetails).then((result)=>{
        window.location.reload();    
     })
    }
    else if(s=="block")
    {  
      updateDetails={"condition":{"_id":_id},"set":{"status":0}};   
     axios.patch(_apiURLUser+"update",updateDetails).then((result)=>{
        window.location.reload();    
     })
    } 
    else
    {  
     axios.delete(_apiURLUser+"delete/"+_id).then((result)=>{
        window.location.reload();    
     })
    }
  };

  return (<div>
   
     {/* Content Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="section-title position-relative pb-3 mb-5">
                        &nbsp;&nbsp;
                        <h1 class="mb-0">View & Manage Users</h1>
<div class="table-responsive" >                                          
<table class="table bg-dark table-dark table-bordered" cellPadding={10}  >
<tr>
<th>UserID</th>
<th>Name</th>
<th>Email</th>    
<th>Password</th>
<th>Mobile</th>
<th>Address</th>
<th>City</th>
<th>Gender</th>
<th>Info</th>
<th>Status</th>
<th>Action</th>
</tr>

{
    userDetails.map((row) => (
        <tr>
        <td>{row._id}</td>
        <td>{row.name}</td>
        <td>{row.email}</td>
        <td>{row.password}</td>
        <td>{row.mobile}</td>
        <td>{row.address}</td>
        <td>{row.city}</td>
        <td>{row.gender}</td>
        <td>{row.info}</td>
        <td>
    {row.status == 0 &&
        <a style={{"color":"green"}} onClick={()=>{manageUserStatus(row._id,"verify")}} >Verify User</a>
    }
    {row.status == 1 &&
        <a style={{"color":"orange"}} onClick={()=>{manageUserStatus(row._id,"block")}} >Block User</a>
    }
        </td>
    <td><a style={{"color":"red"}} onClick={()=>{manageUserStatus(row._id,"delete")}} >Delete User</a></td>
           
        </tr>
    ))
}
</table> 
</div>                       
                    </div>
                </div>
            </div>
        </div>
       {/* Content End */}
    </div>
</div>    

  );
    
} 

export default Manageusers;
