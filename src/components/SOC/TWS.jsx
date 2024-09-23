import React, {useState} from "react";
import tws from "../../assets/tws.png";

const products = [
  {
    id: 1,
    defaultImage:"https://cellecor.com/cdn/shop/files/Artboard8_d753ef57-c2c6-4748-927c-3f0d35a3a792.png?v=1697027534",
    hoverImage:"https://cellecor.com/cdn/shop/files/MoodShot01_640x.png?v=1709556775",
    colors: [
      {
        color: "Orange",
        image:"https://cellecor.com/cdn/shop/files/orange2_0093ed46-75d2-4707-9643-2f93e882cc03.png?v=1709556414",
      },
      {
        color: "gray",
        image:"https://cellecor.com/cdn/shop/files/gray2_b511c9a8-41cd-4cef-8daf-a82880c9068e.png?v=1709556414",
      },
      {
        color: "blue",
        image:"https://cellecor.com/cdn/shop/files/blue2_3c45dbb5-5601-44f0-9b1e-42b91423aafb.png?v=1709556414",
      },
      {
        color: "green",
        image:"https://cellecor.com/cdn/shop/files/green2_a99b1325-622a-4f57-83d2-ec6eaf735ca8.png?v=1709556414",
      },
    ],
    name: "Cellecor M2 Aqua",
    priceOne: "Rs. 3,999.00",
    priceTwo: "Rs. 1,499.00",
    discount: "63%",
  },
  {
    id: 2,
    defaultImage:"https://cellecor.com/cdn/shop/files/CB05_Black_02.png?v=1686915717",
    hoverImage:"	https://cellecor.com/cdn/shop/files/M5moodshot.png?v=1705655630",
    colors: [
      {
        color: "black",
        image:"https://cellecor.com/cdn/shop/files/M5_Black_01_5827f3b8-4b2c-439f-b6b5-628f8b882652.png?v=1705655630",
      },
      {
        color: "gray",
        image:"https://cellecor.com/cdn/shop/files/M5_Silver_01_d5923a13-2dd5-4fcd-8acd-e6230796b550.png?v=1705655630",
      },
    ],
    name: "Cellecor M5 Eaze",
    priceOne: "Rs. 3,999.00",
    priceTwo: "Rs. 1,499.00",
    discount: "74%",
  },
  {
    id: 3,
    defaultImage:"https://cellecor.com/cdn/shop/files/TWS_CB06_A_White_01.png?v=1686915893",
    hoverImage: "	https://cellecor.com/cdn/shop/files/M7_A.png?v=1704979567",
    colors: [
      {
        color: "black",
        image:"https://cellecor.com/cdn/shop/files/img9_a02057a2-193d-4a33-bc6b-7a67d0d859e3.png?v=1704979296",
      },
      {
        color: "green",
        image:"https://cellecor.com/cdn/shop/files/img14_8db74bad-007a-499b-a2ae-ed76a746fdc1.png?v=1704979296",
      },
      {
        color: "orange",
        image:"https://cellecor.com/cdn/shop/files/img4_b9febb0f-e9f7-4140-897d-c48516b26421.png?v=1704979296",
      },
    ],
    name: "Cellecor M7 Pro Ray",
    priceOne: "Rs. 8,999.00",
    priceTwo: "Rs. 2,149.00",
    discount: "76%",
  },
  {
    id: 4,
    defaultImage:"https://cellecor.com/cdn/shop/files/CB55ACE_Black_02.png?v=1705492812",
    hoverImage: "https://cellecor.com/cdn/shop/files/m3-air.png?v=1703062180",
    colors: [
      {
        color: "black",
        image:"https://cellecor.com/cdn/shop/files/img14_fa764436-5fd8-4a84-b11d-9e8d759f98eb.png?v=1703062180",
      },
      {
        color: "blue",
        image:"https://cellecor.com/cdn/shop/files/img4_336dd559-ca88-4130-bfcd-f0bbba489efc.png?v=1703062180",
      },
      {
        color: "gray",
        image:"https://cellecor.com/cdn/shop/files/img9_92bab978-4671-425c-8059-51e36d3a2d61.png?v=1703062178",
      },
    ],
    name: "Cellecor M3 Air",
    priceOne: "Rs. 4,999.00",
    priceTwo: "Rs. 1,699.00",
    discount: "66%",
  },
  {
    id: 5,
    defaultImage:"https://cellecor.com/cdn/shop/files/Artboard3_50784929-7851-4c48-9ee0-603081a6470f.png?v=1697023736",
    hoverImage:"https://cellecor.com/cdn/shop/files/05_211cb655-ab64-469f-befc-dcde7d8f5be3.png?v=1701081362",
    colors: [
      {
        color: "black",
        image:"https://cellecor.com/cdn/shop/files/Artboard7_5c7dcda1-79c7-471e-9fe5-5f1bc264f9eb.png?v=1701081359",
      },
      {
        color: "white",
        image:"https://cellecor.com/cdn/shop/files/Artboard2_d1033dd6-dfa4-454e-852b-78c2516d9f38.png?v=1701081359",
      },
      {
        color: "gray",
        image:"https://cellecor.com/cdn/shop/files/Artboard12_c55f9a4e-7708-47db-b314-c1e16260e269.png?v=1701081359",
      },
    ],
    name: "Cellecor BROPODS CB03 ACE",
    priceOne: "Rs. 4,999.00",
    priceTwo: "Rs. 1,349.00",
    discount: "73%",
  },
  {
    id: 6,
    defaultImage:"https://cellecor.com/cdn/shop/files/CB55_01.png?v=1695811150",
    hoverImage:"https://cellecor.com/cdn/shop/files/clb30moodshoot02.png?v=1703061415",
    colors: [
      {
        color: "white",
        image:"https://cellecor.com/cdn/shop/files/CLB-30_White_01.png?v=1720445238",
      },
      {
        color: "gray",
        image:"https://cellecor.com/cdn/shop/files/CLB-30_Grey_01.png?v=1720445246",
      },
    ],
    name: "Cellecor CLB-30 BEATZ",
    priceOne: "Rs. 3,490.00",
    priceTwo: "Rs. 949.00",
    discount: "76%",
  },
];

const TWS = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImages, setSelectedImages] = useState({});

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleColorChange = (index, image) => {
    setSelectedImages((prevImages) => ({
      ...prevImages,
      [index]: image,
    }));
  };

  return (
    <div className="min-h-screen">
      <div className="image">
          <img src={tws} alt="" />
        </div>
      <div className="max-w-screen-xl mx-auto my-[50px] flex">
        <aside className="w-72 mr-6">
          <div>
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-2 text-[14px]">
              <li className="flex items-center">
                <span>TWS</span>
              </li>
              <li className="flex items-center">
                <span>SMART WATCHES</span>
              </li>
              <li className="flex items-center">
                <span>SMART TV</span>
              </li>
              <li className="flex items-center">
                <span>NECKBAND</span>
              </li>
              <li className="flex items-center">
                <span>HEADPHONES</span>
              </li>
              <li className="flex items-center">
                <span>SPEAKER</span>
              </li>
              <li className="flex items-center">
                <span>MOBILE ACCESSORIES</span>
              </li>
            </ul>
          </div>

          {/* Color Section */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Color</h2>
            <div className="grid grid-cols-5 gap-2">
              <div className="w-8 h-8 bg-black rounded-full"></div>
              <div className="w-8 h-8 bg-blue-700 rounded-full"></div>
              <div className="w-8 h-8 bg-red-800 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
              <div className="w-8 h-8 bg-green-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
              <div className="w-8 h-8 bg-yellow-600 rounded-full"></div>
              <div className="w-8 h-8 bg-purple-900 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Price</h2>
            <div className="flex items-center space-x-2">
              <input type="text" placeholder="0" className="border p-2 w-20" />
              <span>to</span>
              <input type="text" placeholder="2699" className="border p-2 w-20" />
            </div>
            <button className="mt-4 bg-black text-white w-full px-4 py-2 rounded">Apply</button>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Availability</h2>
            <ul>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-[14px]">In Stock (14)</span>
              </li>
              <li className="flex items-center">
                <input type="checkbox" className="mr-2" disabled />
                <span className="text-gray-500 text-[14px]">Out of Stock (0)</span>
              </li>
            </ul>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              <h2>VIEW AS</h2>
            </div>

            <div className="flex space-x-4 items-center">
              <h2 className="text-[17px]">ITEMS PER PAGE</h2>
              <select className="border p-2">
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
                <option>50</option>
              </select>

              <h2 className="text-[17px]">SORT BY</h2>
              <select className="border p-2">
                <option>Featured</option>
                <option>Best selling</option>
                <option>Alphabetically, A-Z</option>
                <option>Alphabetically, Z-A</option>
                <option>Price, low to high</option>
                <option>Price, high to low</option>
                <option>Date, old to new</option>
                <option>Date, new to old</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-3 gap-6">
          {products.map((product, index) => (
          <div key={product.id} className="p-3">
            <div
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={selectedImages[index] || (hoveredIndex === index ? product.hoverImage : product.defaultImage)}
                alt={product.name}
                className="w-full h-auto object-cover border transition-transform duration-1000 transform group-hover:scale-105"
              />

              <button
                className={`max-lg:hidden absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text font-semibold transition-opacity duration-1000 ${hoveredIndex === index ? "opacity-100" : "opacity-0"}`}
              >
                <span className="bg-[#2E4B31] text-white text-lg px-14 py-3 hover:text-[#2E4B31] hover:bg-white hover:border border-[#2E4B31]">
                  ADD TO CART
                </span>
              </button>

              <button className="absolute top-1 left-1 rounded-lg lg:opacity-0 opacity-100 group-hover:opacity-100 bg-white text-black font-semibold text-lg py-1 px-2 transition-opacity duration-500">
                <span className="mr-2">
                  <i className="fa-solid fa-eye"></i>
                </span>
                Quick View
              </button>
              <div className="absolute top-2 right-2 bg-[#2274B6] text-white text-sm font-medium py-1 px-2">
                Save {product.discount}
              </div>
            </div>

            <div className="text-center bg-[#ECECEC] p-1">


              {/* Add to cart button for mobile view */}
              <button className="text-center bg-[#2E4B31] w-full text-white p-3 rounded-xl lg:hidden">
                Add to cart
              </button>

              

              <h3 className="text-xl p-3">{product.name}</h3>
              <div className="flex items-center justify-center gap-2">
                <p className="text-black font-semibold line-through">
                  {product.priceOne}
                </p>
                <p className="text-lg font-semibold text-[#416C8F]">
                  {product.priceTwo}
                </p>
              </div>
            </div>

            <div className="flex justify-center p-4 rounded-b-xl bg-[#ECECEC]">
              {product.colors.map((colorOption) => (
                <button
                  key={colorOption.color}
                  className={`w-6 h-6 m-[2px] rounded-full border focus:ring-2 ring-offset-2 ring-${colorOption.color}-300`}
                  style={{ backgroundColor: colorOption.color }}
                  onClick={() => handleColorChange(index, colorOption.image)}
                ></button>
              ))}
            </div>
          </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TWS;
