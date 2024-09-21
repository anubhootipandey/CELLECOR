import React from 'react';
import "./app.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Head from './Home/Head'
import Home from './Home/Home'
import About from './components/Company/About'
import Navbar from './components/Navbar';
import PrivacyPolicy from './components/S&W/PrivacyPolicy';
import Footer from './components/Footer/Footer';
import ServiceCenter from './components/S&W/ServiceCenter';
import ReturnPolicy from './components/S&W/ReturnPolicy';
import TermsandCondition from './components/S&W/TermsandCondition';
import WarrantyRegistration from './components/S&W/WarrantyRegistration';

import Career from './components/Company/Career';
import Contact from './components/Company/Contact';
import Blog from './components/Company/Blog';
import Management from './components/Company/Management';

import CustomerSupport from './components/CustomerSupport';





const App = () => {
  return (
    <>
    <BrowserRouter>
    <Head/>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/service-center' element={<ServiceCenter />} />
      <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
      <Route exact path='/return-policy' element={<ReturnPolicy />} />
      <Route exact path='/terms-conditions' element={<TermsandCondition />} />
      <Route exact path='/warrant-registration' element={<WarrantyRegistration />} />

      <Route exact path='/career' element={<Career />} />
      <Route exact path='/contact' element={<Contact />} />

      <Route exact path='/blog' element={<Blog />} />
      <Route exact path='/management' element={<Management />} />



      <Route exact path='/customer-support' element={<CustomerSupport />} />


    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;