import React, { useState, useRef, useEffect } from "react";
import { FaBell } from "react-icons/fa";
import FounderImage from "./Founder.jpg"; // ✅ Ensure the image is inside /components or adjust path

const recentActivities = [
  { id: 1, desc: "✅ Completed project 'Redesign Website'", time: "2 hours ago" },
  { id: 2, desc: "📱 Client approved proposal for 'Mobile App'", time: "1 day ago" },
  { id: 3, desc: "💰 Sent invoice #4567", time: "3 days ago" },
];

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white dark:bg-zinc-900 shadow-md px-6 py-4 flex justify-between items-center fixed md:static w-full md:w-auto z-20 md:ml-64 transition-colors">
      {/* Title */}
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100">
        Dashboard
      </h1>

      {/* Right side */}
      <div className="flex items-center space-x-4">
        {/* Notifications */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="relative text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors focus:outline-none"
            aria-label="Notifications"
          >
            <FaBell className="w-6 h-6" />
            <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-red-600 ring-2 ring-white dark:ring-zinc-900"></span>
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-zinc-800 shadow-xl rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700 z-30 animate-fadeIn">
              <h4 className="font-semibold px-4 py-3 text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-zinc-700">
                Recent Activities
              </h4>
              <ul className="max-h-60 overflow-y-auto divide-y divide-gray-200 dark:divide-zinc-700">
                {recentActivities.map(({ id, desc, time }) => (
                  <li
                    key={id}
                    className="px-4 py-3 hover:bg-gray-100 dark:hover:bg-zinc-700 cursor-pointer transition-colors"
                  >
                    <p className="text-gray-700 dark:text-gray-100">{desc}</p>
                    <small className="text-gray-400 dark:text-gray-400">{time}</small>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Profile */}
        <span className="hidden sm:inline text-gray-600 dark:text-gray-300 font-medium">
          Umar Farooq
        </span>
        <img
          src={FounderImage}
          alt="Founder"
          className="w-10 h-10 rounded-full ring-2 ring-indigo-500 object-cover"
        />
      </div>
    </header>
  );
}
