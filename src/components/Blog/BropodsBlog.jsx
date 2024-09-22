import React,{useState} from "react";
import { Link } from "react-router-dom";
import { articles } from "./Recent-blog";

const BropodsBlog = () => {

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
          The Cellecor BROPODS C103 Promises Innovation in Every Beat
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
            The Cellecor BROPODS C103 Promises Innovation in Every Beat
            </h4>

            <p className="text-[#999999] py-3 text-sm">03 Aug 2024</p>

            <div className="w-full">
              <img
                src="https://cellecor.com/cdn/shop/articles/TWS_copy_749x.png?v=1722084478"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#3C3C3C] pt-5 pb-5 leading-7">
            Are you a music lover or someone who has a heart for gaming? We have exciting news for you. Cellecor has launched BROPODS C103 that will definitely make your heart and ears happy.
            </p>

            <p className="text-sm text-[#3C3C3C] pt-5 leading-7">
            The release of the Cellecor BROPODS C103 represents a major advancement in the rapidly developing field of audio technology. These true wireless stereo (TWS) earbuds, made for the sophisticated audiophile, promise not just convenience but also a revolution in user experience and sound quality.
            </p>

            <p className="text-sm text-[#3C3C3C] pt-5 leading-7">
            Let’s look at the reasons why you should definitely get your hands on C103 TWS earbuds.
            </p>

            <section>
              <h3 className="text-lg font-normal py-5">
              Supreme Sound Quality 
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              The C103 TWS earbuds dedication to providing outstanding audio performance is at its core. These earbuds provide a rich, immersive sound experience thanks to their 10 mm sophisticated drivers and cutting-edge sound technology. Expect clarity and depth in every beat, whether you're enjoying podcasts, conference calls, or your favorite music.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              Versatile in Nature
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              The Cellecor BROPODS C103 adjusts to your lifestyle, whether you're working out, traveling, or just lounging around the house. They are appropriate for outdoor sports and workouts because of their IPX5 sweat and water resistance, and their small size makes them portable.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              Smooth and Flexible Connectivity
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              The Cellecor BROPODS C103 can be easily paired with your devices since Bluetooth technology V5.3 maintains a reliable connection. Once connected, you can easily handle calls, change the volume, and browse playlists with the help of the touch controls. Support for voice assistants adds even more value to the hands-free experience and simplifies multitasking.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              Quad Mic AI ENC
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              With its emphasis on clear communication in a world where communication is becoming more and more interconnected, Quad Mic AI ENC is a significant advancement in TWS earbud technology. These earbuds improve the quality of your voice calls and overall audio experience, in addition to canceling out annoying background noise by utilizing sophisticated microphone arrays and intelligent algorithms. 
              </p>

              <p className="text-sm text-[#3C3C3C] leading-7 pt-10">
              Whether you're hustling through a hectic workday at the office or unwinding in a boisterous café, Quad Mic AI ENC makes sure that your voice stays front and center, facilitating easy conversation no matter where you are.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              Long-Lasting Battery Life 
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              Concerned that your music may run out? You never have to worry about battery life with the BROPODS C103. Providing playtime of several hours 10mins charge= 150mins playtime of listening time on a single charge, these earbuds keep up with your hectic schedule. With the additional power that the portable charging case offers, you may listen to music continuously while on a journey.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              Low Latency 
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              The pursuit of flawless audio and gaming experiences has reached unprecedented heights in the fiercely competitive world of wireless earbuds. The introduction of True Wireless Stereo (TWS) earbuds with 50ms Low Latency Game Mode is a big development that might completely change how we enjoy games and music while on the go. That is why we have made sure to inculcate this feature in our C103 TWS earbuds.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold py-5">
                Conclusion
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              These TWS earbuds combine innovation and functionality to create a new standard for TWS earphones. These earbuds are great for anyone who enjoys high-quality sound, is a professional on-the-go, or is a music aficionado. With these earbuds, you can enhance your listening experience and embrace the future of wireless music.
              </p>
            </section>


            <div className="flex flex-wrap items-center gap-2 text-lg py-5">
            <i class="fa-solid fa-tag "></i>
            <p className=" font-semibold">Tags:</p>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">cellecor c103</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">cellecor c103 earbuds</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">cellecor earbuds</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">tws earbuds</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">wireless earbuds</Link>
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

export default BropodsBlog;
