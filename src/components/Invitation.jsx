import { FaHeart } from 'react-icons/fa';
// import backgroundPattern from '../assets/invitation-bg.jpeg'; // Background image
import logo from '../assets/logo.png';
import vespa from '../assets/vespa.png';

const Invitation = () => {
  return (
    <section
      id="invitation"
      className="py-20 bg-cover bg-center relative"
    //   style={{ backgroundImage: `url(${backgroundPattern})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <img src={logo} alt="logo" className="h-24 mx-auto mb-4" />

        <h2 className="text-5xl font-cursive2 mb-8 text-emerald-900 animate-fadeIn">
          You’re Invited
        </h2>

        <FaHeart className="text-2xl text-center mx-auto text-emerald-500 animate-pulse" />
        <img src={vespa} alt="vespa" className="h-32 mx-auto mb-4" />

        <p className="text-lg font-body2 text-gray-700 mb-8 max-w-xl mx-auto">
          It would mean the world to us to have you join in celebrating our special day as we exchange 
          vows and celebrate love and togetherness. We can't wait to share this memorable moment with you.
        </p>

        <div className="p-8 rounded-lg shadow-lg border-t-4 border-emerald-500 animate-fadeInUp">
          <p className="text-2xl font-cursive2 text-emerald-800 mb-2">Jan & Alfie</p>
          <p className="text-lg text-gray-600 mb-2">Saturday, May 17, 2025</p>
          <p className="text-md text-gray-600">Ceremony at 3:30 PM</p>
          <p className="text-md text-gray-600">Reception to follow at 5:00 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
