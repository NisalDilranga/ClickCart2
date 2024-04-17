
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./section.css";
import React, { useState, useEffect } from "react";
import { useStateContext } from "../../context/useContext";



const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
          display: "block",
          background: "black",
          position : "relative",
          top: "-210px",
          left:"1400px",
          borderRadius:"50%"
          }}
        onClick={onClick}
      />
    );
  };
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style,
           display: "block",
           background: "black",
           position : "relative",
           left:"1370px" ,
           top:"-20px",
           borderRadius:"50%"
          
          }}
        onClick={onClick}
      />
    );
  };
  

const SecondItemSection = () => {

    var settings = {
    
        infinite: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
     
      
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

  return (
    <>

     <div className='main_part'>
        <div className="addv">
          
        </div>
       <div className="slid_2">
       <div className="products_I">
           <div className="sliders">
            <div className="slid">
            <Slider {...settings} className="cart_slider-main" >
              <div>
                <h1>kskks</h1>
              </div>
              <div>
                <h1>kskks</h1>
              </div>
              <div>
                <h1>kskks</h1>
              </div>
              <div>
                <h1>kskks</h1>
              </div>
              <div>
                <h1>kskks</h1>
              </div>
              <div>
                <h1>kskks</h1>
              </div>
            </Slider>
            </div>
           </div>
        </div>
        <div className="products_I">
           <div className="sliders">
            <div className="slid">
            <Slider {...settings} className="cart_slider-main" >
              <div>
                <h1>kskks</h1>
              </div>
              <div>
                <h1>kskks</h1>
              </div>
              <div>
                <h1>kskks</h1>
              </div>
              <div>
                <h1>kskks</h1>
              </div>
              <div>
                <h1>kskks</h1>
              </div>
              <div>
                <h1>kskks</h1>
              </div>
            </Slider>
            </div>
           </div>
        </div>
       </div>
     </div>

    </>
  )
}

export default SecondItemSection