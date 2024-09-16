import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

const CustomPrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
      aria-label="Previous Slide"
    >
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} custom-next-arrow`}
      onClick={onClick}
      aria-label="Next Slide"
    >
    </button>
  );
};

const products = [
  {
    id: 1,
    defaultImage:"https://cellecor.com/cdn/shop/files/black2_93600fe1-7a38-4e80-a0e8-64ab10c3b467.png?v=1709556414",
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
    priceOne: "Rs. 3,999",
    priceTwo: "Rs. 1,499",
    discount: "63%",
  },
  {
    id: 2,
    defaultImage:"https://cellecor.com/cdn/shop/files/M5_Silver_01_d5923a13-2dd5-4fcd-8acd-e6230796b550.png?v=1705655630",
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
    priceOne: "Rs. 3,999",
    priceTwo: "Rs. 1,499",
    discount: "74%",
  },
  {
    id: 3,
    defaultImage:"https://cellecor.com/cdn/shop/files/img9_a02057a2-193d-4a33-bc6b-7a67d0d859e3.png?v=1704979296",
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
    priceOne: "Rs. 8,999",
    priceTwo: "Rs. 2,149",
    discount: "76%",
  },
  {
    id: 4,
    defaultImage:"https://cellecor.com/cdn/shop/files/img14_fa764436-5fd8-4a84-b11d-9e8d759f98eb.png?v=1703062180",
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
    priceOne: "Rs. 4,999",
    priceTwo: "Rs. 1,699",
    discount: "66%",
  },
  {
    id: 5,
    defaultImage:"https://cellecor.com/cdn/shop/files/Artboard7_5c7dcda1-79c7-471e-9fe5-5f1bc264f9eb.png?v=1701081359",
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
    priceOne: "Rs. 4,999",
    priceTwo: "Rs. 1,349",
    discount: "73%",
  },
  {
    id: 6,
    defaultImage:"https://cellecor.com/cdn/shop/files/CLB-30_White_01.png?v=1720445238",
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
    priceOne: "Rs. 3,999",
    priceTwo: "Rs. 949",
    discount: "76%",
  },
];

const BestSeller = () => {
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

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full py-10">
      <Slider {...settings}>
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

              

              <h3 className="text-xl p-3 font-semibold">{product.name}</h3>
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
      </Slider>
    </div>
  );
};

export default BestSeller;
