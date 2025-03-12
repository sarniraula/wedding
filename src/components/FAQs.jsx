import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaHeart } from 'react-icons/fa';
import qrCode from '../assets/QR.png';
import bpi from '../assets/bpi.png';
import gcash from '../assets/gcash.png';

const FAQs = () => {
  const faqData = [
    {
      question: "How do I RSVP?",
      answer: "RSVP via our website or text your response to Jan (0949 887 6762) or Alfie (0908 702 0331)—both methods are quick and easy!",
    },
    {
      question: "When is the last day to RSVP?	",
      answer: "The last day to RSVP is on April 15, 2025. Please make sure to do so before the specified date to ensure preparations can be made accordingly.",
    },
    {
      question: "Can I bring a plus one?",
      answer: "We request that only the named invitees attend to foster a personal atmosphere for sharing our special moments with those significant to our journey.",
    },
    {
      question: "Can I bring my kids?",
      answer: "We request an adult-only celebration to ensure a serene and intimate atmosphere, hoping this advance notice facilitates your planning.",
    },
    {
      question: "Can I bring a gift to the wedding?",
      answer: "We're thrilled to celebrate with you and while your presence is the greatest gift, if you wish to contribute, a cash gift to support our new journey together would be appreciated—no pressure, just looking forward to good times with you!",
      images: [bpi, gcash],
    },
    {
      question: "What if I can't make it?",
      answer: "If you can't make it to the wedding, please inform us promptly via message or call; your well-wishes will be felt, and you'll be missed!",
    },
    {
      question: "What should I wear?",
      answer: "For our celebration, we invite gentlemen to don sharp suits or crisp long sleeve shirts and ladies to wear elegant long dresses in emerald green, together weaving an evening of style and class.",
    },
    {
      question: "Is it okay to take pictures with our phones and cameras during the wedding?",
      answer: "Snap and share your unique view of our wedding on our online album at dots.com to help create a collective story of the day's joy and surprises.",
      images: [qrCode],
      link: 'https://onelifesocial.page.link/abfy'
    },
  ];

  return (
    <section id="faqs" className="w-full max-w-3xl mx-auto p-4 mb-24 scroll-mt-24">
      {/* Section Title */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <h2 className="text-4xl md:text-5xl font-cursive2 text-secondary">
          Frequently Asked Questions
        </h2>
      </div>

      <div className='flex items-center gap-3 mb-8 justify-center'>
        <div className="h-1 w-16 bg-emerald-600"></div>
          <FaHeart className="text-emerald-600" size={20} />
        <div className="h-1 w-16 bg-emerald-600"></div>
      </div>

      <div className="text-center mb-14">
        <p className="text-xl font-body2 font-medium tracking-wide text-gray-600 mt-2">
          Here are some of the most common questions about our wedding.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} images={faq.images} link={faq.link}/>
        ))}
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer, images , link}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-gray-200 pb-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Question */}
      <div className="flex justify-between items-center cursor-pointer mb-4">
        <h3 className="text-xl font-medium text-gray-800">{question}</h3>
        <span className="text-emerald-600">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {/* Answer */}
      {isOpen && (
        <p className="mt-2 text-gray-600 tracking-wide text-lg font-body2 font-medium leading-relaxed">
          {answer}
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="text-emerald-600 text-center underline block mt-4">
              {link}
            </a>
          )}

          {/* Render multiple images if available */}
          {images?.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {images.map((img, idx) => (
                <img key={idx} src={img} alt={`FAQ image ${idx + 1}`} className="w-80 h-80 object-cover" />
              ))}
            </div>
          )}
        </p>
      )}
    </div>
  );
};

export default FAQs;
