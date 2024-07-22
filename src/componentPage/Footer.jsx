import icon from '../images/logo5.png'
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Button } from '../components/ui/button';

const Footer = () => {
  return (
    <>
      <div className="bg-blue-800 text-white py-12 lg:text-[17px] md:text-[3rem]">
        <div className="container mx-auto lg:flex lg:gap-[8rem]">
        <img src={icon} alt="logo" className='lg:w-[21rem] lg:h-[8rem] lg:block md:hidden'/>
          <div className="w-full flex md:justify-around md:text-center md:mb-[5rem]">
            <div className="lg:w-1/4 md:w-1/3 mb-5 md:mb-2">
              <h3 className="lg:text-[17px] md:text-[3rem] font-bold mb-4">NEWLEAF ICSE</h3>
              <ul>
                <li><Link to="#" className="hover:underline">About Newleaf</Link></li>
                <li><Link to="#" className="hover:underline">Visionaries</Link></li>
                <li><Link to="#" className="hover:underline">Why Newleaf</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-5 md:mb-0">
              <h3 className="lg:text-[17px] md:text-[3rem] font-bold mb-4">ACADEMICS</h3>
              <ul>
                <li><Link to="#" className="hover:underline">Why ICSE</Link></li>
                <li><Link to="#" className="hover:underline">Curriculum</Link></li>
                <li><Link to="#" className="hover:underline">Cocurricular</Link></li>
                <li><Link to="#" className="hover:underline">Our Campus</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-5 md:mb-0">
              <h3 className="lg:text-[17px] md:text-[3rem] font-bold mb-4">ANNUAL EVENTS</h3>
              <ul>
                <li><Link to="#" className="hover:underline">Sports Day</Link></li>
                <li><Link to="#" className="hover:underline">Annual Day</Link></li>
                <li><Link to="#" className="hover:underline">School Activities</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-5 md:mb-0 md:hidden">
              <h3 className="lg:text-[17px] md:text-[3rem] font-bold mb-4">SCHOOL STORIES</h3>
              <ul>
                <li><Link to="#" className="hover:underline">Newleaf's Pride</Link></li>
                <li><Link to="#" className="hover:underline">Intramurals</Link></li>
                <li><Link to="#" className="hover:underline">Press Release</Link></li>
              </ul>
            </div>
          </div>
          <div className="md:text-center lg:block">
            <div>
              NEWLEAF SCHOOL,
              307, THADAGAM ROAD,
              COIMBATORE - 641 013,
              TAMILNADU, INDIA 
            </div>
            <Button className="mt-4 bg-white text-blue-800 rounded md:wx-[5rem] md:wy-[3rem] md:text-[35px] md:p-5 hover:text-white md:mb-8 lg:text-[15px] hover:bg-white hover:text-blue-700">
              <Link to="/contact">
                Get Directions
              </Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-col justify-center items-center md:text-center">
          <div className="md:text-center">
          <div className='md:w-[20rem] md:ml-[6rem] lg:hidden'>
            <img src={icon} alt="logo" />
          </div>
            <div className="mb-2">Contact</div>
            <div>0422 3515720</div>
            <div>+91 82200 59597</div>
            <div>+91 8220059611</div>
            <div className="mt-4">Email</div>
            <div><a href="mailto:info@newleafschool.org" className="hover:underline">info@newleafschool.org</a></div>
          </div>
          <div className="flex mt-4 md:mt-0 space-x-4">
            <Link to="#" className="text-white hover:text-blue-400"><Facebook size={24} /></Link>
            <Link to="#" className="text-white hover:text-pink-400"><Instagram size={24} /></Link>
            <Link to="#" className="text-white hover:text-blue-400"><Twitter size={24} /></Link>
            <Link to="#" className="text-white hover:text-blue-700"><Linkedin size={24} /></Link>
            <Link to="#" className="text-white hover:text-red-600"><Youtube size={24} /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
