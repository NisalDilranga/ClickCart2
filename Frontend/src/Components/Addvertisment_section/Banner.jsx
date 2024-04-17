import React from 'react';
import "./Banner_s.css";

const Banner = () => {
  return (
   <>
     <div className="banner_section">
        <div className="banner">
        <img
          className="d-block w-100" style={{height:'300px'}}
          src="1.jpg"
          alt="Second slide"
        />
        </div>
        <div className="banner">
        <img
          className="d-block w-100" style={{height:'300px'}}
          src="6.gif"
          alt="Second slide"
        />
        </div>
        <div className="banner">
        <img
          className="d-block w-100" style={{height:'300px'}}
          src="1.jpg"
          alt="Second slide"
        />
        </div>
     </div>
   
   </>
  )
}

export default Banner