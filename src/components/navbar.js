import React, { useState } from 'react';
import icon from '../images/icon.svg'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="" light expand="md">
        <div className="logo2"><img src={icon} alt="icon"></img></div>
        <NavbarBrand style={{fontWeight: 'bold'}} href="/">CRITTER PICKER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem style={{fontWeight: 'bold'}}>
              <NavLink href="/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{fontWeight: 'bold'}} href="/">Devpost</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;