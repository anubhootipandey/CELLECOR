import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import "./Latestblog.css";

const LatestBlog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <GrFormNext />,
    prevArrow: <GrFormPrevious />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="blog-slider-container">
      <h2 className="blog-title">LATEST BLOG</h2>
      <Slider {...settings}>
        {/* Card One */}
        <div className="blog-card">
          <img
            src="./src/assets/smarttv-latestblog.jpg"
            alt="Smart TV"
            className="blog-image"
          />
          <div className="text text-left">
            <p className="blog-description">
              Cellecor Gadgets Limited Bring In The Theatre Like Feel At Home
              With Smart TV S-65.
            </p>
            <a href="#" className="view-details">
              View Details
            </a>
            <span class=" text-black "> &nbsp; &rarr;</span>
          </div>
        </div>

        {/* Card Two */}
        <div className="blog-card">
          <img
            src="./src/assets/TWS-latestblog.jpg"
            alt="Bropods C103"
            className="blog-image"
          />
          <div className="text text-left">
            <p className="blog-description">
              The Cellecor BROPODS C103 Promises Innovation In Every Beat.
            </p>
            <a href="#" className="view-details">
              View Details
            </a>
            <span class=" text-black"> &nbsp; &rarr;</span>
          </div>
        </div>

        {/* Card Three */}
        <div className="blog-card">
          <img
            src="./src/assets/samsungtv.jpg"
            alt="Samsung Tizen"
            className="blog-image"
          />
          <div className="text text-left">
            <p className="blog-description">
              Transforming Home Entertainment: Cellecor Gadgets Partners with
              Samsung.
            </p>
            <a href="#" className="view-details">
              View Details
            </a>
            <span class=" text-black"> &nbsp; &rarr;</span>{" "}
          </div>
        </div>

        {/* Card Four */}
        <div className="blog-card">
          <img
            src="./src/assets/smartwatch-latestblog.jpg"
            alt="Samsung Tizen"
            className="blog-image"
          />
          <div className="text text-left">
            <p className="blog-description ">
              Wear Oasis Of Luxury On Wrist With M6 Twist Smart Watch
            </p>
            <br />
            <a href="#" className="view-details">
              View Details
            </a>
            <span class=" text-black"> &nbsp; &rarr;</span>{" "}
          </div>
        </div>

        {/* Card Five */}
        <div className="blog-card">
          <img
            src="./src/assets/Bropods-latestblog.jpg"
            alt="Samsung Tizen"
            className="blog-image"
          />
          <div className="text text-left">
            <p className="blog-description">
              Music Bonanza At Home With Cellecor BROPODS CD44 Ace
            </p>
            <a href="#" className="view-details">
              View Details
            </a>
            <span class=" text-black"> &nbsp; &rarr;</span>{" "}
          </div>
        </div>
      </Slider>
    </div>
  );
};

// Custom Next Arrow
const NextArrow = ({ onClick }) => {
  return <div className="arrow next" id="next" onClick={onClick} />;
};

// Custom Prev Arrow
const PrevArrow = ({ onClick }) => {
  return <div className="arrow prev" onClick={onClick} />;
};

export default LatestBlog;
