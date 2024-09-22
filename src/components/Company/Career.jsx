import career01 from '../../assets/career01.png';
import career02 from '../../assets/career02.png';
import career03 from '../../assets/career03.png';
import career04 from '../../assets/career04.png';
import career05 from '../../assets/career05.png';
import career06 from '../../assets/career06.png';
import career07 from '../../assets/career07.png';
import career08 from '../../assets/career08.png';
import career09 from '../../assets/career09.png';
import career10 from '../../assets/career10.png';
import career11 from '../../assets/career11.png';
import career12 from '../../assets/career12.jpg';
import career13 from '../../assets/career13.png';
import career14 from '../../assets/career14.jpg';
import career15 from '../../assets/career15.jpg';

const Career = () => {
  // Testimonial data
  const testimonials = [
    {
      image: career12,
      name: "NAME",
      position: "POSITION",
      review: "REVIEW"
    },
    {
      image: career13,
      name: "NAME",
      position: "POSITION",
      review: "REVIEW"
    },
    {
      image: career14,
      name: "NAME",
      position: "POSITION",
      review: "REVIEW"
    },
    {
      image: career15,
      name: "NAME",
      position: "POSITION",
      review: "REVIEW"
    }
  ];

  return (
    <div className="container mx-auto p-20">
      <div className="">
        <h1 className="font-bold text-3xl">CAREERS</h1>
      </div>

      {/* Explore Our Office */}
      <div>
        <div className="mb-7 my-5">
          <h2 className="text-xl font-semibold">Explore Our Office</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {[career01, career02, career03, career04, career05, career06, career07, career08, career09].map((image, index) => (
            <img key={index} src={image} alt={`career${index + 1}`} className="w-full h-auto object-cover mb-2" />
          ))}
        </div>
      </div>

      {/* Featured Images */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 my-16">
        <img src={career11} alt="Career 11" className="w-full lg:w-1/2 h-auto object-cover" />
        <img src={career10} alt="Career 10" className="w-full lg:w-1/2 h-auto object-cover" />
      </div>

      {/* Testimonials */}
      <div className="my-16">
        <div className="text-2xl mb-10">
          <h1 className="font-bold">Testimonials</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="text-center bg-white p-4 rounded-lg shadow-lg transform transition duration-300 hover:-translate-y-2"
            >
              <img
                src={testimonial.image}
                alt={`testimonial${index + 1}`}
                className="w-full h-72 object-cover mb-4 rounded-lg"
              />
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
                <p className="text-sm mt-2">{testimonial.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
