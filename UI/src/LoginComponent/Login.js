import './Login.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { _apiURLUser } from '../apiURL';
import { useNavigate } from 'react-router-dom';

function Login() {
    
    const navigate = useNavigate();
    const [ output , setOutput ] = useState();
    const [ email , setEmail ] = useState();
    const [ password , setPassword ] = useState();

    const handleSubmit=(event)=>{
    event.preventDefault();
    var userDetails={"email":email,"password":password};
    axios.post(_apiURLUser+"login",userDetails).then((response)=>{

          //to store user details in local storage
          const responseData=response.data.userDetails;
          localStorage.setItem("token",response.data.token);
          localStorage.setItem("_id",responseData._id);
          localStorage.setItem("name",responseData.name);
          localStorage.setItem("email",responseData.email);
          localStorage.setItem("password",responseData.password);
          localStorage.setItem("mobile",responseData.mobile);
          localStorage.setItem("address",responseData.address);
          localStorage.setItem("city",responseData.city);
          localStorage.setItem("gender",responseData.gender);
          localStorage.setItem("role",responseData.role);
          localStorage.setItem("info",responseData.info);
          
          if(responseData.email!=email || responseData.password!=password )
          {
            navigate("/logout")
          } 
          else{
          responseData.role=="admin"?navigate("/admin"):navigate("/user")
          }
      }).catch((error)=>{
          setOutput("Invalid user or verify your account....");
          setEmail('');
          setPassword('');
        });
    }

  return (<div >
        {/* Content Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-6">
<div class="section-title position-relative pb-3 mb-5">
<h2>Login Here!!!</h2>
<font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" required class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    <br/>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password"required class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
   <br/>
    <button type="submit" class="btn btn-dark">Login</button>
  </form>
 </div>   
 </div>          
<div class="col-lg-6">           
<h2>Information : </h2><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis velit ex temporibus cumque eum corrupti porro, perspiciatis consequuntur facilis optio nulla deserunt dolores minima quos rem officiis? Quam molestias qui sit voluptate expedita dolorem aperiam quibusdam facilis consectetur amet veniam dolore impedit error similique, ex repudiandae adipisci quidem quas, pariatur dicta. Accusamus, qui veniam sequi laborum molestias dolor iure. Maxime nisi nobis omnis eius dolores, aut accusantium quaerat aliquam, non eaque ratione, quae libero? Doloremque, magni commodi expedita odio illo ducimus animi quia placeat quidem! .</p> 
</div>
      </div>
     </div>
    {/* Content End */}
  </div>
</div>
);} 

export default Login;
