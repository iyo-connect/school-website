import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/coverImage1.jpg';
import image2 from '../images/coverImage2.jpg';
export default function Academics() {
  return (
    <div classname="md:text-[3rem]">
    <div className="academics-page">
      <div className="bg-blue-900 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Our Campus</h1>
      </div>
      
      <div className="mx-auto px-4 py-12">
        <h2 className="lg:text-3xl md:text-[3rem] font-bold mb-6 ">Our Campus</h2>
        <p className="mb-6  lg:text-[23px] md:text-[3rem] p-5 m-5">
          Bharathi School is situated on a 5-acre campus on Thadagam Road in close proximity to the popular residential areas viz., Saibaba Colony, R. S. Puram and Sivananda Colony. The school houses the best infrastructure facilities, including an auditorium with leading-edge technology to accommodate a seating capacity of 500, an air-conditioned multi-purpose hall with a capacity of 300 seats, an open-air stage, A vast playground to cater to the needs of athletes, and sportspersons, basketball court with floodlights, kids play zone for kindergarten students, extensively stocked library with age-appropriate books on various genres, spacious and well-lit and well-ventilated classrooms with comfortable furniture, well-equipped Science laboratories and exclusive Computer labs.
        </p>
        <div className="lg:text-[15px] md:text-[3rem] button-group  flex space-x-4 mb-12">
          <Link to="/" className="btn btn-primary">Home</Link>
          <Link to="/admission" className="btn btn-secondary">Admission</Link>
        </div>
        <div className="image-gallery grid grid-cols-1 md:grid-cols-2 gap-4">
          <img src={image1} alt="Campus Image 1" className="w-full h-auto" />
          <img src={image2} alt="Campus Image 2" className="w-full h-auto" />
        </div>
      </div>
    </div>
    </div>
  );
}