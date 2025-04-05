import React from "react";
import { PiPlugFill } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import { CalendarCheck2, Link2 } from "lucide-react";
import { ChartNoAxesColumn } from "lucide-react";
import { Image } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { IoIosLink } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { IoIosHelpCircle } from "react-icons/io";
import logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="p-6 h-full flex flex-col">
      <div className="flex flex-col justify-between items-center h-full">
        <div className="flex items-center gap-10 flex-col">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className=" bg-transparent" />
          </div>

          {/* NavLinks */}
          <div className="flex flex-col space-y-6">
            {/* Home */}
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center justify-center gap-2 text-[#92E49A]"
                  : "flex flex-col items-center justify-center gap-2 text-[#D0D5DD] hover:text-[#92E49A]"
              }
            >
              <CalendarCheck2 size={32} className="bg-black " />
              <p className="text-sm">Home</p>
            </NavLink>

            {/* Analytics */}
            <NavLink
              to={"/analytics"}
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center justify-center gap-2 text-[#92E49A]"
                  : "flex flex-col items-center justify-center gap-2 text-[#D0D5DD] hover:text-[#92E49A]"
              }
            >
              <ChartNoAxesColumn size={32} />
              <p className="text-sm">Analytics</p>
            </NavLink>

            {/* Media */}
            <NavLink
              to={"/media"}
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center justify-center gap-2 text-[#92E49A]"
                  : "flex flex-col items-center justify-center gap-2 text-[#D0D5DD] hover:text-[#92E49A]"
              }
            >
              <Image size={32} className="bg-black " />
              <p className="text-sm">Media</p>
            </NavLink>

            {/* Message */}
            <NavLink
              to={"/message"}
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center justify-center gap-2 text-[#92E49A]"
                  : "flex flex-col items-center justify-center gap-2 text-[#D0D5DD] hover:text-[#92E49A]"
              }
            >
              <MessageCircleMore size={32} className="rounded-full" />
              <p className="text-sm">Message</p>
            </NavLink>

            {/* Link-in-bio */}
            <NavLink
              to={"/link-in-bio"}
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center justify-center gap-2 text-[#92E49A]"
                  : "flex flex-col items-center justify-center gap-2 text-[#D0D5DD] hover:text-[#92E49A]"
              }
            >
              <IoIosLink size={32} className="bg-black " />
              <p className="text-sm">Link-in-bio</p>
            </NavLink>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-center gap-4 mt-auto">
          <NavLink
            to={"/bottom"}
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center justify-center gap-2 text-[#92E49A]"
                : "flex flex-col items-center justify-center gap-2 text-[#D0D5DD] hover:text-[#92E49A]"
            }
          >
            <IoSettings size={32} className="bg-black " />
            <p className="text-sm">Settings</p>
          </NavLink>

          {/* Help */}
          <NavLink
            to={"/help"}
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center justify-center gap-2 text-[#92E49A]"
                : "flex flex-col items-center justify-center gap-2 text-[#D0D5DD] hover:text-[#92E49A]"
            }
          >
            <IoIosHelpCircle size={32} className="bg-black " />
            <p className="text-sm">Help</p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
