import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const Home = () => {
  const images = [banner1, banner2, banner3];
  const [currentImage, setCurrentImage] = useState(0);

  // Handler for the next image
  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  // Handler for the previous image
  const prevImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  // Set up interval for automatic image change
  useEffect(() => {
    const interval = setInterval(nextImage, 5000); // Change image every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section
      id="home"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
      className="h-screen bg-cover bg-center relative flex flex-col justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center h-full bg-opacity-50 bg-secondary text-white">
        <h1 className="text-5xl md:text-8xl mb-6 px-20 font-cursive2 animate-fadeIn">Jan & Alfie</h1>
        <p className='mb-20 text-sm md:text-xl md:font-bold font-body2 tracking-widest'>#oriJANallymeantforALFIE</p>
        <p className="text-lg md:text-2xl font-body2 tracking-extremeWide font-extralight animate-slideUp border-y-2 py-2">
          WE'RE GETTING MARRIED
        </p>
      </div>

      {/* Arrow Handlers for changing images */}
      <div className="absolute bottom-20 w-full flex justify-between px-10">
        <button
          onClick={prevImage}
          className="text-white bg-secondary p-3 opacity-60 rounded-full hover:opacity-90 focus:outline-none"
        >
          <FaArrowLeft size={24} />
        </button>
        <button
          onClick={nextImage}
          className="text-white bg-secondary p-3 opacity-60 rounded-full hover:opacity-90 focus:outline-none"
        >
          <FaArrowRight size={24} />
        </button>
      </div>

      {/* Semicircle with Save the Date */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        {/* Outer Semicircle */}
        <div className="w-64 h-32 rounded-t-full bg-white opacity-20 animate-pulse"></div>
        
        {/* Inner Semicircle */}
        <div className="absolute top-4 w-56 h-28 rounded-t-full bg-white flex justify-center items-center">
          <div className="text-center">
            <p className="text-2xl font-body2 font-normal text-secondary">Save the Date</p>
            <p className="text-lg font-light tracking-widest font-body2 text-secondary">May 17, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
