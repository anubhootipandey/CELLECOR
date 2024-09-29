import React, { useState } from "react";

const QuickViewPopup = ({ product, closePopup, quantity, setQuantity }) => {
  const [selectedColor, setSelectedColor] = useState(
    product.colors[0]?.color || ""
  );
  const [displayedImage, setDisplayedImage] = useState(product.defaultImage);
  const [compareColors, setCompareColors] = useState([]); 
  const [isComparePopupOpen, setIsComparePopupOpen] = useState(false); 

  const totalPrice =
    (parseFloat(product.priceTwo.replace(/Rs\. /, "").replace(/,/g, "")) || 0) *
    quantity;

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  
  const handleColorCompare = (colorOption) => {
    if (compareColors.some((color) => color.color === colorOption.color)) {
      setCompareColors((prev) =>
        prev.filter((color) => color.color !== colorOption.color)
      );
    } else {
      setCompareColors((prev) => [...prev, colorOption]);
    }
  };

  
  const handleColorClick = (image) => {
    setDisplayedImage(image); 
    setIsComparePopupOpen(false); 
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-5">
      <div className="bg-white p-6 rounded- p-4 relative">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-3xl"
        >
          <i className="fa-solid fa-times"></i>
        </button>

        <div className="flex flex-col lg:flex-row items-center gap-5 overflow-x-auto max-h-[80vh]">
          <div>
            <img
              src={displayedImage}
              alt={product.name}
              className="w-full h-auto my-4 max-w-96"
            />
          </div>

          <div className="p-1">
            <p className="text-xl font-semibold">{product.name}</p>

            <div className="text-[#E95144] flex gap-2 py-2">
              <div>
                <i className="fa-solid fa-fire-flame-curved"></i>
              </div>
              <p>5 sold in last 17 hours</p>
            </div>

            <p className="text-[#3C3C3C] text-lg">Availability: In Stock</p>
            <p className="text-[#3C3C3C] text-lg">Product Type: Smart Watch</p>

            <div className="flex gap-2 py-3 text-lg">
              <p className="line-through font-semibold">{product.priceOne}</p>
              <p className="text-[#416C8F] font-semibold">{product.priceTwo}</p>
            </div>


            <div className="">
              <p className="text-lg font-medium">
                Color: <span className="text-[#3C3C3C]">{selectedColor}</span>
              </p>
            </div>

            
            <div className="flex gap-2 py-3">
              {product.colors.map((colorOption) => (
                <button
                  key={colorOption.color}
                  className={`w-8 h-8 rounded-full border focus:ring-2 ring-offset-2 ring-${
                    colorOption.color
                  }-300 ${
                    selectedColor === colorOption.color
                      ? "ring-2 ring-blue-500"
                      : ""
                  }`}
                  style={{ backgroundColor: colorOption.color }}
                  onClick={() => {
                    setSelectedColor(colorOption.color); 
                    setDisplayedImage(colorOption.image); 
                  }}
                  aria-label={`Select ${colorOption.color} color`}
                ></button>
              ))}
            </div>

            <div>
              <p className="mt-1 text-lg font-lg">Quantity:</p>
              <div className="flex justify-center items-center mt-2 border-2 w-20">
                <button onClick={decrement} className="p-2 rounded-l-lg">
                  -
                </button>
                <span className="mx-2 text-lg">{quantity}</span>
                <button onClick={increment} className="p-2 rounded-r-lg">
                  +
                </button>
              </div>
            </div>

            <div className="my-4">
              <div className="flex font-medium gap-1">
                <p>Subtotal: </p>
                <p className="font-semibold"> Rs.{totalPrice.toFixed(2)}</p>
              </div>
            </div>

            
            <div>
              <button
                className=""
                onClick={() => setIsComparePopupOpen(true)} 
              >
                <i class="fa-solid fa-palette text-red-500"></i> <span className="hover:border-b-2 border-black"> Compare Color</span>
              </button>
            </div>

            <div className="py-5 flex items-center gap-5">
              <div className="text-center bg-black w-full text-white text- p-4 hover:bg-white hover:text-black border border-black">
                <button>ADD TO CART</button>
              </div>
              <div className="border-2 text-2xl p-2 px-3 rounded-full cursor-pointer">
                <i class="fa-regular fa-heart"></i>
              </div>

              <div className=" text-4xl rounded-full cursor-pointer">
                <i class="fa-solid fa-share-nodes"></i>
              </div>
            </div>

            <div className="text-center bg-[#1990C6] w-full text-white text- p-4 hover:bg-black">
              <button>Buy it now</button>
            </div>

            <div className="flex gap-5 py-3">
              <div>
                <img
                  src="	https://cellecor.com/cdn/shop/files/1-year-Warranty_11.jpg?v=1710945225"
                  alt=""
                />
              </div>

              <div>
                <img
                  src="https://cellecor.com/cdn/shop/files/7-Days-Replacement_11.jpg?v=1710945224"
                  alt=""
                />
              </div>

              <div>
                <img
                  src="	https://cellecor.com/cdn/shop/files/Free-Shipping_11.jpg?v=1710945225"
                  alt=""
                />
              </div>
              <div>
                <img
                  src="	https://cellecor.com/cdn/shop/files/Secure-Payment_11.jpg?v=1710945224"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Compare Color Popup */}
      {isComparePopupOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 ]">
          <div className="bg-white p-6 rounded- p-4 m-5 max-w-[50rem]">
            <div>
              <div className="flex justify-between pb-4">
                <p className="font-semibold text-lg ">Compare Colors</p>

                <button className="text-2xl" onClick={() => setIsComparePopupOpen(false)}>
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>

              <div className="flex gap-2 mb-4">
                {product.colors.map((colorOption) => (
                  <button
                    key={colorOption.color}
                    className={`w-8 h-8 rounded-full border focus:ring-2 ring-offset-2 ring-${
                      colorOption.color
                    }-300 ${
                      compareColors.some(
                        (color) => color.color === colorOption.color
                      )
                        ? "ring-2 ring-blue-500"
                        : ""
                    }`}
                    style={{ backgroundColor: colorOption.color }}
                    onClick={() => handleColorCompare(colorOption)} 
                  ></button>
                ))}
              </div>


              {compareColors.length > 0 ? (
                <div className="flex gap-4 overflow-x-scroll no-scrollbar whitespace-nowrap">
                  {compareColors.map((colorOption) => (
                    <div key={colorOption.color} className="text-center flex-shrink-0 ">
                      <img
                        src={colorOption.image}
                        alt={colorOption.color}
                        className="w-52 h-auto cursor-pointer"
                        onClick={() => handleColorClick(colorOption.image)} 
                      />
                      <p className="py-3 text-[#3C3C3C]">{colorOption.color}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[#3C3C3C] font-semibold italic text-center">
                  Click On Color / Pattern To Compare, Click And Drag Images To
                  Reorder
                </p> 
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickViewPopup;
