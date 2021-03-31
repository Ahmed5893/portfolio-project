import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand={"sm"}>
        <NavLink to="/">
          <Navbar.Brand id="Brand">
            Portfo<span>lio</span>
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto py-3 Nav">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink exact to="/about">
              About me
            </NavLink>
            <NavLink exact to="/skills">
              Skills
            </NavLink>
            <NavLink exact to="/projects">
              My Projects
            </NavLink>
            <NavLink exact to="/contact">
              Contact me
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
