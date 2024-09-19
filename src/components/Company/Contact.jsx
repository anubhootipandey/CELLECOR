import React from 'react';
import contact from '../../assets/contact.png';
import whatsapp from '../../assets/whatsapp.png';
import mail from '../../assets/mail.png';

const services = [
    {
        title: "Visit Our Service Centers",
        description: "Having trouble with your Cellecor Product? Find the nearest service center.",
        linkText: "➼ View More",
        link: "/service-center"
    },
    {
        title: "Check The Status Of Services Request",
        description: "Use your ticket to track your service request.",
        linkText: "➼ View More",
        link: "/service-center"
    },
    {
        title: "How to use your product correctly?",
        description: "FAQs for pairing a product and other troubleshooting.",
        linkText: "➼ View More",
        link: "/service-center"
    }
];

const contacts = [
    {
        img: whatsapp,
        title: "Chat With Us",
        description: "Available 24*7",
        contactInfo: "(+91)-8527578792"
    },
    {
        img: mail,
        title: "Email Us",
        description: "We Will Response Within 24 Hours",
        contactInfo: "support@cellecor.com"
    },
    {
        img: contact,
        title: "Landline",
        description: "Available Monday - Saturday (10 AM - 6 PM)",
        contactInfo: "1800-121-4704"
    }
];

const Contact = () => {
    return (
        <div className="container mx-auto py-7 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="mb-10 mx-6 text-center">
                <h1 className="text-4xl font-bold text-gray-800">CONTACT US</h1>
            </div>

            {/* Service Sections */}
            <div className="flex flex-col md:flex-row justify-center gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-[30rem] lg:w-[25rem] p-6 bg-gradient-to-b from-[#4bc7d7] to-[#148a9d] text-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg"
                    >
                        <h5 className="text-xl font-semibold mb-2">{service.title}</h5>
                        <p className="mb-4">{service.description}</p>
                        <a href={service.link} className="font-semibold hover:underline">{service.linkText}</a>
                    </div>
                ))}
            </div>

            {/* Contact Information */}
            <div className="mt-12 flex flex-col lg:flex-row justify-center gap-6">
                {contacts.map((contact, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-lg text-center w-full sm:w-[30rem] lg:w-[25rem]"
                    >
                        <img src={contact.img} alt={contact.title} className="mb-4 w-24 h-20 object-contain" />
                        <h3 className="text-xl font-semibold mb-2">{contact.title}</h3>
                        <p className="mb-4 text-gray-500">{contact.description}</p>
                        <button className="bg-blue-500 text-white px-10 py-4 rounded-3xl shadow-md hover:bg-blue-600 transition duration-300">
                            {contact.contactInfo}
                        </button>
                    </div>
                ))}
            </div>

            {/* Address */}
            <div className="mt-12">
                <h3 className='text-center text-gray-700 font-medium'>
                    Address: Crown Height, 703, 7th Floor, Sector 10, Rohini, New Delhi, Delhi 110085
                </h3>
            </div>
        </div>
    );
};

export default Contact;
