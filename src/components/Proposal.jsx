import React from 'react';
import proposalImage from '../assets/banner3.jpg';
import { FaHeart } from 'react-icons/fa';

const Proposal = () => {
  return (
    <section 
      id='proposal-story' 
      className="relative py-20 px-6 md:px-16 lg:px-32"
    >
      <div className="container mx-auto max-w-5xl text-gray-800 relative z-10">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl text-center font-cursive2 text-secondary mb-8">
          The Intimate Proposal
        </h2>

        <div className='flex items-center gap-3 mb-8 justify-center'>
        <div className="h-1 w-16 bg-emerald-600"></div>
          <FaHeart className="text-emerald-600" size={20} />
        <div className="h-1 w-16 bg-emerald-600"></div>
      </div>
        
        {/* Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-5 gap-8 items-center bg-white shadow-lg rounded-lg overflow-hidden">
          
          {/* Image Section */}
          <div className="order-1 md:order-1 relative h-80 md:h-full">
            <img 
              src={proposalImage} 
              alt="Proposal moment" 
              className="w-full h-full object-cover md:object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="order-2 md:order-2 text-gray-700 text-justify">
            <p className="text-sm font-body2 font-medium leading-relaxed mb-4">
              On the evening of January 3, 2024, as the celebration of Jan's birthday wound down to a cozy calm in her condo, 
              Alfie knew the time had come for a moment he had been meticulously planning for months.
            </p>
            <p className="text-sm font-body2 font-medium leading-relaxed mb-4">
              With the remnants of the birthday dinner still lingering in the air, he handed Jan a heartfelt letter—the culmination 
              of secret preparations, heartfelt conversations, and a blessing from Jan’s parents. 
            </p>
            <p className="text-sm font-body2 font-medium leading-relaxed mb-4">
              As Jan read through the lines, tears welled up, each word a reflection of their love. At the letter’s conclusion, 
              was the question, “Will you marry me?”
            </p>
            <p className="text-sm font-body2 font-medium leading-relaxed mb-4">
              The proposal was beautifully intimate, filled with tears and laughter. They shared a sweet, memorable moment 
              when the engagement ring didn’t quite fit Jan’s ring finger but settled perfectly on her pinky. The next day, 
              they took the ring to be resized, marking the start of a two-week wait. When it returned, it was more than 
              a piece of jewelry—it was a testament to a love filled with humor and joy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposal;
