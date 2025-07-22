import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger = ({isMenuOpen, setIsMenuOpen}) => {
  return (
     <div className=" md:hidden text-2xl"  id="hamburger" onClick={()=> setIsMenuOpen(!isMenuOpen)}><RxHamburgerMenu /></div>
  )
}

export default Hamburger