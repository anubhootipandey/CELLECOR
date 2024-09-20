import React from "react";
import whatsapp from "../assets/whatsappicon.webp";
import email from "../assets/emailicon.webp";
import landline from '../assets/landlineicon.webp';

const CustomerSupport = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">CUSTOMER SUPPORT</h2>

      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="p-10 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg">
          <h3 className=" mb-6">Visit Our Service Centers</h3>
          <p className="mb-6">
            Having trouble with your Cellcor Product? Find the nearest service center.
          </p>
          <a href="#" className="text-sm font-semibold">
            ➼ View More
          </a>
        </div>
        <div className="p-10 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg">
          <h3 className=" mb-6">Check The Status Of Services Request</h3>
          <p className="mb-6">
            Use your ticket to track your service request.
          </p>
          <a href="#" className="text-sm font-semibold">
            ➼ View More
          </a>
        </div>
        <div className="p-10 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white shadow-lg">
          <h3 className="mb-6">How to use your product correctly?</h3>
          <p className="mb-6">
            FAQs for pairing a product and other troubleshooting.
          </p>
          <a href="#" className="text-sm font-semibold">
            ➼ View More
          </a>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-[8rem] my-6 p-4">
              <img src={whatsapp} alt="WhatsApp" />
            </div>
          </div>
          <h3 className="text-2xl mb-4 font-semibold">Chat With Us</h3>
          <p className="text-gray-600 text-[17px]">Available 24x7</p>
          <p className="mt-6 bg-gray-100 px-16 py-4 rounded-full shadow-lg inline-block">
            (+91)-8527578792
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-[8rem] my-6 p-4">
              <img src={email} alt="Email" />
            </div>
          </div>
          <h3 className="text-2xl mb-4 font-semibold">Email Us</h3>
          <p className="text-gray-600 text-[17px]">We Will Respond Within 24 Hours</p>
          <p className="mt-6 bg-gray-100 px-16 py-4 rounded-full shadow-lg inline-block">
            support@cellecor.com
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-[8rem] my-6 p-4">
              <img src={landline} alt="Phone" />
            </div>
          </div>
          <h3 className="text-2xl mb-4 font-semibold">Landline</h3>
          <p className="text-gray-600 text-[17px]">Available Monday - Saturday (10 AM - 6 PM)</p>
          <p className="mt-6 bg-gray-100 px-16 py-4 rounded-full shadow-lg inline-block">
            1800-121-4704
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSupport;
