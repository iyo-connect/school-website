import React from 'react';
import { Link } from 'react-router-dom';
import contactImage from '../images/contactPage.jpeg';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center md:text-[3rem] lg:text-[1.5rem]">
        <div className="container mx-auto py-8 px-4">
          {/* Enquiry Form Section */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="mb-8">
              <h2 className="md:text-[3rem] lg:text-[1.5rem] font-bold mb-4">{t('Contact_enquiry_form')}</h2>
              <img src={contactImage} alt={t('Contact_enquiry_image_alt')} className="w-full h-[370px] object-cover rounded-lg mb-4" />
            </div>
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block md:text-[3rem] lg:text-[1.5rem] font-bold mb-2" htmlFor="name">{t('Contact_name')}</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="name" name="name" placeholder={t('Contact_name_placeholder')} required />
                </div>
                <div>
                  <label className="block md:text-[3rem] lg:text-[1.5rem] font-bold mb-2" htmlFor="email">{t('Contact_email')}</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" id="email" name="email" placeholder={t('Contact_email_placeholder')} required />
                </div>
                <div>
                  <label className="block md:text-[3rem] lg:text-[1.5rem] font-bold mb-2" htmlFor="contactNumber">{t('Contact_number')}</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="contactNumber" name="contactNumber" placeholder={t('Contact_number_placeholder')} required />
                </div>
                <div>
                  <label className="block md:text-[3rem] lg:text-[1.5rem] font-bold mb-2" htmlFor="enquiry">{t('Contact_enquiry')}</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="enquiry" name="enquiry" placeholder={t('Contact_enquiry_placeholder')} required />
                </div>
              </div>
              <div className="mb-4">
                <label className="block md:text-[3rem] lg:text-[1.5rem] font-bold mb-2" htmlFor="message">{t('Contact_message')}</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" id="message" name="message" rows="4" placeholder={t('Contact_message_placeholder')} required></textarea>
              </div>
              <div className="mb-4">
                <label className="block md:text-[3rem] lg:text-[1.5rem] font-bold mb-2" htmlFor="captcha">{t('Contact_captcha')}</label>
                <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="captcha" name="captcha" required />
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">{t('Contact_submit')}</button>
            </form>
          </div>

          {/* Side Section */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">{t('Contact_annual_events')}</h3>
              <ul>
                <li><Link to="#" className="block hover:underline mb-2">{t('Contact_presentation_of_colours')}</Link></li>
                <li><Link to="#" className="block hover:underline mb-2">{t('Contact_independence_day')}</Link></li>
                <li><Link to="#" className="block hover:underline mb-2">{t('Contact_bharathi_darshan')}</Link></li>
                <li><Link to="#" className="block hover:underline mb-2">{t('Contact_school_activities')}</Link></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">{t('Contact_about_newleaf')}</h3>
              <p>{t('Contact_newleaf_description')}</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">{t('Contact_other_events')}</h3>
              <ul>
                <li><Link to="#" className="block hover:underline mb-2">{t('Contact_independence_day')}</Link></li>
                <li><Link to="#" className="block hover:underline mb-2">{t('Contact_bharathi_darshan')}</Link></li>
                <li><Link to="#" className="block hover:underline mb-2">{t('Contact_school_activities')}</Link></li>
              </ul>
            </div>
          </div> 
          <div className="mt-8 w-full">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="md:text-[3rem] lg:text-[1.5rem] font-bold mb-4">{t('Contact_location')}</h3>
              <p>{t('Contact_address')}</p>
              <p>{t('Contact_phone')}</p>
              <p>{t('Contact_email1')}</p>
              <p>{t('Contact_map')}</p>
              <img src="/path/to/map-placeholder.jpg" alt={t('Contact_map_alt')} className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
