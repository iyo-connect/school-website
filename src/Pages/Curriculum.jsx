import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CurriculumPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto py-8 px-4">
          {/* Curriculum Content Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 lg:text-[1.5rem] md:text-[3rem]">
            <h2 className="lg:text-3xl font-bold mb-4">{t('Curriculum_header')}</h2>
            <p className="mb-4">
              {t('Curriculum_intro')}
            </p>
            <p className="mb-4">
              {t('Curriculum_details')}
            </p>
            <p className="mb-4">
              {t('Curriculum_key_subjects')}
            </p>
            <ul className="list-disc ml-8 mb-4">
              <li>{t('Curriculum_subject_math')}</li>
              <li>{t('Curriculum_subject_science')}</li>
              <li>{t('Curriculum_subject_literature')}</li>
              <li>{t('Curriculum_subject_social_studies')}</li>
              <li>{t('Curriculum_subject_physical_education')}</li>
              <li>{t('Curriculum_subject_arts')}</li>
              <li>{t('Curriculum_subject_technology')}</li>
              <li>{t('Curriculum_subject_character_education')}</li>
            </ul>
            <p className="mb-4">
              {t('Curriculum_contact')}
            </p>
          </div>

          {/* Related Links Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 lg:text-[1.5rem] md:text-[3rem]">
            <h3 className="font-bold mb-4 lg:text-[1.5rem] md:text-[3rem]">{t('Curriculum_related_links')}</h3>
            <ul>
              <li><Link to="#" className="block hover:underline mb-2">{t('Curriculum_link_admissions')}</Link></li>
              <li><Link to="#" className="block hover:underline mb-2">{t('Curriculum_link_calendar')}</Link></li>
              <li><Link to="#" className="block hover:underline mb-2">{t('Curriculum_link_extracurricular')}</Link></li>
              <li><Link to="#" className="block hover:underline mb-2">{t('Curriculum_link_faculty')}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurriculumPage;
