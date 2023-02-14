import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './HeaderComponent/Header';
import Nav from './NavComponent/Nav';
import Banner from './BannerComponent/Banner';
import Main from './MainComponent/Main';
import About from './AboutComponent/About';
import Contact from './ContactComponent/Contact';
import Service from './ServiceComponent/Service';
import Register from './RegisterComponent/Register';
import Login from './LoginComponent/Login'; 
import Footer from './FooterComponent/Footer';
import Adminhome from './AdminhomeComponent/Adminhome';
import Manageusers from './ManageusersComponent/Manageusers';
import Addcategory from './AddcategoryComponent/Addcategory';
import Addsubcategory from './AddsubcategoryComponent/Addsubcategory';
import Viewsubcat from './ViewsubcatComponent/Viewsubcat';
import Userhome from './UserhomeComponent/Userhome';
import Searchtenders from './SearchtendersComponent/Searchtenders';
import Logout from './LogoutComponent/Logout';

function App() {
  return (<div>
   
    <Header />

    <Nav />
    
    <Banner />

    <Routes>
  <Route path="/" element={<Main />}></Route>
  <Route path="/about" element={<About />}></Route>  
  <Route path="/contact" element={<Contact />}></Route>
  <Route path="/service" element={<Service />}></Route>
  <Route path="register/" element={<Register />}></Route>
  <Route path="/login" element={<Login />}></Route>
  <Route path="/admin" element={<Adminhome />}></Route>
  <Route path="/manageusers" element={<Manageusers />}></Route>
  <Route path="/addcategory" element={<Addcategory />}></Route>
  <Route path="/addsubcategory" element={<Addsubcategory />}></Route>
  <Route path="/viewsubcat/:catname" element={<Viewsubcat />}></Route>
  <Route path="/user" element={<Userhome />}></Route>
  <Route path="/searchtenders" element={<Searchtenders />}></Route>
  <Route path="/logout" element={<Logout />}></Route>
   </Routes>    

    <Footer />

    </div>
  );
} 

export default App;
