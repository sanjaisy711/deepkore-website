import React, { useState } from "react";

const Sidebar = ({ isDarkMode, onLinkClick }) => {
  // State to track if the Admin submenu is open
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  // Function to toggle the Admin submenu
  const toggleAdminMenu = () => {
    setIsAdminOpen((prev) => !prev);
  };

  return (
    <div
      className={`sticky top-0 h-screen p-6 transition-all duration-300 bg-transparent ${
        isDarkMode ? "text-slate-400" : "text-slate-800"
      } shadow-lg`}
    >
      <ul>
        <li className="mb-4">
          <button
            onClick={() => onLinkClick("introduction")}
            className={`hover:text-indigo-600 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Introduction
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={toggleAdminMenu} // Toggle the admin menu
            className={`flex items-center hover:text-indigo-600 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Admin
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-2 w-4 h-4 transform transition-transform ${
                isAdminOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Conditionally render the sub-menu */}
          {isAdminOpen && (
            <ul className="ml-4 mt-2">
              <li>
                <button
                  onClick={() => onLinkClick("role")}
                  className={`hover:text-indigo-600 ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Role
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLinkClick("usermanagement")}
                  className={`hover:text-indigo-600 ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  User Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLinkClick("groupmanagement")}
                  className={`hover:text-indigo-600 ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Group Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLinkClick("auditlogs")}
                  className={`hover:text-indigo-600 ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Audit Logs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLinkClick("accountsettings")}
                  className={`hover:text-indigo-600 ${
                    isDarkMode ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  Account Settings
                </button>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-4">
          <button
            onClick={() => onLinkClick("dashboard")}
            className={`hover:text-indigo-600 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Dashboard
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => onLinkClick("dataForm")}
            className={`hover:text-indigo-600 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            DataForm
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => onLinkClick("process")}
            className={`hover:text-indigo-600 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Process
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => onLinkClick("analytics")}
            className={`hover:text-indigo-600 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Analytics
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => onLinkClick("integration")}
            className={`hover:text-indigo-600 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Integration
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => onLinkClick("pages")}
            className={`hover:text-indigo-600 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Pages
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
