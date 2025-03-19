import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    // Check if text is valid
    if (!text || text.length === 0) {
      setIsTyping(false);  // If no text, stop typing effect immediately
      return;  // Exit early
    }

    let index = -1;  // Start index at -1 to ensure the first letter is typed correctly
    const lastIndex = text.length - 1;  // The last index of the text

    // Begin typing effect only if text is valid
    const interval = setInterval(() => {
      index += 1;  // Increment the index to type the next character
      setDisplayedText((prevText) => prevText + text[index]);

      // If index reaches the last character, stop the typing effect
      if (index === lastIndex) {
        clearInterval(interval);
        setIsTyping(false);  // Stop the cursor
      }
    }, speed);

    return () => clearInterval(interval);  // Cleanup interval on unmount
  }, [text, speed]);

  return (
    <div>
      <span>{displayedText}</span>
      {isTyping && <span className="cursor">|</span>}  {/* Show cursor while typing */}
    </div>
  );
};

export default TypingEffect;
