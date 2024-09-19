import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("main"); 

  const handleMenuClick = (menu) => {
    setActiveMenu(menu); 
  };

  const handleBackClick = () => {
    setActiveMenu("main"); 
  };

  return (
    <>
      <div className="flex items-center justify-between px-1 xl:px-10 py-3">
        <div className="max-w-52">
          <img src={logo} alt="Logo" />
        </div>

        <div className="flex gap-10 font-semibold max-xl:hidden">
          <div>
          <Link to='/' className="anime">HOME</Link>
          </div>
          <div className="relative group">
          <Link to='' className="anime">SHOP BY CATEGORY</Link>
            <div className="absolute hidden group-hover:block w-60 font-light bg-white z-10">
              <ul>
                <li className="m-2 py-2 border-b border-gray-300">
                <Link to='' className="anime">Smart TV</Link>
                </li>
                <li className="m-2 py-2 border-b border-gray-300">
                <Link to='' className="anime">TWS</Link>
                </li>
                <li className="m-2 py-2">
                <Link to='' className="anime">Smart Watches</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
            <a href="#" className="anime">
              SUPPORT & WARRANTY
            </a>
            <div className="absolute hidden group-hover:block w-60 font-light bg-white z-10">
              <ul>
                <li className="m-2 py-2 border-b border-gray-300">
                <Link to='/service-center' className="anime">Service Center</Link>
                </li>
                <li className="m-2 py-2 border-b border-gray-300">
                <Link to='/warrant-registration' className="anime">Warranty Registration</Link>
                </li>
                <li className="m-2 py-2 border-b border-gray-300">
                  <Link to='/privacy-policy' className="anime">Privacy Policy</Link>
                </li>
                <li className="m-2 py-2 border-b border-gray-300">
                <Link to='/return-policy' className="anime">Return Policy</Link>
                </li>
                <li className="m-2 py-2">
                <Link to='/terms-conditions' className="anime">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative group">
          <Link to='' className="anime">COMPANY</Link>
            <div className="absolute hidden group-hover:block w-60 font-light bg-white z-10">
              <ul>
                <li className="m-2 py-2 border-b border-gray-300">    
                  <Link to='/about' className="anime">About  Us</Link>
                </li>
                <li className="m-2 py-2 border-b border-gray-300">
                <Link to='' className="anime">Management</Link>
                </li>
                <li className="m-2 py-2 border-b border-gray-300">
                <Link to='' className="anime">Blog</Link>
                </li>
                <li className="m-2 py-2 border-b border-gray-300">
                <Link to='/career' className="anime">Careers</Link>
                </li>
                <li className="m-2 py-2">
                <Link to='/contact' className="anime">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
          <Link to='' className="anime">CUSTOMER SUPPORT</Link>
          </div>
        </div>

        <div className="flex items-center gap-5 text-2xl">
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="max-xl:hidden">
            <i className="fa-regular fa-user"></i>
          </div>
          <div className="max-xl:hidden">
            <i className="fa-regular fa-heart"></i>
          </div>
          <div>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
          <div className="xl:hidden">
            <i
              className="fa-solid fa-bars cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            ></i>
          </div>
        </div>
      </div>

      {/* hamburger */}
      <div
        className={`xl:hidden bg-white absolute top-0 left-0 w-80 z-10 h-[100vh] transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform  ease-in-out`}
      >
        {activeMenu === "main" && (
          <div className="flex items-center justify-between p-4">
            <p className="text-xl font-semibold">Menu</p>
            <i
              className="fa-solid fa-xmark text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            ></i>
          </div>
        )}

        
        {activeMenu === "main" && (
          <ul className="flex flex-col  text-lg text-[#232323]">
            <li className="border-b p-2">
            <Link to=''>HOME</Link>
            </li>
            <li
              className="border-b p-2"
              onClick={() => handleMenuClick("shop")}
            >
              <div className="flex items-center justify-between">
              <Link to='' >SHOP BY CATEGORY</Link>
                <i class="fa-solid fa-greater-than font-thin"></i>
              </div>
            </li>
            <li
              className="border-b p-3"
              onClick={() => handleMenuClick("support")}
            >
              <div className="flex items-center justify-between">
              <Link to='' >SUPPORT & WARRANTY</Link>
                <i class="fa-solid fa-greater-than font-thin"></i>
              </div>
            </li>
            <li
              className="border-b p-3"
              onClick={() => handleMenuClick("company")}
            >
              <div className="flex items-center justify-between">
              <Link to='' >COMPANY</Link>
                <i class="fa-solid fa-greater-than font-thin"></i>
              </div>
            </li>
            <li className="border-b p-3">
            <Link to='' >CUSTOMER SUPPORT</Link>
            </li>
            <li className="border-b p-3">
              <div className="flex items-center gap-1">
                <i class="fa-regular fa-circle-user"></i>
                <p>Sign In</p>
              </div>
            </li>
            <li className="border-b p-3">
              <div className="flex items-center gap-1">
                <i class="fa-solid fa-user-plus"></i>
                <p>Create an Account</p>
              </div>
            </li>
            <li className="border-b p-3">
              <div className="flex items-center gap-1">
                <i class="fa-regular fa-heart"></i>
                <p>My Wish List</p>
              </div>
            </li>
          </ul>
        )}

        
        {activeMenu === "shop" && (
          <div>
            <div className="flex p-3 gap-20 bg-[#f8f8f8] ">
              <button className="" onClick={handleBackClick}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <p>SHOP BY CATEGORY</p>
            </div>
            <ul className="flex flex-col h-[100vh]">
              <li className="border-b p-3">
              <Link to='' >Smart TV</Link>
              </li>
              <li className="border-b p-3">
              <Link to='' >TWS</Link>
              </li>
              <li className="border-b p-3">
              <Link to='' >Smart Watches</Link>
              </li>
            </ul>
          </div>
        )}

        
        {activeMenu === "support" && (
          <div>
            <div className="flex p-3 gap-16 bg-[#f8f8f8]">
              <button className="" onClick={handleBackClick}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <p>SUPPORT & WARRANTY</p>
            </div>
            <ul className="flex flex-col h-[100vh]">
              <li className="border-b p-3">
              <Link to='' >Service Center</Link>
              </li>
              <li className="border-b p-3">
              <Link to='' >Warranty Registration</Link>
              </li>
              <li className="border-b p-3">
              <Link to='' >Privacy Policy</Link>
              </li>
              <li className="border-b p-3">
              <Link to='' >Return Policy</Link>
              </li>
              <li className="border-b p-3">
              <Link to='' >Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        )}

        
        {activeMenu === "company" && (
          <div>
           <div className="flex p-3 gap-24 bg-[#f8f8f8]">
              <button className="" onClick={handleBackClick}>
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <p>COMPANY</p>
            </div>
            <ul className="flex flex-col h-[100vh]">
              <li className="border-b p-3">
              <Link to='' >About Us</Link>
              </li>
              <li className="border-b p-3">
              <Link to='' >Management</Link>
              </li>
              <li className="border-b p-3">
              <Link to='' >Blog</Link>
              </li>
              <li className="border-b p-3">
              <Link to='' >Careers</Link>
              </li>
              <li className="border-b p-3">
              <Link to='/contact' >Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
