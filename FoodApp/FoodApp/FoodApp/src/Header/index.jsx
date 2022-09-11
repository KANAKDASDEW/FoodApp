import React from "react";
import image from "../image/res-logo.png";
import "./header.css"
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Header = () => {
  const isActive = {
    fontWeight: "bold",

    backgroundColor: "#64ffda",
  };         
  return (
    <>
      <Navbar collapseOnSelect expand="md" variant="dark" className="nav-conatiner">
        <Navbar.Brand as={Link} to="/">
          <div className="img-container">
            <img  className="w-50" src={image} alt="" srcset="" />
          </div>
        </Navbar.Brand>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ml-auto ">
            <Nav.Link className="ho" activeStyle={isActive} as={NavLink} to="/home">
              Home
            </Nav.Link>
            <Nav.Link  className="ho" activeStyle={isActive} as={NavLink} to="/Food">
              Food
            </Nav.Link>
            <Nav.Link  className="ho" activeStyle={isActive} as={NavLink} to="/cart">
              Cart
            </Nav.Link>
            <Nav.Link  className="ho" activeStyle={isActive} as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
    </>
  );
};

export default Header;