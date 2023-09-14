import React from 'react';

export const TabContext = React.createContext();

export function Tabs({ labels, children }) {
  const [
    currentTab,
    setCurrentTab
  ] = React.useState(labels[0]);

  return (
    <TabContext.Provider value={currentTab}>
      <ul role="tablist">
        {labels.map((label) => (
          <li key={label}>
            <button
              role="tab"
              aria-selected={label === currentTab}
              onClick={() => setCurrentTab(label)}
            >
              {label}
            </button>
          </li>
        ))}
      </ul>
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