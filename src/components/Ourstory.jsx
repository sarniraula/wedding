import React from 'react';
import groom from '../assets/Groom.jpg';
import bride from '../assets/Bride.jpg';
import banner from '../assets/banner8.jpg';
import Proposal from './Proposal';
import WhosMostLikely from './WhosMostLikely';
import { FaHeart } from 'react-icons/fa';

const Ourstory = () => {
  return (
    <section 
        id='our-story'
        className="py-20 relative bg-fixed bg-cover bg-center" 
        style={{
            backgroundImage: `url(${banner})`
          }}
    >

    {/* Background Overlay */}
    <div className="absolute inset-0 bg-white bg-opacity-50"></div>

      <div className="relative container md:w-2/3 mx-auto px-4">
        {/* Our First Date */}
        <h2 className="text-4xl md:text-5xl text-center font-cursive2 text-secondary mb-8">
          Our First Date
        </h2>

        <div className='flex items-center gap-3 mb-8 justify-center'>
        <div className="h-1 w-16 bg-emerald-600"></div>
          <FaHeart className="text-emerald-600" size={20} />
        <div className="h-1 w-16 bg-emerald-600"></div>
      </div>

        <p className="text-2xl text-center font-body2 text-secondary mb-2">
          A Tale of Coffee, Conversations, and Concealed Blisters
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-opacity-80 bg-slate-50 shadow-lg p-5 rounded-lg items-center border-secondary-1">
          {/* Bride Story + Image */}
          <div className="order-2 md:order-1">
            <h3 className="text-lg text-emerald-800 mb-2">From Jan's Perspective:</h3>
            <p className="text-sm font-body2 font-medium leading-relaxed text-justify text-gray-600">
                The anticipation of our first date had me in knots. It had been ages since I'd been on a date, 
                and the thought of meeting Alfie sent a flurry of butterflies through my stomach. I wanted 
                everything to be perfect, so I found myself shopping for a new outfit the day before—top, 
                pants, and shoes, all chosen with care. When we met at Toby's Estate in Rada that sunny afternoon, 
                I noticed we both sported matching sling bags, an amusing coincidence that eased my nerves a bit.
                <br /><br />
                Our date stretched from a cozy afternoon coffee to dinner at Via Mare, and then to drinks in 
                Greenbelt 5, lasting until the stars were well up in the sky. Throughout it all, I was battling 
                a silent struggle: the new shoes, as stylish as they were, had begun to torture my feet with 
                blisters. Halfway through, the pain was almost unbearable, but I was too embarrassed to admit 
                my folly. The thought of Alfie realizing how much effort I'd put into preparing for the date, 
                to the point of enduring pain, seemed too mortifying. So, I smiled and laughed, hiding my 
                discomfort as best as I could.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img src={bride} alt='bride' className="shadow-lg w-full object-fill" />
          </div>
          
          {/* Groom Story + Image */}
          <div className="order-3 md:order-3">
            <img src={groom} alt='groom' className="shadow-lg w-full object-fill" />
          </div>
          <div className="order-4 md:order-4">
            <h3 className="text-lg text-emerald-800 mb-2">From Alfie's Perspective:</h3>
            <p className="text-sm font-body2 font-medium leading-relaxed text-justify text-gray-600">
                To me, our first date was an exciting prospect, not just for the potential of romance but 
                also for the comfort of companionship during a time when the world felt so isolated. The 
                pandemic had made such meetings rare, and knowing that Jan and I shared the same native 
                tongue of Bisaya and had walked the same halls in college added an extra layer of excitement. 
                It was like a reunion of sorts, a chance to reminisce and connect with someone who could 
                understand parts of me that are often tucked away in the city.
                <br /><br />
                As we moved from the coffee shop to dinner and then to drinks, I found myself enjoying Jan's 
                company more and more. There was an ease between us, a shared laughter that seemed to bridge 
                any gap that might have existed. Little did I know, Jan was enduring a silent battle with her 
                new shoes, a detail she kept hidden with a grace I only came to know about much later. 
                It's funny how, in trying to make a good impression, we sometimes put ourselves through 
                unnecessary pain. Yet, in the end, it was the simplicity of our connection that truly made 
                the day memorable.								
            </p>
          </div>
        </div>
      </div>

      {/* Shared Memory */}
      <div className="relative container mt-20 md:w-2/3 mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl text-center font-cursive2 text-secondary mb-8">
          A Shared Memory
        </h2>

        <div className='flex items-center gap-3 mb-8 justify-center'>
        <div className="h-1 w-16 bg-emerald-600"></div>
          <FaHeart className="text-emerald-600" size={20} />
        <div className="h-1 w-16 bg-emerald-600"></div>
      </div>
        
        <div className=" bg-opacity-80 bg-slate-50 shadow-lg p-5 rounded-lg items-center border-secondary-1">
          {/* Bride Story + Image */}
          <div className="order-2 md:order-1">
            <p className="text-sm font-body2 font-medium leading-relaxed text-justify text-gray-600">
                The anticipation of our first date had me in knots. It had been ages since I'd been on a date, 
                and the thought of meeting Alfie sent a flurry of butterflies through my stomach. I wanted 
                everything to be perfect, so I found myself shopping for a new outfit the day before—top, 
                pants, and shoes, all chosen with care. When we met at Toby's Estate in Rada that sunny afternoon, 
                I noticed we both sported matching sling bags, an amusing coincidence that eased my nerves a bit.
                <br /><br />
                Our date stretched from a cozy afternoon coffee to dinner at Via Mare, and then to drinks in 
                Greenbelt 5, lasting until the stars were well up in the sky. Throughout it all, I was battling 
                a silent struggle: the new shoes, as stylish as they were, had begun to torture my feet with 
                blisters. Halfway through, the pain was almost unbearable, but I was too embarrassed to admit 
                my folly. The thought of Alfie realizing how much effort I'd put into preparing for the date, 
                to the point of enduring pain, seemed too mortifying. So, I smiled and laughed, hiding my 
                discomfort as best as I could.
            </p>
          </div>
        </div>
      </div>

      <Proposal />
      <WhosMostLikely />
    </section>
  );
};

export default Ourstory;
