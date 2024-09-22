import React,{useState} from "react";
import { Link } from "react-router-dom";
import { articles } from "./Recent-blog";

const smartTv65Blog = () => {

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
            Cellecor Gadgets Limited Bring in the Theatre Like Feel at Home with
            Smart TV S-65
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
              Cellecor Gadgets Limited Bring in the Theatre Like Feel at Home
              with Smart TV S-65
            </h4>

            <p className="text-[#999999] py-3 text-sm">03 Aug 2024</p>

            <div className="w-full">
              <img
                src="	https://cellecor.com/cdn/shop/articles/tv_749x.jpg?v=1722675188"
                alt=""
                className="w-full h-auto object-contain"
              />
            </div>

            <p className="text-sm text-[#3C3C3C] pt-5 pb-5 leading-7">
              Do you have a hard time visiting the theaters for movies as you
              are usually short of time? Moreover, you also find it lacking
              comfort. So, say no to all these blues and discomfort as Cellecor
              has rolled out its marvelous creation which is Cellecor Smart TV
              S-65.{" "}
            </p>

            <p className="text-sm text-[#3C3C3C] pt-5 leading-7">
              The Cellecor Smart TV stands out as a superior option in the
              constantly changing home entertainment market, appealing to both
              tech fanatics and general viewers. This 65-inch wonder seeks to
              revolutionize your watching experience with a combination of
              tremendous performance, elegant design, and intelligent features.
              Let's explore the exceptional characteristics of the{" "}
              <Link
                to=""
                className="font-bold text-black border-b-2 border-black"
              >
                Cellecor Smart TV S-65
              </Link>{" "}
              that would make any modern home want it.
            </p>

            <section>
              <h3 className="text-lg font-semibold py-5">
                1. Remarkable 4K Ultra HD Display
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
                With four times the detail of Full HD, the 4K Ultra HD
                resolution of the Cellecor Smart TV S-65 is impressive. With
                this high resolution, you can enjoy a cinema-like experience in
                the comfort of your own home, since every pixel is crisp and
                every color is vibrant. The clarity and depth of the 4K display
                bring your content to life with astonishing realism, whether
                you're playing video games, streaming the newest episodes, or
                viewing your favorite movies.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold py-5">
                2. Integration of AI and Voice Control
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
                The S-65 embraces the integration of artificial intelligence and
                voice control, a nod to the future of smart technology. Voice
                commands let you search for content, switch between channels,
                alter the volume, and even operate other smart devices in your
                house. You'll never miss out on interesting stuff thanks to
                AI-powered suggestions, which also assist you in finding new
                television series and films depending on your viewing
                preferences.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold py-5">
                3. A Platform for Smart TVs with an Intuitive interface
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
                A powerful, user-friendly smart TV platform is included with the
                Cellecor Smart TV S-65. It easily connects with well-known
                streaming services like Hulu, Netflix, and Amazon Prime Video,
                giving you access to a huge media collection without requiring
                extra hardware. It's simple to locate and enjoy your favorite
                entertainment thanks to the interface's rapid access to your
                favorite apps and channels.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold py-5">
                4. Dolby Atmos and DTS Audio Technology
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
                What do you look for in a Smart TV when you plan to purchase
                one? It's sound and picture quality, right? We have made you
                rest assured about its picture quality now let’s talk about its
                sound quality.
              </p>

              <p className="text-sm text-[#3C3C3C] leading-7 pt-10">
                Dolby Atmos and DTS audio technologies are featured on the
                Cellecor Smart TV S-65, providing immersive sound along with
                excellent pictures. With the help of these cutting-edge audio
                systems, you may experience a three-dimensional soundscape and
                feel as though you are in the midst of things.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold py-5">
                5. Ultra-Slim Design with Minimal Bezels
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
                Whether aesthetically or in functionality, the S-65 does not
                disappoint you as it is a powerhouse of both. It is a modern and
                sleek design complement to any space because of its incredibly
                thin design and small bezels. Your attention is kept entirely on
                the content thanks to the almost bezel-less screen, and the TV's
                thin profile lets it mix in well with any decor or environment.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold py-5">
                6. Multiple Connectivity Options
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
                Numerous connectivity options are available on the Cellecor
                Smart TV to support all of your devices. You can connect gaming
                consoles, Blu-ray players, soundbars, and other devices with
                ease thanks to the numerous HDMI and USB ports. Its connectivity
                is further improved by the presence of Bluetooth and Wi-Fi,
                which enable wireless streaming and device pairing.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold py-5">
                7. Customizable Viewing Modes
              </h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
                A variety of customizable viewing modes are available on the
                Cellecor Smart TV S-65 to accommodate various content kinds and
                lighting circumstances. You have the ability to change the
                visual settings to enhance your viewing experience, regardless
                of the type of media you're watching — a calm nature documentary
                or a fast-paced action movie.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-semibold py-5">Summing Up</h3>
              <p className="text-sm text-[#3C3C3C] leading-7">
                A seamless fusion of cutting-edge technology, chic design, and
                user-focused functionality characterizes the Cellecor Smart TV
                S-65. It is a strong competitor in the{" "}
                <Link className="font-semibold text-black border-b-2 border-black">
                  smart TV
                </Link>{" "}
                industry thanks to its 4K Ultra HD display, Dolby Technology,
                and extensive smart platform. The S-65 promises to take your
                entertainment experience to new levels, regardless of your
                preference for films, video games, or just curling up with TV
                shows.
              </p>

              <p className="text-sm text-[#3C3C3C] leading-7 pt-10">
                Are you ready to update your audio system at home? The Cellecor
                Smart TV S-65 could be the ideal option for infusing your living
                space with smart features and magical effects from the movies.
              </p>
            </section>

            <div className="flex flex-wrap items-center gap-2 text-lg py-5">
            <i class="fa-solid fa-tag "></i>
            <p className=" font-semibold">Tags:</p>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">cellecor</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">cellecor s-65</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">cellecor smart tv</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">smart tv</Link>
            <Link to='' className="bg-[#F6F7F8] px-3 py-1">smart tv s-65</Link>
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

export default smartTv65Blog;
