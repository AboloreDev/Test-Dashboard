import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close menu when a link is clicked
  //   const closeMenu = () => setIsSidebarOpen(false);

  return (
    <div className="h-screen flex flex-col md:flex-row relative">
      {/* Mocile Toggle */}
      <div className="flex items-center md:hidden p-4 bg-black text-white z-20">
        <button
          onClick={toggleSidebar}
          className="flex items-center px-3 py-2 text-sm font-medium leading-5 text-white rounded-lg"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile overlay sidebar */}
      {isSidebarOpen && (
        <div
          className={`fixed inset-0 z-20 bg-black opacity-50 md:hidden
        `}
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={` bg-black w-[120px] h-screen text-white absolute md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:block z-30`}
      >
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </div>

      {/* Main Content */}
      <div className="grid overflow-auto grid-cols-1 md:grid-cols-[280px_1fr]">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
