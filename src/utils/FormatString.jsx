import React from 'react';

 const FormatString = ({str}) => {
    // Regular expression to match URLs
    const urlRegex = /(https?:\/\/[^\s]+)/g;
  
    // Split the string by URLs and keep the URLs in the result array
    const parts = str.split(urlRegex);
  
    // Map through the parts and return an array of JSX elements
    return parts.map((part, index) => {
      // Check if the part is a URL
      if (urlRegex.test(part)) {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      }
      // Return text parts as plain text
      return <span key={index}>{part}</span>;
    });
  };
  

  export default FormatString;