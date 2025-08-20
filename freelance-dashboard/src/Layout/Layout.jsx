// Layout.jsx
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-zinc-950">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Content wrapper */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 md:px-6 bg-white dark:bg-zinc-900 shadow-md sticky top-0 z-20">
          {/* Hamburger - only mobile */}
          <button
            className="md:hidden p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
          <h1 className="text-lg font-semibold text-gray-800 dark:text-white">
            FreelanceHub Dashboard
          </h1>
        </header>

        {/* Main content */}
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
