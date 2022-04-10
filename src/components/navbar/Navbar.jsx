
import React, { useState } from 'react';
import { Nav, Logo, Hamburger, MenuLink, Menu } from './NavbarStyles';
import { GiHamburgerMenu } from 'react-icons/gi';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo to="/home" >
        <i>{"<BETUL>"}</i>
        <span>/recipe</span>
      </Logo>
      <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        {/* <span/>
        <span/>
        <span /> */}
        <GiHamburgerMenu onClick={()=>setIsOpen(!isOpen)}/>
      </Hamburger>
      <Menu osman={isOpen}>
        <MenuLink to="/about" onClick={()=>setIsOpen(!isOpen)}>About</MenuLink>
        <MenuLink to="/github" onClick={()=>setIsOpen(!isOpen)}>Gıthub</MenuLink>
        <MenuLink to="/" onClick={()=>setIsOpen(!isOpen)}>Logout</MenuLink>
      </Menu>


   </Nav>
  )
}

export default Navbar;