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

const DailyDeals = () => {
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

export default DailyDeals;
