import './Searchtenders.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiURLCategory} from '../apiURL';
import {Link} from 'react-router-dom';

    function Searchtenders() {
    
    const [ cDetails , setCategoryDetails ] = useState([]);
    useEffect(()=>{
    axios.get(_apiURLCategory+"fetch").then((result)=>{
    setCategoryDetails(result.data);
    });   
    },[]);

    
    return (<div> 
     {/* Content Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="section-title position-relative pb-3 mb-5">
                        &nbsp;&nbsp;
                        <h1 class="mb-0">Category List</h1>
<center>
<div id="tenders_main">
    
    {   
    cDetails.map(
        row => {
        const catimagepath ="/assets/uploads/caticons/"+row.caticonnm;
        const catnamepath ="/viewsubcat/"+row.catnm;
        return(
        <Link to={catnamepath}>    
        <div class="tenders_part">
        <img src={catimagepath} height="110" width="150" alt="loading"/>
        <br/>
        <b>{row.catnm}</b> 
        </div></Link>)
        })  
    }
    
</div>
</center>
</div>
</div>
</div>
</div>
 {/* Content End */}
 </div>
</div>
);} 

export default Searchtenders;
