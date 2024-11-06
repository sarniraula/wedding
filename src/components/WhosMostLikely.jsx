import React, { useState } from 'react';
import { FaSun, FaHeart, FaCalendarAlt, FaMicrophone, FaGift } from 'react-icons/fa';
import ReactCardFlip from 'react-card-flip';

const WhosMostLikely = () => {
  const [flipped, setFlipped] = useState(false);
  const cards = [
    {
      icon: <FaSun size={60} className="text-amber-400" />,
      question: "Who's Most Likely to Wake Up for a Sunrise?",
      answer: "That sure is Alfie! He's the morning person between the two, always up with the first rays of the sun. Jan, on the other hand, is more of a night owl, often hitting her creative stride when the stars are out. Alfie has a real love for sunrises and sunsets—it's his thing. He says there's something magical about that quiet time of day that just can't be beaten.",
    },
    {
      icon: <FaHeart size={60} className="text-rose-500" />,
      question: "Who's Most Likely to Plan a Surprise Date?",
      answer: "That would be Jan. She's the hopeless romantic of the two, always dreaming up ways to surprise Alfie with thoughtful gestures. Alfie has also been known to pull off unforgettable surprises, like the time he showed up unexpectedly for her birthday. Moments like these keep their love exciting and full of wonder.",
    },
    {
      icon: <FaCalendarAlt size={60} className="text-emerald-500" />,
      question: "Who's Most Likely to Forget an Anniversary?",
      answer: "Actually, neither Jan nor Alfie is likely to forget an anniversary. They often start planning a whole month in advance, ensuring their celebrations are meaningful. Their teamwork and excitement for these milestones ensure they’re always cherished.",
    },
    {
      icon: <FaMicrophone size={60} className="text-blue-500" />,
      question: "Who's Most Likely to Sing in Karaoke?",
      answer: "If it's public karaoke, Jan's the one to step up to the mic, loving every moment of it. But in private, Alfie takes the stage, serenading Jan with confidence when they’re alone, making it an intimate performance just for her.",
    },
    {
      icon: <FaGift size={60} className="text-purple-600" />,
      question: "Who's Most Likely to Splurge on Fancy Gifts for the Other?",
      answer: "Definitely Alfie. While he’s thrifty with friends, he loves to surprise Jan with extravagant gifts as his special way of showing love. Jan, on the other hand, prefers smaller, personalized gifts that add a thoughtful touch.",
    },
  ];

  return (
    <section id="whos-most-likely" className="relative py-10 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        
        {/* Section Title */}
        <h2 className="text-5xl font-cursive2 text-emerald-900 mb-8">
          Who's Most Likely To?
        </h2>

        <div className='flex items-center gap-3 mb-8 justify-center'>
          <div className="h-1 w-16 bg-emerald-600"></div>
            <FaHeart className="text-emerald-600" size={20} />
          <div className="h-1 w-16 bg-emerald-600"></div>
        </div>
        
        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <FlipCard key={index} icon={card.icon} question={card.question} answer={card.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FlipCard = ({ icon, question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className="perspective cursor-pointer mx-auto"
      onClick={() => setFlipped(!flipped)}
    >
      <ReactCardFlip isFlipped={flipped} flipDirection="vertical">
        <div 
            className="flip-card-front w-[300px] h-[300px] bg-white shadow-lg p-6 rounded-lg flex flex-col items-center justify-center"
            onClick={() => setFlipped(!flipped)}
        >
          <div className="mb-4">{icon}</div>
          <h3 className="text-xl font-body2 font-semibold text-gray-800">{question}</h3>
        </div>

        <div className="flip-card-back w-[300px] h-[300px] bg-white shadow-lg p-6 rounded-lg flex items-center justify-center"
            onClick={() => setFlipped(!flipped)}
        >
          <p className="text-sm text-gray-600 font-body2 font-medium leading-relaxed">{answer}</p>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default WhosMostLikely;
