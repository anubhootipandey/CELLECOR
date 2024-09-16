import React from 'react';
import "./app.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Head from './Home/Head'
import Home from './Home/Home'
import About from './components/Company/About'
import Navbar from './components/Navbar';
import PrivacyPolicy from './components/S&W/PrivacyPolicy';
import Footer from './components/Footer/Footer';




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
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;