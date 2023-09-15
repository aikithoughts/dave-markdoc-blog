import React from 'react';

export const BrevityGroup = ({ children }) => {
  // You can use the additionalProp here or pass it down to child components
  const [brevityLevel, setBrevityLevel] = React.useState("s"); // Initialize with the default value

  const uniqueLabels = ["s", "sm", "sml"]; // Assuming 'labels' is defined somewhere

  const labelValues = {
    "s": "Terse",
    "sm": "Standard",
    "sml": "Verbose"
  };

  const handleRadioChange = (label) => {
    setBrevityLevel(label);
  };

  return (
    <div>
      <div role="tablist">
        {uniqueLabels.map((label) => (
          <div key={label}>
            <input
              type="radio"
              id={label}
              role="tab"
              aria-selected={label === brevityLevel}
              onChange={() => handleRadioChange(label)}
              checked={label === brevityLevel}
              name="tabs"
            />{' '}
            <label htmlFor={label}>{labelValues[label]}</label>
          </div>
        ))}
      </div>
      <div>
        {React.Children.map(children, (child) => {
          // You can pass additional props to each child component
          return React.cloneElement(child, { brevityLevel });
        })}
      </div>
    </div>
  );
};


export const Brevity = ({ label, brevityLevel, children }) => {
    if (!brevityLevel.includes(label)) {
      return null;
    }
  
    return children;
};