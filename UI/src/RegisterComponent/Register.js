import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { _apiURLUser } from '../apiURL';

function Register() {

  const [ output , setOutput ] = useState();
  const [ name , setName ] = useState();     
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ mobile , setMobile ] = useState();
  const [ address , setAddress ] = useState();
  const [ city , setCity ] = useState();
  const [ gender , setGender ] = useState();

  const handleSubmit=(event)=>{
    event.preventDefault();
    var userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
    axios.post(_apiURLUser+"save",userDetails).then((result)=>{
        console.log(result);
        if(result.data.status)
         setOutput("User register successfully");
        else
         setOutput("User registration failed"); 
        setName('');
        setEmail('');
        setPassword('');
        setAddress('');
        setCity('');
        setMobile('');
        setGender('');
    });
  } 

  return(<div>
    {/* content Start */}
    <div class="container-fluid py-6 px-5">
        <div class="row g-5">
<div class="col-lg-12">
&nbsp;&nbsp;
<h2>Register Here!!!</h2>
<font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control" value={name} onChange={e => setName(e.target.value)}  />
    </div>
    <div class="form-group">
      <label for="email">Email address:</label>
      <input type="email" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="mobile">Mobile:</label>
      <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
    </div>
    <div class="form-group">
      <label for="address">Address:</label>
      <textarea rows="5" class="form-control" value={address} onChange={e => setAddress(e.target.value)}></textarea>
    </div>
    <div class="form-group">
      <label for="city">City:</label>
      <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
      <option>Select City</option>
      <option>Indore</option>
      <option>Ujjain</option>
      <option>Bhopal</option>
      <option>Kota</option>    
      </select>
    </div>
    <div class="form-group">
      <label for="gender">Gender:</label>
      Male <input type="radio" value="male" name="gender"
onChange={e => setGender(e.target.value)} />
      &nbsp;&nbsp;
      Female <input type="radio" value="female" name="gender"
onChange={e => setGender(e.target.value)} />
      &nbsp;&nbsp;
    </div>
    <button type="submit" class="btn btn-dark">Submit</button>
  </form>

</div>
        </div>
    </div>
    {/* content End */}
    </div>);
}

export default Register;
