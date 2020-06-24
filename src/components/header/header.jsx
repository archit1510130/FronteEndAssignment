import React from "react";
import Button from "../customButton/customerButton";
import "../header/header.scss";
import { Link } from "react-router-dom";




const header = () => {
  return (
      <>
    <div className="header">
        
      <div className="image">
      {/* <Link className="logo-container"></Link> */}

        <div className="headerBar"> 
        
        
         <div className='options'>
         <Link className="option">Blog</Link>
         
         <div class="dropdown">
         <span class="option">More</span>
             <div class="dropdown-content">
            <a href="#">FAQ</a>
            <a href="#">Contact Us</a>
            <a href="#">T&C</a>
            <a href="#">Privacy</a>
        </div>
        </div>
         <Button className="option" lable={"Login/SignUp"} clickhandler={()=>{console.log("ad")}}></Button> 
    
         
         </div>
        </div>
      </div>
     

    </div>
    
    </>
  );
};

export default header;
