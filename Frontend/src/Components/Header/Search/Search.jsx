import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import { FaChartColumn } from "react-icons/fa6";


const Search = () => {
  return (
    <>
   <nav>
    <div className="nav_bar">
      
      <Dropdown className="dropdwn_menu">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <FaChartColumn className='dp'/>
        Brows All Categorys
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to='/'><Dropdown.Item href="/">vegetables</Dropdown.Item></Link>
        <Dropdown.Item href="#/action-2">Fruits</Dropdown.Item>
        <Dropdown.Item href="#/action-3">chemicals</Dropdown.Item>
        <Dropdown.Item href="#/action-4">grocery</Dropdown.Item>
        <Dropdown.Item href="#/action-5">construction items</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <div className="menu_list">
       <Link to='/' >Home</Link>
       <Link>Contact</Link>
       <Link to='/about'>About</Link>
    </div>
    </div>
   </nav>
   
    </>
  )
}

export default Search