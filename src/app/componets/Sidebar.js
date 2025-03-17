import React, { useState } from "react";
import {
  FaProjectDiagram,
  FaUsers,
  FaIndustry,
  FaBriefcase,
  FaChartBar,
} from "react-icons/fa";

const menuItems = [
  { label: "BY USE-CASES", key: "byusecase", icon: <FaProjectDiagram /> },
  { label: "BY ROLES", key: "byroles", icon: <FaUsers /> },
  { label: "BY SIZE", key: "bysize", icon: <FaBriefcase /> },
  { label: "BY INDUSTRY", key: "byindustry", icon: <FaIndustry /> },
  { label: "BY FUNCTION", key: "byfunction", icon: <FaChartBar /> },
];

const Sidebar = ({ isDarkMode, onLinkClick }) => {
  const [activeKey, setActiveKey] = useState(null);

  const handleClick = (key) => {
    setActiveKey(key);
    onLinkClick(key);
  };

  return (
    <div
      className={`sticky top-0 h-screen w-64 p-6 transition-all duration-300 backdrop-blur-lg bg-white/10 dark:bg-gray-900/50 border border-gray-300/30 dark:border-gray-700/30 shadow-xl rounded-xl`}
    >
      {/* <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-white mb-6">
        AI-Powered Menu
      </h2> */}

      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li key={item.key}>
            <button
              onClick={() => handleClick(item.key)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                activeKey === item.key
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md scale-105"
                  : "text-gray-700 dark:text-gray-300 hover:scale-105 hover:bg-gradient-to-r hover:from-gray-100 hover:to-indigo-100 dark:hover:from-gray-800 dark:hover:to-gray-700"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
