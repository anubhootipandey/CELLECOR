import React from 'react';
import warranty_registration from "../../assets/warranty-img.webp";
import { FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaProductHunt, FaLaptop } from 'react-icons/fa';

const WarrantyRegistration = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">

     <div className="m-4">
     <h1 className='text-[1.6rem] font-bold mb-[3rem]'>WARRANTY REGISTRATION</h1>
      <div className="image">
        <img src={warranty_registration} alt="" />
      </div>
     </div>

     <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="bg-purple-100 shadow-md rounded-lg p-6 w-full max-w-5xl">
        <h2 className="text-center text-lg font-semibold text-gray-800 mb-4">Thank you for purchasing a Cellecor product</h2>
        <p className="text-center text-sm mb-6 cursor-pointer">Register for Warranty</p>

        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  className="pl-10 py-2 px-4 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  className="pl-10 py-2 px-4 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex items-center mt-2">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
                <span className="ml-2 text-sm text-gray-600">Accept to receive marketing news by email.</span>
              </div>
            </div>

            {/* Phone */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
              <div className="relative">
                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  className="pl-10 py-2 px-4 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="+91"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Purchase</label>
              <div className="relative">
                <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="date"
                  className="pl-10 py-2 px-4 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Your Product *</label>
              <div className="relative">
                <FaProductHunt className="absolute left-3 top-3 text-gray-400" />
                <select
                  className="pl-10 py-2 px-4 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Please select</option>
                  <option>Smart TV</option>
                  <option>TWS</option>
                </select>
              </div>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1">Platform</label>
              <div className="relative">
                <FaLaptop className="absolute left-3 top-3 text-gray-400" />
                <select
                  className="pl-10 py-2 px-4 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Please select</option>
                  <option>Amazon</option>
                  <option>Flipkart</option>
                  <option>Website</option>
                </select>
              </div>
            </div>

            <div className="relative md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Serial Number</label>
              <div className="relative">
                <input
                  type="text"
                  className="pl-10 py-2 px-4 w-full border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  );
};

export default WarrantyRegistration;
