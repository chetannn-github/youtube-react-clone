import React from 'react';

const FormatString = (str) => {
  // Regular expressions to match URLs and hashtags
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const hashtagRegex = /(#\w+)/g;

  // Split the string into paragraphs based on new lines
  const paragraphs = str.split('\n');

  // Flag to check if we have encountered the first hashtag
  let foundFirstHashtag = false;

  // Function to format a single paragraph
  const formatParagraph = (paragraph, index) => {
    // Split the paragraph by URLs and hashtags, and keep them in the result array
    const parts = paragraph.split(/(https?:\/\/[^\s]+|#\w+)/g);

    // Map through the parts and return an array of JSX elements
    const jsxParts = parts.map((part, index) => {
      // Check if the part is a URL
      if (urlRegex.test(part)) {
        return (
          <React.Fragment key={index}>
            <a href={part} target="_blank" rel="noopener noreferrer">
              {part}
            </a>
            <br />
          </React.Fragment>
        );
      }
      // Check if the part is a hashtag
      if (hashtagRegex.test(part)) {
        if (!foundFirstHashtag) {
          foundFirstHashtag = true;
          return (
            <React.Fragment key={index}>
              <br />
              <a href={`https://example.com/hashtag/${part.substring(1)}`} target="_blank" rel="noopener noreferrer">
                {part}
              </a>
            </React.Fragment>
          );
        }
        return (
          <a key={index} href={`https://example.com/hashtag/${part.substring(1)}`} target="_blank" rel="noopener noreferrer">
            {part}
          </a>
        );
      }
      // Return text parts as plain text
      return <span key={index}>{part}</span>;
    });

    // If this paragraph has the last hashtag, add a line break after the last hashtag
    if (paragraph.match(hashtagRegex) && jsxParts.length > 0) {
      jsxParts.push(<br key={`br-${index}`} />);
    }

    return jsxParts;
  };

  // Map through the paragraphs and format each one
  return paragraphs.map((paragraph, index) => (
    <div key={index}>
      {formatParagraph(paragraph, index)}
      {index < paragraphs.length - 1 && <br />} {/* Add line break between paragraphs */}
    </div>
  ));
};

  export default FormatString;