import React from "react";

const Tab = ({ tabList, activeTab, onChange }) => {
  const getActiveStyles = (value) => {
    return activeTab === value
      ? "text-white bg-purple-400"
      : "text-secondary bg-transparent";
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-purple-500 rounded-full flex">
        {tabList.map((tab) => (
          <button
            key={tab.id}
            className={`text-xs md:text-[15px] ${getActiveStyles(
              tab.value
            )} rounded-full px-4 md:px-10 py-[10px] md:py-3 `}
            onClick={() => onChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tab;
