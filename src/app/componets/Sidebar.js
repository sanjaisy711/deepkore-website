import React from "react";

const Sidebar = ({ isDarkMode, onLinkClick }) => {
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
            onClick={() => onLinkClick("admin")}
            className={`hover:text-indigo-600 ${
              isDarkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Admin
          </button>
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
