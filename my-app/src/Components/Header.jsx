import React from 'react'
 import "../styling/Header.css";
 import { Link } from 'react-router-dom'; 

const Header = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
    </nav>
  )
}

export default Header;