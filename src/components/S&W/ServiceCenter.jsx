import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'; 
import service_center from "../../assets/Service_center.webp";

const serviceCenters = [
  {
    state: 'Andhra Pradesh',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Andaman and Nicobar',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Assam',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Bihar',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Chattisgarh',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Dadra Nagar Haveli',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Delhi',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Goa',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Gujarat',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Haryana',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Himachal Pradesh',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Jammu & Kashmir',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Jharkhand',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Karnataka',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
  {
    state: 'Kerala',
    centers: [
      {
        name: 'Lorem ipsum',
        address: '123 Lorem ipsum sit color',
        contact: 'Customer Care: 98765XXXXXX',
      },
    ],
  },
];

const serviceCenterItems = [
    {
        state: 'Madhya Pradesh',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'Maharashtra',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'Manipur',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'Meghalaya',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'Orissa',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'Puducherry',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'Punjab',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'Rajasthan',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'Tamil Nadu',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'Telangana',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'Tripura',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'Uttar Pradesh',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'Uttarakhand',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
      {
        state: 'West Bengal',
        centers: [
          {
            name: 'Lorem ipsum',
            address: '123 Lorem ipsum sit color',
            contact: 'Customer Care: 98765XXXXXX',
          },
        ],
      },
]

const ServiceCenter = () => {
    const [activeState, setActiveState] = useState(null);
  
    const toggleAccordion = (index, section) => {
      const key = `${section}-${index}`;
      if (activeState === key) {
        setActiveState(null);
      } else {
        setActiveState(key);
      }
    };
  
    return (
        <div className="font-sans bg-gray-100">
        <div className="m-4">
          <h1 className='text-[1.6rem] font-bold mb-[3rem]'>SERVICE CENTER</h1>
          <div className="image">
            <img src={service_center} alt="" />
          </div>
        </div>

        <div className="heading">
            <h2>Service Center List</h2>
        </div>
  
        <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-6">
          <main className="w-full lg:w-1/2 p-6">
            {serviceCenters.map((state, index) => (
              <div key={index} className="mb-6">
                <div
                  className="flex justify-between items-center bg-white p-4 rounded shadow-lg mb-4 cursor-pointer"
                  onClick={() => toggleAccordion(index, 'serviceCenters')}
                >
                  <h3 className="text-[18px] text-gray-700">{state.state}</h3>
                  <AiOutlinePlus className="text-2xl text-gray-600" />
                </div>
  
                {activeState === `serviceCenters-${index}` && (
                  <div className="pl-8">
                    {state.centers.map((center, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-4 rounded shadow-lg mb-4"
                      >
                        <h4 className="text-lg font-semibold text-gray-800">
                          {center.name}
                        </h4>
                        <p className="text-gray-600">{center.address}</p>
                        <p className="text-lg font-semibold text-gray-800">{center.contact}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </main>
  
          <main className="w-full lg:w-1/2 p-6">
            {serviceCenterItems.map((st, ind) => (
              <div key={ind} className="mb-6">
                <div
                  className="flex justify-between items-center bg-white p-4 rounded shadow-lg mb-4 cursor-pointer"
                  onClick={() => toggleAccordion(ind, 'serviceCenterItems')}
                >
                  <h3 className="text-[18px] text-gray-700">{st.state}</h3>
                  <AiOutlinePlus className="text-2xl text-gray-600" />
                </div>
  
                {activeState === `serviceCenterItems-${ind}` && (
                  <div className="pl-8">
                    {st.centers.map((center, id) => (
                      <div
                        key={id}
                        className="bg-white p-4 rounded shadow-lg mb-4"
                      >
                        <h4 className="text-lg font-semibold text-gray-800">
                          {center.name}
                        </h4>
                        <p className="text-gray-600">{center.address}</p>
                        <p className="text-lg font-semibold text-gray-800">{center.contact}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </main>
        </div>
      </div>
    );
  };
  
  export default ServiceCenter;