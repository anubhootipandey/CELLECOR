import React,{useState} from "react";
import { Link } from "react-router-dom";
import { articles } from "./Recent-blog";

const OasisM6Blog = () => {

  const [isOpen,setIsOpen] = useState(false);

  const toggleMenu = () =>{
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="max-w-[1200px] mx-auto p-2">
        <div
          className="flex items-center flex-row gap-2 text-[rgb(153,153,153)] relative overflow-x-auto  whitespace-nowrap scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <Link to="/">Home</Link>
          <i className="fa-solid fa-angle-right text-sm"></i>
          <Link to="/blog">Blog</Link>
          <i className="fa-solid fa-angle-right text-sm"></i>
          <Link>
          Wear Oasis of Luxury on Wrist with M6 Twist Smart Watch
          </Link>
        </div>

        <div className="flex items-center justify-between">
        <h4 className="py-4 text-2xl font-semibold">BLOG</h4>
        <i class="fa-solid fa-bars-staggered text-2xl lg:hidden" onClick={toggleMenu}></i>
        </div>

        <div className="flex gap-5">
          <div className="w-50 max-lg:hidden">
            <h6 className="text-sm font-semibold">RECENT POST</h6>

            <div className="border-b border-black my-3"></div>

            {articles.map((article, index) => (
              <div key={index}>
                <Link
                  to={article.link}
                  className="font-semibold text-[#232323] hover:border-b-2 border-black"
                >
                  {article.title}
                </Link>
                <p className="py-2 italic text-[#999999]">{article.date}</p>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xl font-semibold">
            Wear Oasis of Luxury on Wrist with M6 Twist Smart Watch
            </h4>

            <p className="text-[#999999] py-3 text-sm">03 Aug 2024</p>

            <div className="w-full">
              <img
                src="https://cellecor.com/cdn/shop/articles/Artboard_4_749x.jpg?v=1719562670"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#3C3C3C] pt-5 pb-5 leading-7">
            Are you a Smart Watch enthusiast? Or someone who loves to keep the fashion quotient high. Whatever may be the reason, the M6 Smart Watch can be a luxury addition to your closet. 
            </p>

            <p className="text-sm text-[#3C3C3C] pt-5 leading-7">
            According to Mordor Intelligence, At a compound annual growth rate (CAGR) of <span className="font-semibold">27.78%</span>, the smartwatch market is predicted to increase from <span className="font-semibold">171.38 million</span> units in 2024 to <span className="font-semibold">583.81 million units</span>  by 2029 in terms of shipment volume. 


            </p>

            <p className="text-sm text-[#3C3C3C] pt-5 leading-7">Let’s look at some of the amazing features offered by M6 Smart Watch which makes it the best watch to buy.
            </p>

            <section>
              <h3 className="text-lg font-normal py-5">
              Premium and Sleek Design 
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              Do you have a heart for watches that are sleek and premium in design? M6 Twist Smart Watch could be a great choice for you as it is a walking magic followed by its sleek and breathtaking premium design. The M6 Smart Watch has three color options, providing ample opportunities to put your best fashion foot forward. This smartwatch catches the eye with its stunning visual design, boldly asserting itself on your wrist while seamlessly merging beauty with usefulness.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              Make and Answer Your Calls with Ease
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              If you are someone who wants to be stay connected with your friends and family no matter if you are partying or at the gym, M6 Smart Watch could make that possible with ease.
              </p>

              <p className="text-sm mt-10 text-[#3C3C3C] leading-7">
              Your life will be made easy by the abundance of call functions on this watch, like Bluetooth calling. With its built-in speakers, microphone, and rapid pairing, it has Bluetooth calling capabilities that let you keep in constant communication with your loved ones.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              HD Display as Bright as Sun
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              The M6 Smart Watch stands out as a remarkably vibrant and striking smartwatch, boasting an expansive AMOLED screen that remains easily visible even under direct sunlight. 
              </p>

              <p className="text-sm text-[#3C3C3C] leading-7 pt-10">
              Moreover, the 2.01 Curved HD display provides an engrossing visual journey with its impressive 800 Nits brightness, 240x296 Pixel resolution, and always-on functionality. Its high-definition visuals truly make it the ultimate budget-friendly timepiece.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              Cellecor Full of Savings
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              With M6 Twist Smart Watch you can fetch a lot of savings on purchasing a smart watch. What could be a better option than this when you can be affordable, futuristic, and classy at the same time. This is what M6 Smart Watch brings along it feature packed and affordability. You can simply buy it for Rs 1,399 from our website, which is quite nominal in the segment of futuristic watches.
              </p>

              <p className="text-sm text-[#3C3C3C] mt-10 leading-7">
              What lets this watch gain an edge over other competitors in the market is that it looks premium, loaded with features without charging hefty amount from users.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              Layers of IP68 Resistance 
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              If you are someone who sweat it out a lot in gym, you don’t have to worry about this watch getting affected as it has IP68 resistance. M6 Smart Watch is equipped with IP68 resistance, ensuring that you can use it without worrying about damage. Additionally, it is designed to withstand any weather conditions, making it an ideal choice for you.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold py-5">
              Loaded with 100+ Watch Faces and Sports Mode
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              The intelligent design of this smart watch provides over 100 watch faces, each carefully crafted to cater to various occasions, from casual everyday wear to formal events. 
              </p>

              <p className="text-sm text-[#3C3C3C] leading-7">
              Additionally, the M6 watch ensures that your sport and fitness tracking needs are met with its extensive range of 100+ sport modes, keeping you motivated and engaged in your fitness journey.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold py-5">
              High-tech Sensors for Precise Health Measurements
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              Health is wealth and your health is our priority! M6 Smart Watch exhibits several sensors and monitors like Pedometer, heart rate, SpO2, blood pressure, sleep monitoring, breath training, respiratory rate, stress & mood monitor.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold py-5">
              Conclusive Thoughts
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              To conclude, <Link className="border-b-2 border-[#3C3C3C]">Cellecor M6 Twist Smart Watch</Link> is the name of for futuristic fitness companion and luxury Smart Watch. It makes the user's life by providing a cluster of features at one place and time.
              </p>

              <p className="text-sm mt-10 text-[#3C3C3C] leading-7">
              Say goodbye to the inconvenience of dealing with large Smart Watches or compromising with inferior smart watch options. Embrace the strength, convenience, and effectiveness found in this small wonder and experience the change in your workout routine. Master your health regimen with the Cellecors M6 Twist Smart Watch where portability combines with power.
              </p>
            </section>


            <div className="flex flex-wrap items-center gap-2 text-lg py-5">
            <i class="fa-solid fa-tag "></i>
            <p className=" font-semibold">Tags:</p>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">bluetooth calling smartwatch</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">bluetooth smartwatch</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">cellecor</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">Cellecor Smartwatch</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">smartwatch</Link>
            </div>

            <div className="flex gap-5 text-xl py-10">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-x-twitter"></i>
            <i class="fa-brands fa-pinterest"></i>
            <i class="fa-brands fa-telegram"></i>
            <i class="fa-solid fa-envelope-circle-check"></i>
            <i class="fa-brands fa-whatsapp"></i>
            </div>


          </div>
        </div>
      </div>

      {/* Recent post hamburger */}
      {isOpen && (
          <div className="fixed inset-0 bg-white w-80 z-50 p-5 overflow-y-auto">
            <div className="flex justify-between items-center">
              <h6 className="text-xl font-semibold">Sidebar</h6>
              <i
                className="fa-solid fa-times text-2xl cursor-pointer"
                onClick={toggleMenu}
              ></i>
            </div>
 
            <h5 className="text-sm font-semibold mt-10 mb-5">RECENT POST</h5>

            <div className="border-b border-black my-1"></div>

            {articles.map((article, index) => (
              <div key={index} className="my-2">
                <Link
                  to={article.link}
                  className=" text-[#232323] hover:border-b-2 border-black"
                >
                  {article.title}
                </Link>
                <p className="py-2 italic text-[#999999]">{article.date}</p>

                <div className="border-b"></div>
              </div>
            ))}
          </div>
        )}
    </>
  );
};

export default OasisM6Blog;
