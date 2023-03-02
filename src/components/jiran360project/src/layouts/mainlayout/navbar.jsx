import React, { useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

const Navbar2 = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div >
      <div class="d-flex justify-content-between p-4">
        <div>
          <NavLink href="/"> <img src='https://jiran360.my/assets/web/images/logo.svg' /> </NavLink>
        </div>
        <div>
          <div class="d-flex gap-5">
            <NavLink href='/about'>About </NavLink>
            <NavLink href='/neighbours'>Neighbours </NavLink>

            <NavLink href='/agencies'>Agencies </NavLink>
            <NavLink href='/business'>Business </NavLink>
            <NavLink href='/contact'> Contact us</NavLink>
            <NavLink href='/login' > SIGN IN <i class="bi bi-box-arrow-in-right"></i></NavLink>
            <NavLink href='/signup'><button type="button" class="btn btn-primary rounded-pill"><i class="bi bi-person"></i>Create an Account</button> </NavLink>
          </div>
        </div>


        {/* <NavbarBrand href="/" className="me-auto">
          reactstrap
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse> */ }
        {/* </Navbar> */}
      </div>

      <div>
        {children}
      </div>
    </div>

  );
}

export default Navbar2;