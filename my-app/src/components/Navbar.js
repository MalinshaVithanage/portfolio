import { Link } from "react-router-dom"
import "./NavbarStyles.css"
import {FaBars, FaTimes} from "react-icons/fa";
import React, { useState } from 'react'

const Navbar = () => {
    const[click, setClick] = useState(false);
    //eslint-disable-next-line
    const handleClick = () => setClick(!click);
  return (
    <div className="header">
      <Link to={"/"}>
        <h1>Portfolio</h1>
      </Link>
      <ul className={click? "nav-menu active" : "nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
            <FaTimes size={20} style={{color:"#fff"}}/>
        
        ):(
            <FaBars size={20} style={{color:"#fff"}}/>
        )}
      </div>
    </div>
  );
}

export default Navbar
