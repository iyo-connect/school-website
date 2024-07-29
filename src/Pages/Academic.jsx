import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../images/coverImage1.jpg';
import image2 from '../images/coverImage2.jpg';
import { useTranslation } from 'react-i18next';

export default function Academics() {
  const { t } = useTranslation();
  return (
    <div classname="md:text-[3rem]">
    <div className="academics-page">
      <div className="bg-blue-900 text-white text-center py-12">
        <h1 className="text-4xl font-bold">Our Campus</h1>
      </div>
      
      <div className="mx-auto px-4 py-12">
        <h2 className="lg:text-3xl md:text-[3rem] font-bold mb-6 ">Our Campus</h2>
        <p className="mb-6  lg:text-[23px] md:text-[3rem] p-5 m-5">
         {t('ourCampus')}
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
