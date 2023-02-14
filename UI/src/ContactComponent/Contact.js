
import './Contact.css';
import React from 'react';

  function Contact() {
  return (<div>
     {/* Content Start */}
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-6">
                    <div class="section-title position-relative pb-3 mb-5">
                        <h4 class="mb-0">Welcome to Tenders, Contact Page</h4>
                        <div class="table-responsive" >
                        <table class="table table-dark bg-dark table-bordered">
                           <tr>
                           <td>Address</td>
                           <td>X Street, Indore, India</td>
                           </tr>

                           <tr>
                           <td>Mobile</td> 
                           <td>XXX XXX XXXX</td>
                           </tr>
                           
                           <tr>
                           <td>Email</td> 
                           <td>tenders@gmail.com</td>
                           </tr>

                           
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

export default Contact;
