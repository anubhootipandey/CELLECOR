import React from 'react';
import About01 from '../../assets/About01.jpg';
import About02 from '../../assets/About02.png';
import About03 from '../../assets/About03.png';
import About04 from '../../assets/About04.png';
import About05 from '../../assets/About05.png';
import About06 from '../../assets/About06.png';
import About07 from '../../assets/About07.png';

const About = () => {
  return (
    <div>
      {/* First Image Section */}
      <div>
        <img
          src={About01}
          alt="Cellecor"
          className='w-full h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] object-cover'
        />
      </div>

      {/* Text Content Section */}
      <div className='mx-4 sm:mx-6 md:mx-10 my-6 md:my-12'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mb-4'>Introduction to Cellecor</h1>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl mb-6'>
          It is the tale of a person who, since they were little, has wanted to start their own business. As the first member of his family, our esteemed founder, Mr. Ravi Agarwal, started his business in 2020 with a passion for money. It has had a lengthy 13-year consumer electronics career under the name Unity Communications. Over the years, our inventor has accomplished several milestones, growing his little downtown Delhi firm into the most consumer-friendly brand possible. Cellecor was created by our tech-loving futuristic entrepreneur with the goal of elevating and redefining how we interact with consumer electronics gadgets. As a business, we comprehend the need of the customer for ideal items that not only last but also go with every attitude, look, and vibe. Our engineers and designers collaborate flawlessly to produce products with unbelievable usefulness, unmatched comfort, and amazing sound quality. In addition to smart TVs, speakers, neckbands, TWS, soundbars, smart watches, and other items, we also provide a broad variety of audio and wearable devices.
        </p>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
          We are a lifestyle brand adorned with cutting-edge technology, innovative design and craftsmanship beyond compare. With our love for technology, we ensure every beat, every note and every lyrics reach out to you with utmost precision. We enhance your acoustic experience so you can enjoy your favorite music with depth and clarity. With our wearable category, we ensure it fits perfectly into your active lifestyle from fitness training to adventures, partying to simply going out on a date while maintaining exceptional performance. Starting from 5 states to 14 states within a span of 1 year and from selling only mobile devices to covering all consumer electronic gadgets- we have worked hard to come this far. But this is just the beginning. We have whole new journey ahead of us.
        </p>
      </div>

      {/* Overlaying About02 on top of About03 */}
      <div className='relative flex justify-center items-center' style={{ paddingBottom: '40rem' }}>
        {/* About03 (Background Image) */}
        <img
          src={About03}
          alt="Background Image"
          className='absolute w-full h-[30rem] sm:h-[35rem] md:h-[40rem] lg:h-[50rem] object-cover top-[15rem] sm:top-[16rem] md:top-[18rem] lg:top-[20rem] left-0 z-0'
        />

        {/* About02 (Overlay Image) */}
        <img
          src={About02}
          alt="Overlay Image"
          className='relative w-[90%] max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg h-auto object-cover rounded-3xl z-10'
        />
      </div>

      {/* Vision and Mission Section */}
      <div className='mx-4 sm:mx-6 md:mx-10 my-6 md:my-12'>
        <h1 className='font-semibold text-xl sm:text-xl md:text-3xl mb-4'>Vision And Mission</h1>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl mb-6'>
          Cellecor started as a passion and love for technology and electronic gadgets. And now it is our vision to offer unmatched experience to all the tech savvy people out there. We are here to change the world how the consumer electronic brands are looked at and become India’s first electronic lifestyle brand. From the time of our inception, we have contributed us to deliver exceptional customer support and positive experience in every touchpoint. With our digital expansion, we are opening up the possibility to be more interactive with our consumers and build a passionate community of brand advocates. From our house of innovation, Cellecor is continuously designing and developing technologically advanced products that help to you stay connected in today’s fast-paced world. Our next 10 years plan is to penetrate the international market and make our brand accessible to customers in every corner of the globe. “Making happiness affordable” – that is our motto. Our engineers are working rapidly to build more future-ready gadgets packed with features.
        </p>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl'>

          Cellecor is a consumer first brand. Our customers are at the heart of everything we do. That is why we have started our journey to bring the superior sound experience and uncompromised quality and comfort at the most affordable rate possible. Started from a small shop in Delhi, Cellecor’s mission is to serve every Indian proudly and become an international brand and raise the bar of consumer gadgets. Our aim is to make Cellecor a household name by meeting the consumer’s evolving needs and expectations. With large variety and budget-friendly options, we are going to make Cellecor a go-to brand for all Indians. With the help of social media campaigns, events and collaborations, we plan is to create a vibrant community that continues to grow and be a part of our mission.
        </p>
      </div>

      {/* About04 Image with hover effect */}
      <div className='mx-4 sm:mx-6 md:mx-10 my-6 md:my-12 flex justify-center overflow-hidden'>
        <div className='relative group'>
          <img
            src={About04}
            alt="About Cellecor"
            className='w-[80%] sm:w-[76%] md:w-[70%] lg:w-[86rem] rounded-2xl transition-transform duration-500 group-hover:scale-110'
          />
        </div>
      </div>

      {/* About05 and About06 Images with hover effect */}
      <div className='flex flex-wrap justify-center gap-4 mx-4 sm:mx-6 md:mx-10 my-6 md:my-12'>
        <div className='relative group w-[90%] sm:w-[45%] md:w-[30%] lg:w-[43rem] overflow-hidden'>
          <img
            src={About05}
            alt="About Cellecor 05"
            className='w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-110'
          />
        </div>
        <div className='relative group w-[90%] sm:w-[45%] md:w-[30%] lg:w-[43rem] overflow-hidden'>
          <img
            src={About06}
            alt="About Cellecor 06"
            className='w-full h-auto rounded-2xl transition-transform duration-500 group-hover:scale-110'
          />
        </div>
      </div>

      {/* cellecor */}
      <div className='mx-4 sm:mx-6 md:mx-10 my-6 md:my-12'>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mb-4'>Why Cellecor?</h1>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl mb-6'>
        Cellecor has 1500+ service centers across India and 1200+ distribution channels to make sure our products reach every house. We provide on-site services for your smart TV. So far, we have 100 Million Happy Customers and 10 Million Content Viewers. We make products that are affordable and backed by extensive scientific research and development. All the tech gadgets undergo rigorous testing and trails to demonstrate their efficiency and life. We commit to drive innovation in the tech world.
        </p>
      </div>

      {/* Service Section */}
      <div className='flex flex-col items-center my-6 md:my-12'>
        <div className='text-center mb-6'>
          <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl'>Serving India Proudly</h1>
        </div>
        <div className='w-full max-w-screen-xl'>
          <img src={About07} alt="Serving India Proudly" className='w-full h-auto rounded-3xl mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default About;
