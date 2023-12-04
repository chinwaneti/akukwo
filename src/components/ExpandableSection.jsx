import React, { useState } from "react";

const ExpandableSection = ({ title, content }) => {
  const [expanded, setExpanded] = useState(false);

  const truncateWords = (str, numWords) => {
    if (typeof str !== 'string') {
      console.error(`Invalid content type: ${typeof str}`);
      return '';
    }

    const words = str.split(' ');
    const truncated = words.slice(0, numWords).join(' ');
    return words.length > numWords ? `${truncated}...` : truncated;
  };

  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="font-bold text-lg">{title}</h3>
       
      </div>
      <div>
        {typeof content === "string" ? (
          <p className="text-gray-700">
            {expanded ? content : truncateWords(content, 5)}
          </p>
        ) : (
          <ul className=" list-none text-gray-700">
            {Object.entries(content).map(([week, topic], index) => (
              <li key={index}>{expanded || index === 0 ? topic : null}</li>
            ))}
          </ul>
        )}
      </div>
      {typeof content === "object" && (
        <button
          className="text-blue-500 cursor-pointer focus:outline-none"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "See Less" : "See More"}
        </button>
      )}
    </div>
  );
};

export default ExpandableSection;
