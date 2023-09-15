import React from 'react';

export const TabContext = React.createContext();

export function Tabs({ labels, children }) {
  const [
    currentTab,
    setCurrentTab
  ] = React.useState(labels[0]);

  const uniqueLabels = [...new Set(labels)];

  const labelValues = {
    "s": "Terse",
    "sm": "Standard",
    "sml": "Verbose"
  }

  return (
    <TabContext.Provider value={currentTab}>
      <div role="tablist">
        {uniqueLabels.map((label) => (
          <div key={label}>
            <input
              type="radio"
              id={label}
              role="tab"
              aria-selected={label === currentTab}
              onClick={() => setCurrentTab(label)}
              name="tabs"
            /> {''}
            <label htmlFor={label}>{labelValues[label]}</label>
          </div>
        ))}
      </div>
      {children}
    </TabContext.Provider>
  );
};

export function Tab({ label, children }) {
    const currentTab = React.useContext(TabContext);
  
   // if (label !== currentTab) {
    if (!currentTab.includes(label)) {
      return null;
    }
  
    return children;
  }