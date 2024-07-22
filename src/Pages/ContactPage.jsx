import React from 'react';
import { Link } from 'react-router-dom';
import contactImage from '../images/contactPage.jpeg';

const ContactPage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center md:text-[3rem] lg:text-[1.5rem]">
        <div className="container mx-auto py-8 px-4">
          {/* Enquiry Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="mb-8">
              <h2 className="md:text-[3rem] lg:text-[1.5rem] font-bold mb-4">Enquiry Form</h2>
              <img src={contactImage} alt="Enquiry Form" className="w-full h-[370px] object-cover rounded-lg mb-4" />
            </div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block md:text-[3rem] lg:text-[1.5rem] font-bold mb-2" htmlFor="name">Name: *</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="name" name="name" placeholder="Name" required />
                </div>
                <div>
                  <label className="block md:text-[3rem] lg:text-[1.5rem] font-bold mb-2" htmlFor="email">Email: *</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" id="email" name="email" placeholder="Email" required />
                </div>
                <div>
                  <label className="block md:text-[3rem] lg:text-[1.5rem] font-bold mb-2" htmlFor="contactNumber">Contact Number: *</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="contactNumber" name="contactNumber" placeholder="Contact Number" required />
                </div>
                <div>
                  <label className="block md:text-[3rem] lg:text-[1.5rem] font-bold mb-2" htmlFor="enquiry">Enquiry: *</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="enquiry" name="enquiry" placeholder="Enquiry" required />
                </div>
              </div>
              <div className="mb-4">
                <label className="block md:text-[3rem] lg:text-[1.5rem] font-bold mb-2" htmlFor="message">Message: *</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" id="message" name="message" rows="4" placeholder="Message" required></textarea>
              </div>
              <div className="mb-4">
                <label className="block md:text-[3rem] lg:text-[1.5rem] font-bold mb-2" htmlFor="captcha">Please enter the code you see in the image: *</label>
                <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="captcha" name="captcha" required />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">Submit Details</button>
            </form>
          </div>

          {/* Side Section */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Annual Events</h3>
              <ul>
                <li><Link to="#" className="block hover:underline mb-2">Presentation of Colours</Link></li>
                <li><Link to="#" className="block hover:underline mb-2">Independence Day</Link></li>
                <li><Link to="#" className="block hover:underline mb-2">Bharathi Darshan</Link></li>
                <li><Link to="#" className="block hover:underline mb-2">School Activities</Link></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">About NewLeaf</h3>
              <p>NewLeaf School is inspired by the vision and principles of modern education, focusing on the holistic development of students. We aim to nurture independent thinkers and lifelong learners who can contribute positively to society.</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">Other Events</h3>
              <ul>
                <li><Link to="#" className="block hover:underline mb-2">Independence Day</Link></li>
                <li><Link to="#" className="block hover:underline mb-2">Bharathi Darshan</Link></li>
                <li><Link to="#" className="block hover:underline mb-2">School Activities</Link></li>
              </ul>
            </div>
          </div> 
          <div className="mt-8 w-full">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="md:text-[3rem] lg:text-[1.5rem] font-bold mb-4">Our Location</h3>
              <p>NewLeaf School</p>
              <p>307, Thadagam Main Rd, Saibaba Colony, Coimbatore, Tamil Nadu 641011</p>
              <p>Phone: +91 422 3515720</p>
              <p>Email: info@newleafschool.org</p>
              <p>Map:</p>
              <img src="/path/to/map-placeholder.jpg" alt="Map placeholder" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
    </div>
    </>    
    
);
};

export default ContactPage;