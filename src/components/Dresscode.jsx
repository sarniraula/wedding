import { FaMale, FaFemale, FaHeart } from 'react-icons/fa';
import backgroundPattern from '../assets/dresscode.png'; // Background image

const DressCode = () => {
  return (
    <section
      id="dress-code"
      className="py-12 md:py-52 bg-contain bg-center md:bg-bottom md:bg-cover bg-fixed relative"
      style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-cursive2 mb-10 text-white animate-fadeIn">Dress Code</h2>

        <div className='flex items-center gap-3 mb-10 justify-center'>
          <div className="h-1 w-16 bg-white"></div>
            <FaHeart className="text-white" size={20} />
          <div className="h-1 w-16 bg-white"></div>
        </div>

        <div className="flex justify-center gap-20 items-center">
          <div className="text-white font-body2 text-lg tracking-wider md:w-1/2">
            For our celebration, we invite gentlemen to don sharp suits and ladies to wear 
            elegant long dresses in the shades of green, together weaving an evening of style and class.
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
