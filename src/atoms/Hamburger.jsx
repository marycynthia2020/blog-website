import { IoMdClose } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

const Hamburger = ({isMenuOpen, setIsMenuOpen}) => {
  return (
     <div className=" md:hidden text-3xl"  id="hamburger" onClick={()=> setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <IoMdClose /> : <RxHamburgerMenu />}</div>
  )
}

export default Hamburger