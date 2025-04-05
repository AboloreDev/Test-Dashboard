import React, { useState } from "react";
import VodafoneCard from "./VodafoneCard";
import CreatePostButton from "./CreatePostButton";
import SubNav from "./SubNav";
import SocialProfiles from "./SocialProfiles";
import { BsFileEarmarkCheckFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import Vector from "../assets/Vector.png";
import { FaBars, FaChevronLeft, FaChevronRight } from "react-icons/fa";
const SubNavigationLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="md:flex flex-col justify-between h-full overflow-x-auto p-2 hidden">
        <div className="flex flex-col gap-6">
          {/* Top NAV */}
          <div className="flex flex-col gap-2 w-[250px]">
            <VodafoneCard />
            <CreatePostButton />
          </div>
          {/*  NAV */}
          <div className="flex flex-col">
            <SubNav />
          </div>
          {/* Social Profiles */}
          <div className="flex flex-col gap-2">
            <SocialProfiles />
          </div>
        </div>

        <div className="flex flex-col w-full items-start p-4 gap-6 text-gray-500 mt-auto">
          <div className="flex gap-2 items-center">
            <img src={Vector} alt="Vector" className="w-5 h-5" />
            <span className="text-sm font-semibold">Affiliate Program</span>
          </div>

          <div className="flex gap-2 items-center">
            <BsFileEarmarkCheckFill size={20} />
            <span className="text-sm font-semibold">Request Features</span>
          </div>

          <div className="flex gap-2 items-center">
            <IoMail size={20} />
            <span className="text-sm font-semibold">Contact Us</span>
          </div>
        </div>
      </div>

      <div
        className={`
    bg-gray-100 w-[280px] mt-20 z-40
    transform transition-transform min-h-screen duration-300 ease-in-out
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    fixed top-0 left-0 
    md:translate-x-0 md:relative md:hidden
  `}
      >
        <button
          className="md:hidden absolute top-20 left-68 z-50 p-2 rounded shadow"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaChevronLeft className="text-gray-800" />
          ) : (
            <FaChevronRight className="text-gray-800" />
          )}
        </button>

        {/* Scrollable Content Container */}
        <div className="flex flex-col gap-6 max-h-[calc(100vh-100px)] overflow-y-auto p-4">
          {/* Top NAV */}
          <div className="flex flex-col gap-2 w-[250px]">
            <VodafoneCard />
            <CreatePostButton />
          </div>

          {/*  NAV */}
          <div className="flex flex-col">
            <SubNav />
          </div>

          {/* Social Profiles */}
          <div className="flex flex-col gap-2">
            <SocialProfiles />
          </div>

          {/* Footer Links */}
          <div className="flex flex-col w-full items-start p-4 gap-6 text-gray-500 mt-auto">
            <div className="flex gap-2 items-center">
              <img src={Vector} alt="Vector" className="w-5 h-5" />
              <span className="text-sm font-semibold">Affiliate Program</span>
            </div>

            <div className="flex gap-2 items-center">
              <BsFileEarmarkCheckFill size={20} />
              <span className="text-sm font-semibold">Request Features</span>
            </div>

            <div className="flex gap-2 items-center">
              <IoMail size={20} />
              <span className="text-sm font-semibold">Contact Us</span>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default SubNavigationLinks;
