import { FaMale, FaFemale } from 'react-icons/fa';
import backgroundPattern from '../assets/DC2.jpeg'; // Background image

const DressCode = () => {
  return (
    <section
      id="dress-code"
      className="py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      {/* Background overlay for better contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-5xl font-cursive2 mb-12 text-white animate-fadeIn">Dress Code</h2>

        <div className="flex justify-center gap-20 items-center">
          <div className="text-white w-1/2">
            Gentlemen in suits or long-sleeve shirts, and ladies in long dresses, all in the elegant shade of emerald green.
          </div>
        </div>
      </div>
    </section>
  );
};

export default DressCode;
