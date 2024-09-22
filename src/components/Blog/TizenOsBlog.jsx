import React,{useState} from "react";
import { Link } from "react-router-dom";
import { articles } from "./Recent-blog";

const TizenOsBlog = () => {

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
          Transforming Home Entertainment: Cellecor Gadgets Ltd Partners for Samsung Tizen OS
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
            Transforming Home Entertainment: Cellecor Gadgets Ltd Partners for Samsung Tizen OS
            </h4>

            <p className="text-[#999999] py-3 text-sm">03 Aug 2024</p>

            <div className="w-full">
              <img
                src="https://cellecor.com/cdn/shop/articles/Art__02111_749x.png?v=1719927215"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#3C3C3C] pt-5 pb-5 leading-7">
            Are you a tech enthusiast? This news might sound like music to your ears. Cellecor Gadgets Limited has announced a strategic alliance to incorporate Samsung Tizen OS into all of their Smart TVs, which is an exciting development for fans of home entertainment. In India's rapidly evolving electronics and consumer durable goods market, this partnership represents a critical turning point and establishes Cellecor as a pioneer in the provision of cutting-edge smart TV solutions.
            </p>


            <section>
              <h3 className="text-xl font-semibold py-5">
              Samsung Tizen OS: Powering Next-Generation Smart TVs
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              Renowned for its resilience and adaptability, Linux serves as the foundation for Samsung Tizen OS, an operating system created in partnership with Intel. Smart TVs are now more than just entertainment devices thanks to its extensive feature set. Samsung Tizen OS enhances the user experience with features like screen mirroring, voice assistant capabilities, and seamless interaction with SmartThings for smart home automation. There are over 600 free TV entertainment apps available straight from the TV.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold py-5">
              Enhanced User Experience
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              Users can seamlessly share files and media from linked devices, create immersive cinematic experiences with compatible sound systems, and control their smart home devices from a single platform thanks to the inclusion of Samsung Tizen OS into Cellecor Smart TVs. Convenience is increased with the One Remote's intuitive navigation and control voice commands.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-semibold py-5">
              Strategic Integration of Tizen and Support
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              This partnership, made possible by Samsung's Authorised Licence Partner in India, confirms Cellecor's status as an authorised TV brand under Samsung's prestigious Tizen OS. This strategic partnership demonstrates Cellecor's dedication to providing cutting-edge, premium Smart TVs that are customised to satisfy their discriminating clientele's changing needs.
              </p>
              <p className="text-sm mt-10 text-[#3C3C3C] leading-7">
              In addition, the partnership offers strong after-sales support and extensive marketing support, guaranteeing that clients get timely help for any problems pertaining to their Smart TVs. The core of Cellecor's objective is to reimagine home entertainment through innovative solutions, and this includes a strong commitment to customer pleasure.
              </p>
            </section>


            <section>
              <h3 className="text-xl font-semibold py-5">
              Looking Ahead: Innovation and Future Prospects
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              "We are thrilled about this collaboration," remarked Mr. Nikhil Aggarwal, Whole Time Director at Cellecor Gadgets Limited. "Samsung Tizen OS serves as the foundational technology for our products, allowing us to offer an unparalleled viewing and interactive experience. This partnership not only highlights our dedication to innovation but also reaffirms our commitment to delivering state-of-the-art solutions that enhance the way our customers enjoy home entertainment."
              </p>
            </section>


            <section>
              <h3 className="text-2xl font-semibold py-5">
                Conclusion
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
              With Samsung Tizen OS, Cellecor Gadgets Ltd. is starting a revolutionary journey that bodes well for the future of home entertainment. With an emphasis on quality, innovation, and customer happiness, Cellecor is poised to completely reshape the Smart TV market in India. Keep checking back as we push the limits of technology and create amazing experiences that take home entertainment to new levels.
              </p>

              <p className="text-sm mt-10 text-[#3C3C3C] leading-7">
              Come along on this adventure as we embrace the potential of Samsung Tizen OS to transform the way you enjoy content and build smarter, more connected homes. One cutting-edge product at a time, we are collectively reshaping home entertainment technology for the future.
              </p>
            </section>


            <div className="flex flex-wrap items-center gap-2 text-lg py-5">
            <i class="fa-solid fa-tag "></i>
            <p className=" font-semibold">Tags:</p>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">Cellecor Gadgets Ltd</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">cellecor s-65</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">Samsung Tizen OS</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">Smart TVs</Link>
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

export default TizenOsBlog;
