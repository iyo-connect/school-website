import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from 'lucide-react';
import logo from '../images/logo3.png';
import LanguageSelector from "./LanguageSelector";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-200 w-full lg:max-h-[105px] flex lg:justify-center md:justify-between md:items-center p-8 shadow-lg">
        <div className="hidden lg:flex justify-evenly items-center gap-10">
          <NavbarComponent text="Home" path="/" isMobile={false} onClick={handleLinkClick} />
          <NavbarComponent text="Academic" path="/academics" isMobile={false} onClick={handleLinkClick} />
          <NavbarComponent text="Curriculum" path="/curriculum" isMobile={false} onClick={handleLinkClick} />
          <img src={logo} alt="logo" className="w-[10rem] md:w-[20rem] lg:w-[6rem] lg:mb-3" />
          <NavbarComponent text="About" path="/about-us" isMobile={false} onClick={handleLinkClick} />
          <NavbarComponent text="Contact" path="/contact" isMobile={false} onClick={handleLinkClick} />
          <NavbarComponent text="Admission" path="/admission" isMobile={false} onClick={handleLinkClick} />
          <NavbarComponent text="Student Portal" path="/student" isMobile={false} onClick={handleLinkClick} />
        </div>
        <div className=" lg:hidden flex items-center justify-between w-full">
          <img src={logo} alt="logo" className="w-[10rem] md:w-[20rem]" />
          <button onClick={toggleMenu} className="text-black">
            {menuOpen ? <X className="md:size-[5rem]" /> : <Menu className="md:size-[5rem]" />}
          </button>
        </div>
      </nav>
      {menuOpen && (
        <div className="lg:hidden bg-gray-200 text-center py-4 rounded-[30px]">
          <NavbarComponent text="Home" path="/" isMobile={true} onClick={handleLinkClick} />
          <NavbarComponent text="Academic" path="/academics" isMobile={true} onClick={handleLinkClick} />
          <NavbarComponent text="Curriculum" path="/curriculum" isMobile={true} onClick={handleLinkClick} />
          <NavbarComponent text="About" path="/about-us" isMobile={true} onClick={handleLinkClick} />
          <NavbarComponent text="Contact" path="/contact" isMobile={true} onClick={handleLinkClick} />
          <NavbarComponent text="Admission" path="/admission" isMobile={true} onClick={handleLinkClick} />
          <NavbarComponent text="Student Portal" path="/student" isMobile={true} onClick={handleLinkClick} />
          <LanguageSelector/>
        </div>
      )}
    </>
  );
}
    
function NavbarComponent({ text, path, isMobile, onClick }) {
  return (
    <Link
      to={path}
      className={
        isMobile
          ? "block text-[#7776B3] text-[4rem] py-2 px-4 p-[2rem] hover:text-blue-900 active:text-blue-900  rounded-md"
          : "hidden lg:block lg:text-[17px] hover:border-b-2 border-blue-500 md:space-y-4"
      }
      onClick={onClick} 
    >
      {text}
    </Link>
  );
}
