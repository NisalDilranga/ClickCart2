import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./items.css";
import { FaPlusCircle } from "react-icons/fa";
import { useStateContext } from "../../context/useContext";
// Import useCart hook

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        position: "relative",
        top: "-310px",
        left: "1400px",
        borderRadius: "50%",
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
      style={{
        ...style,
        display: "block",
        background: "black",
        position: "relative",
        left: "1370px",
        top: "10px",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const Top_Item_Card = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { onAdd } = useStateContext();

  useEffect(() => {
    fetch("http://localhost:3000/api/products/")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  var settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="cat_cart">
      <div className="card2">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Slider {...settings} className="cart_slider-main">
            {products.map((product) => (
              <div key={product._id}>
                <div className="card">
                  <img src={product.images} />
                  <h3>{product.name}</h3>
                  <p>Price : ${product.price}</p>
                 
                  <button
                    onClick={() => {
                      onAdd(product, 1);
                    }}
                    style={{width:'140px',borderRadius:'10px',backgroundColor:'black',color:'white' , marginBottom:'10px'}}
                  >
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Top_Item_Card;
