import './Viewsubcat.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiURLCategory,_apiURLSubCategory} from '../apiURL';
import { Link , useParams } from 'react-router-dom';

    
function Viewsubcat() {
    const params = useParams();
    const [ cDetails , setCategoryDetails ] = useState([]);
    const [ scDetails , setSubCategoryDetails ] = useState([]);

    useEffect(()=>{
    axios.get(_apiURLCategory+"fetch").then((result)=>{
        setCategoryDetails(result.data);
    });
    
    axios.get(_apiURLSubCategory+"fetch").then((result)=>{
        setSubCategoryDetails(result.data);
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
                        <h1 class="mb-0">SubCategory --- <span> {params.catname}</span></h1>
<center>
<div id="subcat_main">
    
    {   
    scDetails.map(
        row => { 
        const subcatimagepath ="/assets/uploads/subcaticons/"+row.subcaticonnm;
        //const catnamepath ="/viewsubcat/"+row.catnm;
        return(
        //<Link to={catnamepath}>    
        <div class="subcat_part">
        <img src={subcatimagepath} height="110" width="150" alt="loading"/>
        <br/>
        <b>{row.subcatnm}</b> 
        </div>
        //</Link>
        )
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
 );
    
} 

export default Viewsubcat;
