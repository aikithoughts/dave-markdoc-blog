import React, { useState } from "react";
import glossaryData from '../data/glossarydata.js';

const GLOSSARYDATA = glossaryData;

const GlossaryTerm = ({ term, plural }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    const definition = GLOSSARYDATA.find((item) => item.term === term)?.definition;
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
        <span className="glossaryterm" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span className="term">{plural && item.plural ? item.plural : `${term}s`}</span>
        {isHovered && (
          <span className="definition">
            {definition}
          </span>
        )}
      </span>
    );
  };
  
  export default GlossaryTerm;
