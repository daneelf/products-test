import React from "react";
import "./NavBarMenu.scss";
import Navbar from 'react-bootstrap/Navbar';

const NavBarMenu = ({ children }) => {
  return (
<Navbar bg="light" >
  <Navbar.Collapse className="navbar__menu">
    {children}
  </Navbar.Collapse>
</Navbar>
  );
};

export default NavBarMenu;
