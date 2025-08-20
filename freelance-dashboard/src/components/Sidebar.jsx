import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaChartPie,
  FaFolderOpen,
  FaUser,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
} from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Load initial theme from localStorage or system preference
  const getInitialDark = () => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialDark);

  // Sync dark mode with <html>
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { to: "/", label: "Overview", icon: <FaChartPie /> },
    { to: "/projects", label: "Projects", icon: <FaFolderOpen /> },
    { to: "/profile", label: "Profile", icon: <FaUser /> },
  ];

  return (
    <>
      {/* Hamburger (all screens) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-40 p-2 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition md:top-5 md:left-5"
      >
        <FaBars className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-zinc-900 shadow-xl flex flex-col transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-zinc-800">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white tracking-wide">
            Freelance<span className="text-blue-600">Hub</span>
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all duration-200 
                ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-700 dark:text-gray-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              <span className="text-lg">{icon}</span>
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Dark mode toggle */}
        <div className="p-4">
          <button
            onClick={() => setDarkMode((v) => !v)}
            className="w-full flex items-center justify-between px-4 py-2 bg-zinc-100 dark:bg-zinc-800 rounded-lg transition hover:scale-[1.02]"
          >
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              {darkMode ? "Dark Mode" : "Light Mode"}
            </span>
            {darkMode ? (
              <FaMoon className="w-5 h-5 text-yellow-400" />
            ) : (
              <FaSun className="w-5 h-5 text-orange-500" />
            )}
          </button>
        </div>

        {/* Footer */}
        <footer className="px-4 pb-4 text-xs text-gray-400 dark:text-gray-500 border-t border-gray-200 dark:border-zinc-800 pt-3">
          © {new Date().getFullYear()} FreelanceHub
        </footer>
      </aside>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;
