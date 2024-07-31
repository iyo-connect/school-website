import React from 'react';
import { Button } from '../components/ui/button';
import hero_image from '../images/coverImage4.jpg';
import hero_image1 from '../images/mobImg.jpg';
import cover1 from '../images/coverImage1.jpg';
import cover2 from '../images/coverImage2.jpg';
import cover3 from '../images/coverImage3.jpg';
import ImageGallery from './ImageGallery';
import { useTranslation } from 'react-i18next';

import image1 from "../images/coverImage1.jpg";
import image2 from "../images/coverImage2.jpg";
import image3 from "../images/coverImage3.jpg";
import image4 from "../images/coverImage4.jpg";

const items = [
  { src: image1, alt: 'Principal\'s Message', title: "Hero_principal_message" },
  { src: image2, alt: 'Campus Tour', title: "Hero_campus_tour" },
  { src: image3, alt: 'Admissions', title: "Hero_admissions" },
  { src: image4, alt: 'Gallery', title: "Hero_gallery" }
];

const HeroPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className='relative'>
        <img src={hero_image} alt="Hero Image" className="w-full h-[300px] md:h-auto object-cover lg:block md:hidden" />
        <img src={hero_image1} alt="Hero Image" className="lg:hidden" />
        <div className='absolute top-[20rem] lg:top-[11rem] left-10 w-1/2 text-white text-[2.5rem] font-bold'>
          <h2>{t('Hero_coverText')}</h2>
          <Button className="p-5 bg-blue-900 hover:bg-blue-800">
            {t('Hero_apply_now')}
          </Button>
        </div>
      </div>
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={cover1} alt="Bharathi School" className="w-full h-auto rounded-lg shadow-md" />
          <div>
            <h2 className="text-blue-800 text-2xl font-bold mb-4">{t('Hero_about_title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('Hero_about_description')}
            </p>
            <Button className="bg-blue-800 text-white hover:bg-blue-900">{t('Hero_find_out_more')}</Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-blue-800 text-2xl font-bold mb-4">{t('Hero_why_bharathi_title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('Hero_why_bharathi_description')}
            </p>
            <Button className="bg-blue-800 text-white hover:bg-blue-900">{t('Hero_find_out_more')}</Button>
          </div>
          <img src={cover2} alt="Why Bharathi School" className="w-full h-auto rounded-lg shadow-md" />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <img src={cover3} alt="Cocurricular Activities" className="w-full h-auto rounded-lg shadow-md" />
          <div>
            <h2 className="text-blue-800 text-2xl font-bold mb-4">{t('Hero_cocurricular_title')}</h2>
            <p className="text-gray-700 mb-4">
              {t('Hero_cocurricular_description')}
            </p>
            <Button className="bg-blue-800 text-white hover:bg-blue-900">{t('Hero_find_out_more')}</Button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mt-12 text-center lg:text-left mb-[4rem]">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            {t('Hero_st_johns_title')}
          </h2>
          <p className="text-gray-700 mb-8">
            {t('Hero_st_johns_description')}
          </p>
          <a
            href="#learn-more"
            className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
            {t('Hero_learn_more')}
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            {items.map((item, index) => (
              <div key={index} className="relative">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-40 text-white text-lg font-semibold p-2 text-center rounded-b-lg">
                  {t(item.title)}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:pl-8">
            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              {t('Hero_st_johns_college_title')}
            </h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-6">
              {t('Hero_teaching_life')}
            </h2>
            <p className="text-gray-700 mb-8">
              {t('Hero_st_johns_college_description')}
            </p>
            <a
              href="#learn-more"
              className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              {t('Hero_learn_more')}
            </a>
          </div>
        </div>
      </div>
      <ImageGallery />
    </div>
  );
};

export default HeroPage;
