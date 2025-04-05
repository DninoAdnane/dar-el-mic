import React, { useEffect, useState } from "react";
import $ from "jquery"; // Ensure jQuery is imported

const FAQ = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCollapse = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {faqs.map((cnt, idx) => (
        <div
          key={idx}
          className="border border-gray-300 rounded-lg transition-all"
        >
          {/* Question Button */}
          <button
            onClick={() => toggleCollapse(idx)}
            className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center transition-all"
          >
            <div></div>
            <span className="font-semibold text-lg">{cnt.question}</span>
            <span
              className={`text-gray-500 transform transition-transform duration-300 ease-in-out ${
                openIndex === idx ? "rotate-180" : "rotate-0"
              }`}
            >
              ▼
            </span>
          </button>

          {/* Collapsible Answer with Smooth Open/Close */}
          <div
            className={`transition-all duration-300 ease-in-out transform origin-top ${
              openIndex === idx ? "opacity-100 scale-y-100 h-auto p-4 shadow-lg" : "opacity-0 scale-y-0 h-0 p-0"
            }`}
          >
            <p className="!text-gray-800 text-center">{cnt.response}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
