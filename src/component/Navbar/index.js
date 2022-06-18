import React from 'react';
import {Nav , NavLink , NavMenu } from "./NavbarElements";

const Navbar =()=>{
  return(

    <>
    <Nav>
    <NavMenu>
    <NavLink to="/about" activeStyle>
    About
    </NavLink>
<NavLink to="/contact"  activeStyle>
     contact
    </NavLink> 
    <NavLink to="/blogs" activeStyle>
    blogs
    </NavLink>
    <NavLink to="/subscribe" activestyle>
    subscribe
    </NavLink>
</NavMenu>
</Nav>
</>
  );
};

export default Navbar;



