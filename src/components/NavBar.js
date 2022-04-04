import React from "react";
import logo from '../Image/logo.jpeg'
import './navbar.css'

const Navbar = () => {
    return (
        <>
           <nav className="nav">
            <navLogo className='navlogo'>
            <img width="150px" height="auto" className="img-responsive" src={logo}  alt="logo" />
            </navLogo>

            <navMenu>
               
                <form className="d-flex">
        <input
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <button variant="outline-success">Search</button>
      </form>
            </navMenu> 
           </nav> 
        </>
    );
};
export default Navbar;