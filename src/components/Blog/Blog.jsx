import React, { useState } from "react";
import { Link } from "react-router-dom";
import { articles } from "./Recent-blog"; // Import the article data

const products = [
  {
    id: 1,
    defaultImage:
      "https://cellecor.com/cdn/shop/files/CLB-30_White_01.png?v=1720445238",
    hoverImage:
      "https://cellecor.com/cdn/shop/files/clb30moodshoot02.png?v=1703061415",
    colors: [
      {
        color: "white",
        image:
          "https://cellecor.com/cdn/shop/files/CLB-30_White_01.png?v=1720445238",
      },
      {
        color: "gray",
        image:
          "https://cellecor.com/cdn/shop/files/CLB-30_Grey_01.png?v=1720445246",
      },
    ],
    name: "Cellecor CLB-30 BEATZ",
    priceOne: "Rs. 3,999.00",
    priceTwo: "Rs. 949.00",
    discount: "76%",
  },
  {
    id: 2,
    defaultImage:
      "https://cellecor.com/cdn/shop/files/M5_Silver_01_d5923a13-2dd5-4fcd-8acd-e6230796b550.png?v=1705655630",
    hoverImage:
      "	https://cellecor.com/cdn/shop/files/M5moodshot.png?v=1705655630",
    colors: [
      {
        color: "black",
        image:
          "https://cellecor.com/cdn/shop/files/M5_Black_01_5827f3b8-4b2c-439f-b6b5-628f8b882652.png?v=1705655630",
      },
      {
        color: "gray",
        image:
          "https://cellecor.com/cdn/shop/files/M5_Silver_01_d5923a13-2dd5-4fcd-8acd-e6230796b550.png?v=1705655630",
      },
    ],
    name: "Cellecor M5 Eaze",
    priceOne: "Rs. 3,999.00",
    priceTwo: "Rs. 1,499.00",
    discount: "74%",
  },
  {
    id: 3,
    defaultImage:
      "https://cellecor.com/cdn/shop/files/img9_a02057a2-193d-4a33-bc6b-7a67d0d859e3.png?v=1704979296",
    hoverImage: "	https://cellecor.com/cdn/shop/files/M7_A.png?v=1704979567",
    colors: [
      {
        color: "black",
        image:
          "https://cellecor.com/cdn/shop/files/img9_a02057a2-193d-4a33-bc6b-7a67d0d859e3.png?v=1704979296",
      },
      {
        color: "green",
        image:
          "https://cellecor.com/cdn/shop/files/img14_8db74bad-007a-499b-a2ae-ed76a746fdc1.png?v=1704979296",
      },
      {
        color: "orange",
        image:
          "https://cellecor.com/cdn/shop/files/img4_b9febb0f-e9f7-4140-897d-c48516b26421.png?v=1704979296",
      },
    ],
    name: "Cellecor M7 Pro Ray",
    priceOne: "Rs. 8,999.00",
    priceTwo: "Rs. 2,149.00",
    discount: "76%",
  },
  {
    id: 4,
    defaultImage:
      "https://cellecor.com/cdn/shop/files/img14_fa764436-5fd8-4a84-b11d-9e8d759f98eb.png?v=1703062180",
    hoverImage: "https://cellecor.com/cdn/shop/files/m3-air.png?v=1703062180",
    colors: [
      {
        color: "black",
        image:
          "https://cellecor.com/cdn/shop/files/img14_fa764436-5fd8-4a84-b11d-9e8d759f98eb.png?v=1703062180",
      },
      {
        color: "blue",
        image:
          "https://cellecor.com/cdn/shop/files/img4_336dd559-ca88-4130-bfcd-f0bbba489efc.png?v=1703062180",
      },
      {
        color: "gray",
        image:
          "https://cellecor.com/cdn/shop/files/img9_92bab978-4671-425c-8059-51e36d3a2d61.png?v=1703062178",
      },
    ],
    name: "Cellecor M3 Air",
    priceOne: "Rs. 4,999.00",
    priceTwo: "Rs. 1,699.00",
    discount: "66%",
  },
];

const Blog = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedColor, setSelectedColor] = useState({});

  const handleColorChange = (productId, colorImage) => {
    setSelectedColor((prevSelectedColor) => ({
      ...prevSelectedColor,
      [productId]: colorImage,
    }));
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="p-5">
        <div className="flex justify-between ">
          <h3 className="text-2xl font-semibold">BLOG</h3>
          <i
            class="fa-solid fa-bars-staggered text-2xl lg:hidden"
            onClick={toggleMenu}
          ></i>
        </div>
        <div className="flex items-center flex-row gap-2 text-[#999999]">
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right text-sm"></i>
          <Link to="/blog">Blog</Link>
        </div>
      </div>

      <div className="flex">
        <div className=" p-2 w-80 flex-none max-lg:hidden">
          <h6 className="text-sm font-bold mb-5">RECENT ARTICLES</h6>

          {articles.map((article, index) => (
            <div key={index}>
              <Link
                to={article.link}
                className="font-semibold hover:border-b-2 border-black"
              >
                {article.title}
              </Link>
              <p className="py-2 italic text-[#999999]">{article.date}</p>
            </div>
          ))}

          <div>
            <h6 className="text-sm font-bold my-5">BEST SELLER</h6>
          </div>

          {products.map((product) => (
            <div key={product.id} className="flex gap-1 mt-2">
              <div className="relative">
                <img
                  src={
                    hoveredProduct === product.id
                      ? product.hoverImage
                      : selectedColor[product.id] || product.defaultImage
                  }
                  alt={product.name}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="w-32 h-auto"
                />
                <span className="absolute top-6 bg-[#2274B6] text-white text-sm font-medium px-1">
                  Save {product.discount}
                </span>
              </div>
              <div>
                <Link
                  to={products.link}
                  className="font-bold mt-2 hover:border-b-2 border-black"
                >
                  {product.name}
                </Link>
                <p className="flex flex-col">
                  <span className="line-through text-[#999999]">
                    {product.priceOne}
                  </span>
                  <span className="font-bold text-[#416C8F]">
                    {product.priceTwo}
                  </span>{" "}
                </p>
                <div className="flex gap-2 mt-2">
                  {product.colors.map((colorOption) => (
                    <button
                      key={colorOption.color}
                      className={`w-5 h-5  rounded-full border focus:ring-2 ring-offset-2 ring-${colorOption.color}-300`}
                      style={{ backgroundColor: colorOption.color }}
                      onClick={() =>
                        handleColorChange(product.id, colorOption.image)
                      }
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <div className="flex gap-5 items-center p-2">
            <div>
              <Link
                to="/blog/cellecor-bring-in-the-theatre-like-feel-at-home-with-smart-tv-s65"
                className="text-[#BA7A2D] border-2 rounded border-[#BA7A2D] px-2  py-1 font-semibold"
              >
                Featured
              </Link>
            </div>
            <Link
              to="/blog/cellecor-bring-in-the-theatre-like-feel-at-home-with-smart-tv-s65"
              className="text-xl font-semibold"
            >
              Cellecor Gadgets Limited Bring in the Theatre Like Feel at Home
              with Smart TV S-65
            </Link>
          </div>

          <p className="text-sm text-[#3C3C3C] leading-7 my-8 mx-1">
            Do you have a hard time visiting the theaters for movies as you are
            usually short of time? Moreover, you also find it lacking comfort.
            So, say no to all...
          </p>

          <p className="text-sm text-[#3C3C3C] mx-1 my-8 italic">
            On Aug 03,2024
          </p>

          <Link
            to="/blog/cellecor-bring-in-the-theatre-like-feel-at-home-with-smart-tv-s65"
            className="text-lg border px-8 py-4 mx-1 border-black font-semibold"
          >
            VIEW DETAILS
          </Link>

          <div className="w-full mt-10">
            <img
              src="https://cellecor.com/cdn/shop/articles/tv_1066x.jpg?v=1722675188"
              alt=""
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="flex flex-col items-center gap-5 mt-20">
            <div className="flex flex-col lg:flex-row m-1 gap-5 mb-10">
              <div className="overflow-hidden">
                <img
                  src="https://cellecor.com/cdn/shop/articles/TWS_copy_1066x.png?v=1722084478"
                  alt=""
                  className="hover:scale-110 overflow-hidden tranform transition duration-500"
                />
              </div>
              <div>
                <Link
                  to="/blog/the-cellecor-bropods-c103-promises-innovation-in-every-beat"
                  className="text-xl font-semibold"
                >
                  The Cellecor BROPODS C103 Promises Innovation in Every Beat
                </Link>
                <p className="text-sm text-[#3C3C3C] my-10">
                  Are you a music lover or someone who has a heart for gaming?
                  We have exciting news for you. Cellecor has launched BROPODS
                  C103 that will definitely make your heart...
                </p>
                <p className="mb-10 text-sm italic text-[#3C3C3C] ">
                  On Jul 27,2024
                </p>
                <div>
                  <Link
                    to="/blog/the-cellecor-bropods-c103-promises-innovation-in-every-beat"
                    className="text-lg border px-8 py-4  border-black font-semibold "
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row m-1 gap-5 mb-10">
              <div className="overflow-hidden">
                <img
                  src="https://cellecor.com/cdn/shop/articles/Art__02111_1066x.png?v=1719927215"
                  alt=""
                  className="w-full lg:w-[70rem] hover:scale-110 overflow-hidden tranform transition duration-500"
                />
              </div>
              <div>
                <Link
                  to="/blog/cellecor-gadgets-partners-for-samsung-tizen-os"
                  className="text-xl font-semibold"
                >
                  Transforming Home Entertainment: Cellecor Gadgets Ltd Partners
                  for Samsung Tizen OS
                </Link>
                <p className="text-sm text-[#3C3C3C] my-10">
                  Are you a tech enthusiast? This news might sound like music to
                  your ears. Cellecor Gadgets Limited has announced a strategic
                  alliance to incorporate Samsung Tizen OS into all of...
                </p>
                <p className="mb-10 text-sm italic text-[#3C3C3C] ">
                  On Jul 27,2024
                </p>
                <div>
                  <Link
                    to="/blog/cellecor-gadgets-partners-for-samsung-tizen-os"
                    className="text-lg border px-8 py-4  border-black font-semibold "
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row m-1 gap-5 mb-10">
              <div className="overflow-hidden">
                <img
                  src="	https://cellecor.com/cdn/shop/articles/Artboard_4_720x.jpg?v=1719562670"
                  className="w-full lg:w-[65rem] hover:scale-110 overflow-hidden tranform transition duration-500"
                  alt=""
                />
              </div>
              <div>
                <Link
                  to="/blog/wear-oasis-of-luxury-on-wrist-with-m6-twist-smart-watch"
                  className="text-xl font-semibold"
                >
                  Wear Oasis of Luxury on Wrist with M6 Twist Smart Watch
                </Link>
                <p className="text-sm text-[#3C3C3C] my-10">
                  Are you a Smart Watch enthusiast? Or someone who loves to keep
                  the fashion quotient high. Whatever may be the reason, the M6
                  Smart Watch can be a luxury addition...
                </p>
                <p className="mb-10 text-sm italic text-[#3C3C3C] ">
                  On Jun 28, 2024
                </p>
                <div>
                  <Link
                    to="/blog/wear-oasis-of-luxury-on-wrist-with-m6-twist-smart-watch"
                    className="text-lg border px-8 py-4  border-black font-semibold "
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row m-1 gap-5 mb-10">
              <div className="overflow-hidden">
                <img
                  src="	https://cellecor.com/cdn/shop/articles/Artboard_2_1066x.jpg?v=1719484231"
                  className="w-full lg:w-[65rem] hover:scale-110 overflow-hidden tranform transition duration-500"
                  alt=""
                />
              </div>
              <div>
                <Link
                  to="/blog/music-bonanza-at-home-with-cellecor-bropods-cb44-ace"
                  className="text-xl font-semibold"
                >
                  Music Bonanza at Home With Cellecor BROPODS CB44 Ace
                </Link>
                <p className="text-sm text-[#3C3C3C] my-10">
                  Do you know music has the properties of healing and
                  motivation? Whether you are someone who loves listening to
                  music while exercising or a therapist who uses music to
                  heal...
                </p>
                <p className="mb-10 text-sm italic text-[#3C3C3C] ">
                  On Jun 27, 2024
                </p>
                <div>
                  <Link
                    to="/blog/music-bonanza-at-home-with-cellecor-bropods-cb44-ace"
                    className="text-lg border px-8 py-4  border-black font-semibold "
                  >
                    VIEW DETAILS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* Recent Articles Hamburger */}
      {isOpen && (
        <div className=" p-2 w-80 fixed inset-0 z-50 bg-white overflow-x-auto">
          <div className="flex justify-between items-center mb-5">
            <h6 className="text-xl font-semibold">Sidebar</h6>
            <i
              className="fa-solid fa-times text-2xl cursor-pointer"
              onClick={toggleMenu}
            ></i>
          </div>

          <h6 className="text-sm font-bold mb-5">RECENT ARTICLES</h6>

          {articles.map((article, index) => (
            <div key={index}>
              <Link
                to={article.link}
                className="font-semibold hover:border-b-2 border-black"
              >
                {article.title}
              </Link>
              <p className="py-2 italic text-[#999999]">{article.date}</p>
            </div>
          ))}

          <div>
            <h6 className="text-sm font-bold my-5">BEST SELLER</h6>
          </div>

          {products.map((product) => (
            <div key={product.id} className="flex gap-1 mt-2">
              <div className="relative">
                <img
                  src={
                    hoveredProduct === product.id
                      ? product.hoverImage
                      : selectedColor[product.id] || product.defaultImage
                  }
                  alt={product.name}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="w-32 h-auto"
                />
                <span className="absolute top-6 bg-[#2274B6] text-white text-sm font-medium px-1">
                  Save {product.discount}
                </span>
              </div>
              <div>
                <Link
                  to={products.link}
                  className="font-bold mt-2 hover:border-b-2 border-black"
                >
                  {product.name}
                </Link>
                <p className="flex flex-col">
                  <span className="line-through text-[#999999]">
                    {product.priceOne}
                  </span>
                  <span className="font-bold text-[#416C8F]">
                    {product.priceTwo}
                  </span>{" "}
                </p>
                <div className="flex gap-2 mt-2">
                  {product.colors.map((colorOption) => (
                    <button
                      key={colorOption.color}
                      className={`w-5 h-5  rounded-full border focus:ring-2 ring-offset-2 ring-${colorOption.color}-300`}
                      style={{ backgroundColor: colorOption.color }}
                      onClick={() =>
                        handleColorChange(product.id, colorOption.image)
                      }
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Blog;
