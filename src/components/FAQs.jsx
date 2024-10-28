import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQs = () => {
  const faqData = [
    {
      question: "How Do I RSVP?",
      answer: "RSVP via our website or text your response to Jan (0949 887 6762) or Alfie (0908 702 0331)—both methods are quick and easy!",
    },
    {
      question: "When is the last day to RSVP?	",
      answer: "The last day to RSVP is on April 15, 2025. Please make sure to do so before the specified date to ensure preparations can be made accordingly.",
    },
    {
      question: "Can I Bring a Plus One?",
      answer: "We request that only the named invitees attend to foster a personal atmosphere for sharing our special moments with those significant to our journey.",
    },
    {
      question: "Can I Bring My Kids?",
      answer: "We request an adult-only celebration to ensure a serene and intimate atmosphere, hoping this advance notice facilitates your planning.",
    },
    {
      question: "Can I Bring a Gift to the Wedding?",
      answer: "We're thrilled to celebrate with you and while your presence is the greatest gift, if you wish to contribute, a cash gift to support our new journey together would be appreciated—no pressure, just looking forward to good times with you!",
    },
    {
      question: "What if I can't make it?",
      answer: "If you can't make it to the wedding, please inform us promptly via message or call; your well-wishes will be felt, and you'll be missed!",
    },
    {
      question: "What Should I Wear?",
      answer: "For our celebration, we invite gentlemen to don sharp suits or crisp long sleeve shirts and ladies to wear elegant long dresses in emerald green, together weaving an evening of style and class.",
    },
    {
      question: "Is it okay to take pictures with our phones and cameras during the wedding?",
      answer: "Snap and share your unique view of our wedding on our online album at dots.com to help create a collective story of the day's joy and surprises.",
    },
  ];

  return (
    <section className="w-full max-w-3xl mx-auto p-4">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-cursive2 font-semibold text-emerald-800">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          Here are some of the most common questions about our wedding.
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-gray-200 pb-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Question */}
      <div className="flex justify-between items-center cursor-pointer">
        <h3 className="text-xl font-medium text-gray-800">{question}</h3>
        <span className="text-emerald-600">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      {/* Answer */}
      {isOpen && (
        <p className="mt-2 text-gray-600 text-sm leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQs;
