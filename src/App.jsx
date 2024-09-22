import React from 'react';
import "./app.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Head from './Home/Head'
import Home from './Home/Home'
import About from './components/Company/About'
import Navbar from './components/Navbar';
import PrivacyPolicy from './components/S&W/PrivacyPolicy';
import Footer from './components/Footer/Footer';

import Blog from './components/Blog/Blog';
import SmartTv65Blog from './components/Blog/SmartTv65Blog';
import BropodsBlog from './components/Blog/BropodsBlog';
import TizenOsBlog from './components/Blog/TizenOsBlog';
import OasisM6Blog from './components/Blog/OasisM6Blog';
import BropodsAceBlogs from './components/Blog/BropodsAceBlogs'




const App = () => {
  return (
    <>
    <BrowserRouter>
    <Head/>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/about' element={<About/>} />
      <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />

      
      <Route exact path='/blog' element={<Blog/>} />
      <Route exact path='/blog/cellecor-bring-in-the-theatre-like-feel-at-home-with-smart-tv-s65' element={<SmartTv65Blog/>} />
      <Route exact path='/blog/the-cellecor-bropods-c103-promises-innovation-in-every-beat' element={<BropodsBlog/>} />
      <Route exact path='/blog/cellecor-gadgets-partners-for-samsung-tizen-os' element={<TizenOsBlog/>} />
      <Route exact path='/blog/wear-oasis-of-luxury-on-wrist-with-m6-twist-smart-watch' element={<OasisM6Blog/>} />
      <Route exact path='/blog/music-bonanza-at-home-with-cellecor-bropods-cb44-ace' element={<BropodsAceBlogs/>} />




      
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;