import React from 'react';
import { useTranslation } from 'react-i18next';

function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-gray-100 p-4">
        <div className="bg-white p-6 md:p-8 lg:p-10 xl:p-12 rounded shadow-md max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-center text-indigo-700 mb-6 md:mb-8">
            {t('AboutPage_header')}
          </h1>
          <p className="text-gray-700 text-base md:text-3xl mb-8 lg:text-[17px] text-center">
            {t('AboutPage_intro')}
          </p>
          
          <h2 className="text-xl md:text-3xl font-semibold text-indigo-700 mb-4">
            {t('AboutPage_about_title')}
          </h2>
          <p className="text-gray-700 text-base md:text-3xl lg:text-[17px] mb-8">
            {t('AboutPage_about')}
          </p>
          
          <h2 className="text-xl md:text-3xl font-semibold text-indigo-700 mb-4">
            {t('AboutPage_visionaries_title')}
          </h2>
          <p className="text-gray-700 text-base md:text-3xl lg:text-[17px] mb-8">
            {t('AboutPage_visionaries')}
          </p>
          
          <h2 className="text-xl md:text-3xl font-semibold text-indigo-700 mb-4">
            {t('AboutPage_chairman_desk_title')}
          </h2>
          <p className="text-gray-700 text-base md:text-3xl lg:text-[17px] mb-8">
            {t('AboutPage_chairman_desk')}
          </p>
          
          <h2 className="text-xl md:text-3xl font-semibold text-indigo-700 mb-4">
            {t('AboutPage_vision_mission_motto_title')}
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8 mb-8">
            <div className="bg-indigo-100 p-4 rounded-lg flex-1 mb-4 md:mb-0">
              <h3 className="text-lg md:text-3xl font-semibold text-indigo-700 mb-2">
                {t('AboutPage_vision')}
              </h3>
              <p className="text-gray-700 md:text-3xl lg:text-[17px]">
                {t('AboutPage_vision_text')}
              </p>
            </div>
            <div className="bg-indigo-100 p-4 rounded-lg flex-1">
              <h3 className="text-lg md:text-3xl font-semibold text-indigo-700 mb-2">
                {t('AboutPage_mission')}
              </h3>
              <p className="text-gray-700 md:text-3xl lg:text-[17px]">
                {t('AboutPage_mission_text')}
              </p>
            </div>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg mb-8">
            <h3 className="text-lg md:text-3xl font-semibold text-indigo-700 mb-2">
              {t('AboutPage_motto')}
            </h3>
            <p className="text-gray-700 md:text-3xl lg:text-[17px]">
              {t('AboutPage_motto_text')}
            </p>
          </div>
          
          <h2 className="text-xl md:text-3xl font-semibold text-indigo-700 mb-4">
            {t('AboutPage_why_newleaf_title')}
          </h2>
          <p className="text-gray-700 text-base md:text-3xl lg:text-[17px]">
            {t('AboutPage_why_newleaf')}
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
