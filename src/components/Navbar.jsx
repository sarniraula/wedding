import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4 z-50">
      <div className='flex justify-between items-center px-10'>
        {/* Logo and Title */}
        <div className='flex items-center'>
          <h1 className="text-center text-3xl text-secondary font-cursive2 ">Jan & Alfie</h1>
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 text-3xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Links for Larger Screens */}
        <ul className={`md:flex gap-10 hidden transition-all duration-300 ease-in-out`}>
          <li>
            <a href="#home" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              HOME
            </a>
          </li>
          <li>
            <a href="#events" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              WEDDING DETAILS
            </a>
          </li>
          <li>
            <a href="#invitation" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              INVITATION
            </a>
          </li>
          <li>
            <a href="#our-story" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              OUR STORY
            </a>
          </li>
          <li>
            <a href="#gallery" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              PRENUP PHOTOS
            </a>
          </li>
          <li>
            <a href="#faqs" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              FAQs
            </a>
          </li>
          <li>
            <a href="#rsvp" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              RSVP
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu Links (Dropdown) */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-white absolute top-full left-0 w-full shadow-md`}>
        <ul className="flex flex-col items-center py-4">
          <li>
            <a href="#home" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              HOME
            </a>
          </li>
          <li>
            <a href="#events" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              WEDDING DETAILS
            </a>
          </li>
          <li>
            <a href="#our-story" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              OUR STORY
            </a>
          </li>
          <li>
            <a href="#gallery" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              PRENUP PHOTOS
            </a>
          </li>
          <li>
            <a href="#faqs" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              FAQs
            </a>
          </li>
          <li>
            <a href="#rsvp" className="text-gray-700 hover:border-b-2 border-secondary font-body2 flex items-center py-2">
              RSVP
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
 