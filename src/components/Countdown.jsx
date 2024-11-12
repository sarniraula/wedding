import React, { useState, useEffect } from 'react';
import banner from '../assets/banner9.png'
import { FaHeart } from 'react-icons/fa';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    weeks: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-05-17T15:30:00'); // Set the wedding date and time here

    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const weeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
        const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ weeks, days, hours, minutes, seconds });
      } else {
        clearInterval(intervalId); // Stop countdown when target date is reached
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section 
      className="py-20 relative bg-cover bg-right md:bg-fixed md:bg-center text-white"
      style={{
        backgroundImage: `url(${banner})`, // Replace with your background image path
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative container mx-auto text-center">
        <div className='flex items-center tracking-widest justify-center mb-20'>
            <p className="text-xl md:text-2xl font-body2 text white font-extralight animate-slideUp border-y-2 py-2">
            *** At Archdiocesan Shrine of the Sacred Heart of Jesus ***
            </p>
        </div>

        <h2 className="text-4xl md:text-5xl font-cursive2 mb-10">Counting Down</h2>

        <div className="flex items-center justify-center mb-20">
          <div className="h-[2px] w-20 bg-white opacity-70"></div>
          <FaHeart className="text-white mx-4" size={20} />
          <div className="h-[2px] w-20 bg-white opacity-70"></div>
        </div>

        <div className="flex justify-center space-x-8 text-center text-2xl font-semibold">
          <TimeBox label="Weeks" value={timeLeft.weeks} />
          <TimeBox label="Days" value={timeLeft.days} />
          <TimeBox label="Hours" value={timeLeft.hours} />
          <TimeBox label="Minutes" value={timeLeft.minutes} />
          <TimeBox label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </section>
  );
};

const TimeBox = ({ label, value }) => (
  <div className="flex flex-col items-center bg-white bg-opacity-20 md:p-4 rounded-lg md:min-w-[80px]">
    <span className="text-2xl md:text-4xl font-bold">{value}</span>
    <span className="text-sm">{label}</span>
  </div>
);

export default Countdown;
