import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from 'lucide-react';
import logo from '../images/logo1.png';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../components/ui/sheet";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Curriculum', path: '/curriculum' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'About Us', path: '/about-us' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admissions', path: '/admission' }
];

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 h-[80px] flex items-center text-[18px] shadow-lg bg-gray/50 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center px-[15rem] ">
        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            {navLinks.slice(0, 3).map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-black hover:text-blue-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="">
          <img src={logo} alt="No-Image" width="300px" />
        </div>

        <div className="hidden md:flex space-x-4">
          <ul className="flex space-x-4">
            {navLinks.slice(3).map((link) => (
              <li key={link.name}>
                <Link to={link.path} className="text-black hover:text-blue-500">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-black">
                <Menu size='25'/>
              </button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Select a page to navigate</SheetDescription>
              </SheetHeader>
              <div className="space-y-4">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link to={link.path} className="text-black hover:text-blue-500 block py-2">
                      {link.name}
                    </Link>
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
