import React from 'react';
import Blog01 from '../../assets/Blog01.png'; // Replace with the actual path to the new image
import Blog02 from '../../assets/Blog02.png';
import Blog03 from '../../assets/Blog03.png';
import Blog04 from '../../assets/Blog04.png';
import Blog05 from '../../assets/Blog05.png';
import Blog06 from '../../assets/Blog06.png';
import Blog08 from '../../assets/Blog08.png';
import Blog09 from '../../assets/Blog09.png';
import Blog10 from '../../assets/Blog10.png';
import Blog11 from '../../assets/Blog11.png';

const Blog = () => {
    const articles = [
        {
            title: "The Cellosior BIPODS C103 Promises Innovation In Every Beat",
            detail: "Are you a music lover or someone who has a heart for gaming? We have exciting news for you. Cellecor has launched BROPODS C103 that will definitely make your heart...",
            date: "07 Aug 2024",
            image: Blog02,
        },
        {
            title: "Transforming Home Entertainment: Cellosior Gadgets Ltd Partners For Samsung Titan OS",
            detail: "Are you a tech enthusiast? This news might sound like music to your ears. Cellecor Gadgets Limited has announced a strategic alliance to incorporate Samsung Tizen OS into all of...",
            date: "29 July 2024",
            image: Blog03,
        },
        {
            title: "Wear Oasis Of Luxury On Wrist With MB Twist Smart Watch",
            detail: "Are you a Smart Watch enthusiast? Or someone who loves to keep the fashion quotient high. Whatever may be the reason, the M6 Smart Watch can be a luxury addition...",
            date: "15 July 2024",
            image: Blog04,
        },
        {
            title: "Music Bonanza at Home With Cellecor BROPODS CB44 Ace",
            detail: "Do you know music has the properties of healing and motivation? Whether you are someone who loves listening to music while exercising or a therapist who uses music to heal...",
            date: "15 July 2024",
            image: Blog05,
        },
        {
            title: "Cellecor M10 Pro Vision and M10 Vision Blend of Tradition and Modernism",
            detail: "Smart Watches have been ruling the market for a long time now. Are you someone who is skeptical about whether to go for traditional or futuristic watches? Sit back on...",
            date: "15 July 2024",
            image: Blog06,
        }
    ];

    return (
        <>
            {/* Featured Article Section */}
            <div className="container my-[4rem] px-4 py-8 w-[75rem] left-[8rem] relative">
                <div className="lg:space-x-8 mb-12">
                    {/* Right Side: Text */}
                    <div className="justify-center flex">
                        <button className="text-orange-900 border-yellow-700 border px-4 py-2 rounded-lg mb-4">Featured</button>
                        <h2 className="text-xl font-semibold mb-4 mx-8">
                            Cellecor Gadgets Limited Bring In The Theatre Like Feel At Home With Smart TV S-65
                        </h2>
                    </div>

                    {/* Add the "Do you have..." paragraph here */}
                    <p className="text-gray-700 mb-4 relative left-[12rem] text-sm">
                        Do you have a hard time visiting the theaters for movies as you are usually short of time?
                        Moreover, you also find it lacking comfort. So, say no to all...
                    </p>

                    <div  className="text-gray-700 mb-4 relative left-[12rem] text-sm">
                        <p className="text-sm text-gray-500">On Aug 03, 2024</p>
                        <button className="mt-4 border border-black px-4 py-2 hover:bg-black hover:text-white transition duration-300">
                            VIEW DETAILS
                        </button>
                    </div>

                    {/* Right Side: Image Below Text */}
                    <div className="lg:w-3/4 mt-8 lg:mt-0  mb-4 relative left-[12rem] text-sm">
                        <img src={Blog01} alt="Smart TV S-65" className="w-full h-auto object-cover rounded-lg" />
                    </div>
                </div>
            </div>

            {/* Articles Section */}
            <div className="container mx-auto  px-4 lg:flex lg:space-x-8 py-8 lg:flex-row-reverse">
                {/* Articles */}
                <div className="w-full lg:w-3/4">
                    {articles.map((article, index) => (
                        <ArticleCard key={index} article={article} />
                    ))}
                </div>
                {/* Sidebar */}
            </div>
                <Sidebar />
        </>
    );
};

export const Sidebar = () => {
    const recentArticles = [
        "Cellosior Gadgets Limited Bring In The Theatre Like Feel At Home With Smart TV S-65",
        "03 Aug 2024",
        "The Cellosior BIPODS C103 Promises Innovation In Every Beat",
        "03 Aug 2024",
        "Transforming Home Entertainment: Cellosior Gadgets Ltd Partners For Samsung Titan OS",
        "03 Aug 2024",
    ];

    const bestSellers = [
        { name: "Cellecor CLB-30 BEATZ", oldPrice: "RS. 4,999.00", newPrice: "RS. 3,999.00", image: Blog08 },
        { name: "Cellecor M2 Aqua", oldPrice: "RS. 5,999.00", newPrice: "RS. 3,999.00", image: Blog09 },
        { name: "Cellecor M7 Pro Ray", oldPrice: "RS. 10,999.00", newPrice: "RS. 8,999.00", image: Blog10 },
        { name: "Cellecor M5 Eaze", oldPrice: "RS. 9,999.00", newPrice: "RS. 7,999.00", image: Blog11 },
    ];

    return (
        <aside className="w-full lg:w-[15rem] mx-7 lg:space-y-20">
            <div className="mb-8 relative -top-[258rem] lg:space-y-7">
                <h3 className="text-lg font-semibold mb-4">Recent Articles</h3>
                <ul>
                    {recentArticles.map((article, index) => (
                        <li key={index} className="mb-2 text-sm text-gray-700">
                            {article}
                        </li>
                    ))}
                </ul>
            </div>
            <div className=' relative -top-[258rem]'>
                <h3 className="text-lg font-semibold mb-4">Best Seller</h3>
                {bestSellers.map((product, index) => (
                    <div key={index} className="flex items-center mb-4">
                        <img src={product.image} alt={product.name} className="w-16 h-16 mr-4" />
                        <div>
                            <p className="text-sm font-medium ">{product.name}</p>
                            <p className="text-sm text-gray-500 line-through">{product.oldPrice}</p>
                            <p className="text-sm font-bold text-black">{product.newPrice}</p>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export const ArticleCard = ({ article }) => {
    return (
        <div className="mb-8">
            <img src={article.image} alt={article.title} className="w-full h-auto mb-4 rounded-lg" />
            <h3 className="text-lg font-semibold">{article.title}</h3>
            <p>{article.detail}</p>
            <p className="text-sm text-gray-500 mb-2">{article.date}</p>
            <button className="border border-black px-4 py-2 hover:bg-black hover:text-white transition duration-300">
                View Details
            </button>
        </div>
    );
};

export default Blog;
