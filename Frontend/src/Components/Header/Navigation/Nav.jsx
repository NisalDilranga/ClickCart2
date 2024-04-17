import { FaUserAlt, FaShoppingCart, FaSearch, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import CartContext from "../../CartContext/CartContext";
import { useStateContext } from "../../../context/useContext";

function isAuthenticated() {
  // return !!localStorage.getItem('token');
  return !!Cookies.get("token");
}

const Nav = () => {
  const navigate = useNavigate();
  const { totalQuantities } = useStateContext();

  const handleUserIconClick = () => {
    if (isAuthenticated()) {
      navigate("/Profile"); // Update this to your user profile route
    } else {
      navigate("/login");
    }
  };
  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   navigate('/login');
  // };
  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/login");
  };

  return (
    <>
      <header>
        <div className="search_navbar">
          <div className="logo">
            <h1>ClickCart</h1>
          </div>
          <div className="search">
            <input type="search" placeholder="  Search . . ."></input>
            <FaSearch className="icons" />
          </div>
          <div className="icon">
            {/* <div className="icon_l">
              <FaHome className="i" />
            </div> */}
            <Link to="/" className="icon_l">
              <FaHome className="i" />
            </Link>
            {/* <div className="icon_l">
              <FaUserAlt className="i" />
            </div> */}
            {/* <Link to='/login' className="icon_l" >
            <FaUserAlt className="i" />
            </Link> */}
            <div onClick={handleUserIconClick} className="icon_l">
              <FaUserAlt className="i" />
            </div>
            {/* <div onClick={handleLogout} className="icon_l">
              <FaUserAlt className="i" />
            </div> */}

            <Link
              to="/cart"
              className="icon_l"
              style={{ textDecoration: "none" }}
            >
              <FaShoppingCart className="i" />
              <span>{totalQuantities}</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
