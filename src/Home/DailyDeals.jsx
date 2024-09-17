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
    defaultImage:"https://cellecor.com/cdn/shop/files/Artboard1_97681864-6b48-457f-8ba1-d1c538543f65.png?v=1710164084",
    hoverImage:"https://cellecor.com/cdn/shop/files/Artboard5_9235209b-4299-4317-a367-3116ba76e94a.png?v=1710164082",
    colors: [
      {
        color: "black",
        image:"https://cellecor.com/cdn/shop/files/Artboard1_1b9fe953-9b4b-4300-978f-376607795797.png?v=1710164084",
      },
      {
        color: "green",
        image:"https://cellecor.com/cdn/shop/files/Artboard1_97681864-6b48-457f-8ba1-d1c538543f65.png?v=1710164084",
      },
    ],
    name: "Cellecor A9 Pro Stark",
    priceOne: "Rs. 9,499.00",
    priceTwo: "Rs. 2,499.00",
    discount: "74%",
  },
  {
    id: 2,
    defaultImage:"https://cellecor.com/cdn/shop/files/Beats_03.png?v=1700656295",
    hoverImage:"https://cellecor.com/cdn/shop/files/Beats_02.png?v=1700656295",
    colors: [
      {
        color: "",
        image:"",
      },
      {
        color: "",
        image:"",
      },
    ],
    name: "Cellecor Beats",
    priceOne: "Rs. 5,999.00",
    priceTwo: "Rs. 1,899.00",
    discount: "72%",
  },
  {
    id: 3,
    defaultImage:"https://cellecor.com/cdn/shop/files/BS2_Black_02.png?v=1686565558",
    hoverImage: "https://cellecor.com/cdn/shop/files/BS2_Black_05.png?v=1686565558",
    colors: [
      {
        color: "black",
        image:"https://cellecor.com/cdn/shop/files/BS2_Black_02.png?v=1686565558",
      },
      {
        color: "green",
        image:"	https://cellecor.com/cdn/shop/files/BS2_Green_02.png?v=1686565558",
      },
      {
        color: "blue",
        image:"	https://cellecor.com/cdn/shop/files/BS2_Blue_02.png?v=1686565558",
      },
      {
        color: "gray",
        image:"https://cellecor.com/cdn/shop/files/BS2_Grey_02.png?v=1686565558",
      },
    ],
    name: "Cellecor BS-2",
    priceOne: "Rs. 3,499.00",
    priceTwo: "Rs. 999.00",
    discount: "71%",
  },
  {
    id: 4,
    defaultImage:"	https://cellecor.com/cdn/shop/files/BT703_Black_02.png?v=1700641323",
    hoverImage: "https://cellecor.com/cdn/shop/files/BT703_Black_04.png?v=1700641323",
    colors: [
      {
        color: "black",
        image:"	https://cellecor.com/cdn/shop/files/BT703_Black_02.png?v=1700641323",
      },
      {
        color: "blue",
        image:"https://cellecor.com/cdn/shop/files/BT703_Blue_02.png?v=1700641323",
      },
    ],
    name: "Cellecor BT 703",
    priceOne: "Rs. 3,999.00",
    priceTwo: "Rs. 1,299.00",
    discount: "68%",
  },
  {
    id: 5,
    defaultImage:"	https://cellecor.com/cdn/shop/files/Cruzio_03.png?v=1700658917",
    hoverImage:"https://cellecor.com/cdn/shop/files/Cruzio_02.png?v=1700658917",
    colors: [
      {
        color: "",
        image:"",
      },
      {
        color: "",
        image:"",
      },
    ],
    name: "Cellecor Cruzio",
    priceOne: "Rs. 4,999.00",
    priceTwo: "Rs. 1,899.00",
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
    priceOne: "Rs. 3,999.00",
    priceTwo: "Rs. 949.00",
    discount: "76%",
  },
  {
    id: 7,
    defaultImage:"https://cellecor.com/cdn/shop/files/Artboard1copy_6163289e-5889-4751-a040-7778da4bb979.png?v=1710151598",
    hoverImage: "https://cellecor.com/cdn/shop/files/03_a58eb9a2-2df1-45a0-b169-e977cd909c30.png?v=1710151598",
    colors: [
      {
        color: "black",
        image:"https://cellecor.com/cdn/shop/files/Artboard1_a9576b59-5bd2-44a0-b30d-7048e54e3e75.png?v=1710151598",
      },
      {
        color: "green",
        image:"	https://cellecor.com/cdn/shop/files/Artboard1copy3.png?v=1710151598",
      },
      {
        color: "blue",
        image:"https://cellecor.com/cdn/shop/files/Artboard1copy_6163289e-5889-4751-a040-7778da4bb979.png?v=1710151598",
      },
      {
        color: "gray",
        image:"https://cellecor.com/cdn/shop/files/Artboard1copy2_57b1b8fc-8262-43b5-8a6f-4144562e8e6c.png?v=1710151598",
      },
    ],
    name: "Cellecor M1 Stew",
    priceOne: "Rs. 3,999.00",
    priceTwo: "Rs. 1,449.00",
    discount: "64%",
  },
];

const DailyDeals = () => {
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
    <>

    <div>
      <h3 className="text-center text-4xl font-semibold lg:mt-20 mt-10">Daily Deals</h3>
    </div>

    <div className="w-full  py-5">
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
      </Slider>
    </div>

    </>
  );
};

export default DailyDeals;
