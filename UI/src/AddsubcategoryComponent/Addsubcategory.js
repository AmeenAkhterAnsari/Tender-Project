import './Addsubcategory.css';
import { useState , useEffect } from 'react';
import axios from 'axios';
import { _apiURLCategory , _apiURLSubCategory } from '../apiURL';
  function Addsubcategory() {
  
    const [file, setFile] = useState()
    const [catName , setCatName] = useState();
    const [subCatName , setSubCatName] = useState();
    const [output , setOutput] = useState();
    const [ cDetails , setCategoryDetails ] = useState([]);
  
    useEffect(()=>{
      axios.get(_apiURLCategory+"fetch").then((result)=>{
        setCategoryDetails(result.data);
      });   
    },[]);  

    const handleChange=(event)=>{
      setFile(event.target.files[0])
    }
    
    const handleSubmit=(event)=>{
      event.preventDefault();
      var formData = new FormData();
      formData.append('subcatnm', subCatName);
      formData.append('catnm', catName);
      formData.append('caticon', file);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(_apiURLSubCategory+"save", formData, config).then((response) => {
        setCatName("");
        setOutput("SubCategory Added Successfully....");
      });
    }

  return (<div>
   
     {/* Content Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-12">
                    <div class="section-title position-relative pb-3 mb-5">
                        &nbsp;&nbsp;

                        <h2>Add SubCategory!!!</h2>
<font style={{"color":"blue"}}>{output}</font>
<form onSubmit={handleSubmit} >
    <div class="form-group">
      <label for="catnm">Category Name:</label>
      <div class="form-group">
      <select class="form-control" value={catName}
onChange={e => setCatName(e.target.value)} >
      <option>Select Category</option>
      {
        cDetails.map((row)=>(
          <option>{row.catnm}</option>
        ))
      }
      </select>
      </div>
    </div>
    <br/>
    <div class="form-group">
      <label for="subcatnm">Sub Category Name:</label>
      <input class="form-control" type="text" value={subCatName}
onChange={e => setSubCatName(e.target.value)} />
    </div>
    <br/>
    <div class="form-group">
      <label for="caticon">Sub Category Icon:</label>
      <input type="file" onChange={handleChange} />
    </div>
    <br/>
    <button type="submit" class="btn btn-dark">Add Sub Category</button>
  </form>                
                
                    </div>
                </div>
            </div>
        </div>
       {/* Content End */}
    </div>

    </div>
  );
    
} 

export default Addsubcategory
