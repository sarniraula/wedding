import { FaHeart } from 'react-icons/fa';

const Invitation = () => {
  return (
    <section id="invitation" className="py-20 bg-gray-100">
      <div className="pt-10 max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl text-center font-cursive2 text-secondary mb-8">
            You're Invited
          </h2>
  
          <div className='flex items-center gap-3 mb-8 justify-center'>
          <div className="h-1 w-16 bg-emerald-600"></div>
            <FaHeart className="text-emerald-600" size={20} />
          <div className="h-1 w-16 bg-emerald-600"></div>
        </div>

        {/* Grid Layout for Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img src="/i1.jpg" alt="Invitation Part 1" className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"/>
          <img src="/i2.jpg" alt="Invitation Part 2" className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"/>
          <img src="/i3.jpg" alt="Invitation Part 3" className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"/>
          <img src="/i4.jpg" alt="Invitation Part 4" className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"/>
        </div>
      </div>
    </section>
  );
};

export default Invitation;
