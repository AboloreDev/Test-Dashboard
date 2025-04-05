import React from "react";
import { Link, NavLink } from "react-router-dom";
import { CalendarCheck2 } from "lucide-react";
import { FaFile } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { VscSymbolNumeric } from "react-icons/vsc";
import { FaCalendar } from "react-icons/fa";

const SubNav = () => {
  return (
    <div className="flex gap-1 flex-col w-full bg-gray-100">
      {/* SCHEDULE */}
      <NavLink
        to={"/scheduler"}
        className={({ isActive }) =>
          `group flex items-center gap-3 px-4 py-2 rounded-md w-full transition-all duration-300
             ${
               isActive
                 ? "bg-white text-black"
                 : "bg-gray-100 text-gray-500 hover:bg-white hover:text-black"
             }`
        }
      >
        <FaCalendar
          size={20}
          className="text-gray-400  group-hover:text-black"
        />
        <p className="text-gray-500 font-semibold text-sm group-hover:text-black">
          Scheduler
        </p>
      </NavLink>

      {/* Draft */}
      <NavLink
        to={"/draft"}
        className={({ isActive }) =>
          `group flex items-center gap-3 px-4 py-2 rounded-md w-full transition-all duration-300
               ${
                 isActive
                   ? "bg-white text-black"
                   : "bg-gray-100 text-gray-500 hover:bg-white hover:text-black"
               }`
        }
      >
        <FaFile size={20} className="text-gray-400  group-hover:text-black" />
        <p className="text-gray-500 font-semibold text-sm group-hover:text-black">
          Draft
        </p>
      </NavLink>

      {/* Post */}
      <NavLink
        to={"/posts"}
        className={({ isActive }) =>
          `group flex items-center gap-3 px-4 py-2 rounded-md w-full transition-all duration-300
               ${
                 isActive
                   ? "bg-white text-black"
                   : "bg-gray-100 text-gray-500 hover:bg-white hover:text-black"
               }`
        }
      >
        <HiSpeakerphone
          size={20}
          className="text-gray-400 group-hover:text-black"
        />
        <p className="text-gray-500 font-semibold text-sm group-hover:text-black">
          Post
        </p>
      </NavLink>

      {/* Library */}
      <NavLink
        to={"/library"}
        className={({ isActive }) =>
          `group flex items-center gap-3 px-4 py-2 rounded-md w-full transition-all duration-300
               ${
                 isActive
                   ? "bg-white text-black"
                   : "bg-gray-100 text-gray-500 hover:bg-white hover:text-black"
               }`
        }
      >
        <VscSymbolNumeric
          size={24}
          className="bg-gray-400 text-white rounded-full p-1 group-hover:text-black"
        />
        <p className="text-gray-500 font-semibold text-sm group-hover:text-black">
          Library
        </p>
      </NavLink>
    </div>
  );
};

export default SubNav;
