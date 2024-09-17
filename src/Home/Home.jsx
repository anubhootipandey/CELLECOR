import React from "react";
import video from "../assets/video.mp4";
import BestSeller from "./BestSeller";
import ImageSlider from "./ImageSlider.jsx/ImageSlider";

import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import watch from "../assets/watch.jpg"
import DailyDeals from "./DailyDeals";

const Home = () => {
  return (
    <>
      <div>
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <ImageSlider/>

      <div className="flex flex-col sm:flex-col lg:flex-row justify-center gap-5 w-full justify-center overflow-hidden p-2">
        <div className="overflow-hidden rounded-xl">
          <img
            src="https://cellecor.com/cdn/shop/files/Artboard_2_4_775x.jpg?v=1719559425"
            alt=""
            className="w-full h-auto hover:scale-110 transition-all duration-1000 transform"
          />
        </div>
        <div className="overflow-hidden rounded-xl">
          <img
            src="https://cellecor.com/cdn/shop/files/Artboard_2_copy_1_775x.jpg?v=1719657124"
            alt=""
            className="w-full h-auto hover:scale-110 transition-all duration-1000 transform"
          />
        </div>
      </div>

      <BestSeller/>

      <div className="flex justify-between p-2 lg:p-16">
        <div>
          <img src={img1} alt="" className="w-full h-a"/>
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </div>

      <div className="bg-[#f3f3f3] flex flex-col lg:flex-row justify-center gap-5">
        <div >
          <img src={watch} alt="" />
        </div>
        <div className="w-full lg:w-[60%] flex flex-col items-center justify-center xl:p-20 gap-2 p-2">
          <h2 className="text-4xl text-center font-medium">Made in India! Specially Crafted for You!</h2>
          <p className="text-center">We take great pride in our association with the 'Make in India' campaign, a transformative initiative for India. Our company produces state-of-the-art electronic devices that meet the discerning aesthetic needs of our valued customers, all proudly manufactured within India. Let us unite and contribute to the empowerment of India collectively!</p>
        </div>
      </div>

      <DailyDeals/>
    </>
  );
};

export default Home;
