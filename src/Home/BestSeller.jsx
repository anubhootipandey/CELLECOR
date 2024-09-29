import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { Link } from "react-router-dom";

import QuickViewPopup from "./QuickViewPopup";

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
    defaultImage:
      "https://cellecor.com/cdn/shop/files/orange2_0093ed46-75d2-4707-9643-2f93e882cc03.png?v=1709556414",
    hoverImage:
      "https://cellecor.com/cdn/shop/files/MoodShot01_640x.png?v=1709556775",
    colors: [
      {
        color: "Orange",
        image:
          "https://cellecor.com/cdn/shop/files/orange2_0093ed46-75d2-4707-9643-2f93e882cc03.png?v=1709556414",
      },
      {
        color: "gray",
        image:
          "https://cellecor.com/cdn/shop/files/gray2_b511c9a8-41cd-4cef-8daf-a82880c9068e.png?v=1709556414",
      },
      {
        color: "blue",
        image:
          "https://cellecor.com/cdn/shop/files/blue2_3c45dbb5-5601-44f0-9b1e-42b91423aafb.png?v=1709556414",
      },
      {
        color: "green",
        image:
          "https://cellecor.com/cdn/shop/files/green2_a99b1325-622a-4f57-83d2-ec6eaf735ca8.png?v=1709556414",
      },
    ],
    name: "Cellecor M2 Aqua",
    priceOne: "Rs. 3,999.00",
    priceTwo: "Rs. 1,499.00",
    discount: "63%",
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
  {
    id: 5,
    defaultImage:
      "https://cellecor.com/cdn/shop/files/Artboard7_5c7dcda1-79c7-471e-9fe5-5f1bc264f9eb.png?v=1701081359",
    hoverImage:
      "https://cellecor.com/cdn/shop/files/05_211cb655-ab64-469f-befc-dcde7d8f5be3.png?v=1701081362",
    colors: [
      {
        color: "black",
        image:
          "https://cellecor.com/cdn/shop/files/Artboard7_5c7dcda1-79c7-471e-9fe5-5f1bc264f9eb.png?v=1701081359",
      },
      {
        color: "white",
        image:
          "https://cellecor.com/cdn/shop/files/Artboard2_d1033dd6-dfa4-454e-852b-78c2516d9f38.png?v=1701081359",
      },
      {
        color: "gray",
        image:
          "https://cellecor.com/cdn/shop/files/Artboard12_c55f9a4e-7708-47db-b314-c1e16260e269.png?v=1701081359",
      },
    ],
    name: "Cellecor BROPODS CB03 ACE",
    priceOne: "Rs. 4,999.00",
    priceTwo: "Rs. 1,349.00",
    discount: "73%",
  },
  {
    id: 6,
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
];

const CartPopup = ({ cartItem, closePopup, quantity, setQuantity }) => {
  const totalPrice =
    (parseFloat(cartItem.priceTwo.replace(/Rs\. /, "").replace(/,/g, "")) ||
      0) * quantity;

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 0));
  };

  const [isOpenOrder, setIsOpenOrder] = useState(false);
  const [isOpenTag, setIsOpenTag] = useState(false);

  const toggleMenuOrder = () => {
    setIsOpenOrder(!isOpenOrder);
  };

  const toggleMenuTag = () => {
    setIsOpenTag(!isOpenTag);
  };

  return (
    <div className="fixed inset-0 top-0 flex justify-end bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="bg-white px-2 relative w-[22rem]">
        <div className="flex justify-between items-center my-5">
          <p className="text-xl font-semibold">Shopping Cart</p>
          <button onClick={closePopup}>
            <i className="fa-solid fa-times text-xl"></i>
          </button>
        </div>
        {quantity > 0 ? (
          <>
            <p className="text-lg text-[#727272]">{quantity} items</p>

            <p className="text-[#69C69C] text-lg">
              You qualify for free shipping!
            </p>

            <div className="flex items-center my-5">
              <img
                src={cartItem.defaultImage}
                alt=""
                className="w-24 h-24 mb-3 mx-auto"
              />
              <div className="flex flex-col gap-3">
                <p className="text-lg">{cartItem.name}</p>
                <div className="flex gap-1">
                  <p className="line-through">{cartItem.priceOne}</p>
                  <p className="text-[#416C8F] font-semibold">
                    {cartItem.priceTwo}
                  </p>
                </div>
                <div className="flex justify-center items-center mt-2 border-2 w-20">
                  <button onClick={decrement} className=" p-2 rounded-l-lg">
                    -
                  </button>
                  <span className="mx-2 text-lg">{quantity}</span>
                  <button onClick={increment} className=" p-2 rounded-r-lg">
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-center text-4xl">
              <button className="border-2 p-3" onClick={toggleMenuOrder}>
                <i class="fa-regular fa-clipboard"></i>
              </button>
              <button className="border-2 p-3" onClick={toggleMenuTag}>
                <i class="fa-solid fa-tag"></i>
              </button>
            </div>

            {isOpenOrder && (
              <div className="fixed w-[21rem] px-3 py-10 bottom-2 bg-white border-t-2">
                <div className="flex items-center gap-2">
                  <i class="fa-regular fa-clipboard text-xl"></i>
                  <p className="text-lg py-2 font-semibold">
                    Order Special Instructions
                  </p>
                </div>

                <textarea
                  className="border-2 w-full h-28 p-3"
                  placeholder="Order Special Instructions"
                ></textarea>

                <div className="flex flex-col justify center gap-1 my-1">
                  <button className="text-white bg-black p-4 hover:text-black hover:bg-white border-2 border-black text-base font-semibold">
                    SAVE
                  </button>

                  <button
                    className="text-black bg-white p-4 hover:text-white hover:bg-black border-2 border-black text-base font-semibold"
                    onClick={toggleMenuOrder}
                  >
                    CANCEL
                  </button>
                </div>
              </div>
            )}

            {isOpenTag && (
              <div className="fixed w-[21rem]  bottom-2 bg-white border-t-2 px-3 py-10">
                <div className="flex items-center gap-2">
                  <i class="fa-solid fa-tag text-xl"></i>
                  <p className="text-lg font-semibold">Add A Coupon</p>
                </div>

                <p className="text-lg text-[#969696]">Coupon code content</p>

                <input type="text" className="w-full border-2 h-12 my-2 p-3" />

                <div className="flex flex-col justify center gap-1 my-1">
                  <button className="text-white bg-black p-4 hover:text-black hover:bg-white border-2 border-black text-base font-semibold">
                    SAVE
                  </button>

                  <button
                    className="text-black bg-white p-4 hover:text-white hover:bg-black border-2 border-black text-base font-semibold"
                    onClick={toggleMenuTag}
                  >
                    CANCEL
                  </button>
                </div>

              </div>
            )}

            <div className="my-4">
              <div className="flex justify-between text-lg font-semibold ">
              <p>Subtotal:</p>
              <p >Rs.{totalPrice.toFixed(2)}</p>
              </div>
              <div className="flex justify-between text-lg font-semibold ">
              <p>Total:</p>
              <p className="text-xl">Rs.{totalPrice.toFixed(2)}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 xl:gap-5 xl:py-16 py-5">
              <button className="bg-black text-white p-3 rounded-3xl font-semibold">
                BUY NOW
              </button>
              <button className="bg-white text-black border border-black p-3 font-semibold hover:bg-black hover:text-white">
                VIEW CART
              </button>
            </div>
            
          </>
        ) : (
          <div className="px-2">
            <p className="text-[#727272] text-lg">0 items</p>
            <p className="text-[#727272] ">Free shipping for all orders over Rs. 800.00!
            </p>
            <p className="text-center text-lg text-[#727272] py-5">Your cart is empty
            </p>
            <div className=" text-center ">
            <Link to="" className="bg-white font-medium border border-black py-3 px-16 hover:bg-black hover:text-white">CONTINUE SHOPPING</Link>
            </div>
          </div>
          
        )}
      </div>
    </div>
  );
};

const BestSeller = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedImages, setSelectedImages] = useState({});
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [cartItem, setCartItem] = useState({});
  const [quantity, setQuantity] = useState(0)

  const [quickViewItem, setQuickViewItem] = useState(null);
  const [isPopup, setIsPopup] = useState(false);

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



  const handleAddToCart = (product) => {
    setCartItem(product);
    setQuantity(1); 
    setIsPopupOpen(true);
  };

  const handleQuickView = (product) => {
    setQuickViewItem(product);
    setQuantity(1); 
    setIsPopup(true);
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
      <h3 className="text-center text-4xl font-semibold lg:mt-20 mt-10">Best Seller</h3>
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
                <span className="bg-[#2E4B31] text-white text-lg px-14 py-3 hover:text-[#2E4B31] hover:bg-white hover:border border-[#2E4B31]" onClick={() => handleAddToCart(product)}>
                  ADD TO CART
                </span>
              </button>

              <button className="absolute top-1 left-1 rounded-lg lg:opacity-0 opacity-100 group-hover:opacity-100 bg-white text-black font-semibold text-lg py-1 px-2 transition-opacity duration-500"
              onClick={() => handleQuickView(product)}>
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
              <button className="text-center bg-[#2E4B31] w-full text-white p-3 rounded-xl lg:hidden" onClick={() => handleAddToCart(product)}>
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

    

    {/* Popup for Cart Item */}
    {isPopupOpen && (
        <CartPopup
          cartItem={cartItem}
          closePopup={() => setIsPopupOpen(false)}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )} 


{isPopup && quickViewItem && (
        <QuickViewPopup
          product={quickViewItem}
          closePopup={() => setIsPopup(false)}
          quantity={quantity}
          setQuantity={setQuantity}
          />
      )}



    </>
  );
};

export default BestSeller;
