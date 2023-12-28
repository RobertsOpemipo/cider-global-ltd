import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import '../styles/Text.css'; // Import your CSS for this component

const Text = () => {
  return (
    <div className="quote-container">
      <div className="quote-icon">
        <FaQuoteLeft size={60} color="#fff" />
      </div>
      <div className="quote-content">
        <p className="quote-text">
          {/* Your generated quote goes here */}
          "Technology is best when it brings people together."
        </p>
        <p className="quote-writer">
          {/* Writer or source of the quote */}
          - John Doe
        </p>
      </div>
    </div>
  );
};

export default Text;
