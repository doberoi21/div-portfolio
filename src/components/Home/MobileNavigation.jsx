// import React from 'react'

import LogoDetail from "./LogoDetail";
import NavLinks from "./NavLinks";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

import { useState } from "react";

function MobileNavigation() {
  const [click, setclick] = useState(false);
  const Hamburger = (
    <MdOutlineMenu
      className="HamburgerMenu"
      size="30px"
      color="white"
      onClick={() => setclick(!click)}
    />
  );
  const Close = (
    <MdClose
      className="HamburgerMenu"
      size="30px"
      color="white"
      onClick={() => setclick(!click)}
    />
  );

  return (
    <div className="MobileNavigation">
      <LogoDetail />
      {click ? Close : Hamburger} 
      {click && <NavLinks />}
    </div>
  );
}

export default MobileNavigation;
