import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from './Pages/admin/Dashboard';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutUs';
import Layout from './Layout';
import Academics from './Pages/Academic';
import AdmissionPage from './Pages/Admission';
import CurriculumPage from './Pages/Curriculum';
import Footer from './componentPage/Footer';
import Navbar from './componentPage/NavigationMenu';
import Heropage from './componentPage/Heropage';

function App() {
  return (
    <HashRouter>
      <>
      <Navbar />
        <Routes>
          <Route path="/" element={<Heropage/>} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/curriculum" element={<CurriculumPage />} />
          <Route path="/user" element={<Layout />} />
          <Route path="/admin" element={<Dashboard />} />
        </Routes>
        <Footer />
      </>
    </HashRouter>
  );
}

export default App;
