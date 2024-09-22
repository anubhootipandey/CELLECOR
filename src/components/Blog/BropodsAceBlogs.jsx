import React,{useState} from "react";
import { Link } from "react-router-dom";
import { articles } from "./Recent-blog";

const BropodsAceBlogs = () => {

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
          Music Bonanza at Home With Cellecor BROPODS CB44 Ace
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
            Music Bonanza at Home With Cellecor BROPODS CB44 Ace
            </h4>

            <p className="text-[#999999] py-3 text-sm">03 Aug 2024</p>

            <div className="w-full">
              <img
                src="https://cellecor.com/cdn/shop/articles/Artboard_2_749x.jpg?v=1719484231"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#3C3C3C] pt-5 pb-5 leading-7">
            Do you know music has the properties of healing and motivation? Whether you are someone who loves listening to music while exercising or a therapist who uses music to heal their patients. <Link className="border-b-2 border-[#3C3C3C]">Cellecor BROPODS</Link> can be the best choice for you.
            </p>

            <p className="text-sm text-[#3C3C3C] pt-5 leading-7">
            According to Statistica, India is one of the world's biggest music markets, consisting of 7.11 Billion people who listen to music daily. If you are also someone for whom music is the best cup of tea, in that scenario, you should definitely try CB44 Ace earbuds, which are the best in class and at the same time comfortable to the ears.
            </p>

            <p className="text-sm text-[#3C3C3C] pt-5 leading-7">Let’s look at Let’s unravel the marvelous features of BROPODS CB44 Ace in detail, so you know why you should order it for yourself and your family and friends now.
            </p>

            <section>
              <h3 className="text-lg font-normal py-5">
              Cosmic Sound Freedom 
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              Are you tired of all the hustle and bustle of the world, that disrupts your peaceful personal space or time of listening to music? We have the best solution for you, get your hands over CB44 Ace earbuds and get rid of all the unwanted sounds. These TWS earbuds consist of efficient Environment Noise Cancellation, that does not let any unwanted sound reach your ears.
              </p>

              <p className="text-sm mt-10 text-[#3C3C3C] leading-7">
              These wireless earbuds have been meticulously designed to provide exceptional audio quality and a comfortable fit. With their sleek and lightweight construction, they are ideal for a wide range of activities including commuting, working out, or simply relaxing at home.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              Long Lasting Playback Time
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              If you are always worried that your earbuds will spoil your meeting or ditch you in a seminar then, you can relax because this is not going to happen with BROPODS CB44 Ace. 
              </p>

              <p className="text-sm mt-10 text-[#3C3C3C] leading-7">
              The CB44 Ace earbuds ensure that you never miss a single note of music or an important call. With the help of Lithium Polymer batteries, these TWS Earbuds offer up to 5–6 hours of continuous playback and can last up to 60 hours when paired with the charging case.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              High-End Touch Control Feature
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              Isn’t it wonderful that you won’t have to touch and hold your device every once in a while in close proximity to raise or lower the sound? The Cellecor’s TWS Earbuds are equipped with a touch-sensitive sensor, enabling you to effortlessly control your music playback and phone calls with a simple tap. 
              </p>

              <p className="text-sm text-[#3C3C3C] leading-7 pt-10">
              By tapping your earbuds, you can easily play or pause music and answer or end calls. Additionally, you have the option to touch and hold the earbuds to activate a command of your preference.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              Enticing Display Features
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              These TWS earbuds won’t disappoint you, as it is loaded with many exclusive features, which will make your life easy and smooth. CB44 Ace Earbuds provide an extensive selection of unique and prominent characteristics, including a remarkable standby time of 220 hours, Bluetooth V5.3, effortless auto connect that eliminates the need for manual intervention, and a fully digital display.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-normal py-5">
              Shielded with IPX5 Water Resistance
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              What could be more exciting than to know that you can use BROPODS CB44 Ace in any weather condition without being worried about it getting destroyed? This is made true by this TWS earbud, which remains well-connected and in good condition even if you sweat a lot in the gym. 
              </p>

              <p className="text-sm mt-10 text-[#3C3C3C] leading-7">
              Cellecor has instilled an extra layer of safety on its earbuds which is IPX water resistance, which does not let your earbud lose its charm and capacity.
              </p>
            </section>

            <section>
              <h3 className="text-2xl font-semibold py-5">
              Strong Bass Drivers
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              If you want the best musical experience, purchasing CB44 Ace earbuds is the finest decision you can make. The TWS CB44 Ace Earbud headphones feature 10 mm drivers that ensure no sound goes unnoticed, while the Cellecor Bass technology enhances the overall music listening experience, establishing them as the top choice in the industry.
              </p>

              <p className="text-sm text-[#3C3C3C] leading-7">
              To conclude, the Cellecor BROPODS CB44 Ace is the best earbud investment you can make and can reap its benefits for a long duration of time. This TWS comes with a 1-year warranty, though there are rare cases of wear and tear in this product.
              </p>

              <p className="text-sm text-[#3C3C3C] leading-7">
              Go order <Link className="border-b-2 border-[#3C3C3C]">CB44 Ace earbuds</Link> now, which come along 60hrs Playback time, Environment Noise Cancellation, the latest version of Bluetooth, and many more such high-end features.

              </p>
            </section>


            <div className="flex flex-wrap items-center gap-2 text-lg py-5">
            <i class="fa-solid fa-tag "></i>
            <p className=" font-semibold">Tags:</p>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">bluetooth earbuds</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">cb44 ace</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">cellecor</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">Cellecor bropods</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">cellecor cb44 ace</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">cellecor earbuds</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">tws</Link>
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

export default BropodsAceBlogs;
