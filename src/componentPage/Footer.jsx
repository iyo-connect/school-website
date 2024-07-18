
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo1.png';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#060270] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <address className="not-italic">
              NEWLEAF SCHOOL, <br />
              307, THADAGAM ROAD, <br />
              COIMBATORE - 641 013, <br />
              TAMILNADU, INDIA.
            </address>
            <button className="mt-4 px-4 py-2 bg-white text-blue-800 rounded">Get Directions</button>
          </div>

          <div className="w-full md:w-3/4 flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/5 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">NEWLEAF ICSE</h3>
              <ul>
                <li><Link to="#" className="hover:underline">About Newleaf</Link></li>
                <li><Link to="#" className="hover:underline">Visionaries</Link></li>
                <li><Link to="#" className="hover:underline">From our Chairman's Desk</Link></li>
                <li><Link to="#" className="hover:underline">Vision, Mission & Motto</Link></li>
                <li><Link to="#" className="hover:underline">Why Newleaf</Link></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/5 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">ACADEMICS</h3>
              <ul>
                <li><Link to="#" className="hover:underline">Why ICSE</Link></li>
                <li><Link to="#" className="hover:underline">Curriculum</Link></li>
                <li><Link to="#" className="hover:underline">Cocurricular and Extracurricular components</Link></li>
                <li><Link to="#" className="hover:underline">Our Campus</Link></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/5 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">ANNUAL EVENTS</h3>
              <ul>
                <li><Link to="#" className="hover:underline">Presentation of Colours</Link></li>
                <li><Link to="#" className="hover:underline">Independence Day</Link></li>
                <li><Link to="#" className="hover:underline">Sports Day</Link></li>
                <li><Link to="#" className="hover:underline">Newleaf Darshan</Link></li>
                <li><Link to="#" className="hover:underline">Annual Day</Link></li>
                <li><Link to="#" className="hover:underline">School Activities</Link></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/5 mb-8 md:mb-0">
              <h3 className="text-xl font-bold mb-4">SCHOOL STORIES</h3>
              <ul>
                <li><Link to="#" className="hover:underline">Newleaf's Pride</Link></li>
                <li><Link to="#" className="hover:underline">The days we celebrated</Link></li>
                <li><Link to="#" className="hover:underline">Intramurals</Link></li>
                <li><Link to="#" className="hover:underline">Press Release</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-center md:justify-between items-center">
          {/* Contact Information */}
          <div className="text-center md:text-left">
            <div className="mb-2">Contact</div>
            <div>0422 3515720</div>
            <div>+91 82200 59597</div>
            <div>+91 8220059611</div>
            <div className="mt-4">Email</div>
            <div><a href="mailto:info@newleafschool.org" className="hover:underline">info@newleafschool.org</a></div>
          </div>

          {/* Social Media Links */}
          <div className="flex mt-4 md:mt-0 space-x-4">
            <Link to="#" className="text-white hover:text-blue-400"><Facebook size={24} /></Link>
            <Link to="#" className="text-white hover:text-pink-400"><Instagram size={24} /></Link>
            <Link to="#" className="text-white hover:text-blue-400"><Twitter size={24} /></Link>
            <Link to="#" className="text-white hover:text-blue-700"><Linkedin size={24} /></Link>
            <Link to="#" className="text-white hover:text-red-600"><Youtube size={24} /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
