import React from "react";
import SubNavigationLinks from "../components/SubNavigationLinks";
import HeroFrame from "../components/HeroFrame";
import { AiFillAppstore } from "react-icons/ai";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa";
// TopHeader.jsx

import womanfb from "../assets/womanfb.png";
import woamnx from "../assets/woamnx.png";
import fb from "../assets/fb.png";
import tikto from "../assets/tikto.png";
import pin from "../assets/pin.png";
import insta from "../assets/insta.png";
import yout from "../assets/yout.png";
import avatar from "../assets/avatarr.png";
import { IoChevronDown } from "react-icons/io5";

import DraftGrid from "../components/DraftGrid";

const Home = () => {
  return (
    <>
      <div className="bg-gray-100">
        <SubNavigationLinks />
      </div>
      <main className="flex flex-col  w-full gap-4">
        <div className="px-8 py-6 bg-white">
          <div className="flex justify-between items-center flex-wrap">
            {/* Left: Scheduling + Icons */}
            <div className="flex items-center gap-6 flex-wrap justify-start w-full md:w-auto">
              <h2 className="text-2xl font-semibold text-gray-800 whitespace-nowrap">
                Scheduling
              </h2>
              <div className="flex items-center gap-5 flex-wrap justify-start">
                <img
                  src={womanfb}
                  alt="avatar1"
                  className="w-10 h-10 rounded-full"
                />
                <img
                  src={woamnx}
                  alt="avatar2"
                  className="w-10 h-10 rounded-full"
                />
                <img src={fb} alt="Facebook" className="w-10 h-10" />
                <img src={tikto} alt="TikTok" className="w-10 h-10" />
                <img src={pin} alt="Pinterest" className="w-10 h-10" />
                <img src={insta} alt="Instagram" className="w-10 h-10" />
                <img src={yout} alt="YouTube" className="w-10 h-10" />
              </div>
            </div>

            {/* Right: Avatar and Name */}
            <div className="flex justify-end  items-center gap-4 md:justify-start w-full md:w-auto  mt-8 md:mt-0">
              <img
                src={avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex gap-4 items-center">
                <h2 className="text-lg font-medium text-gray-800">Zippydray</h2>
                <IoChevronDown />
              </div>
            </div>
          </div>
        </div>

        <HeroFrame />

        <div className="flex justify-between items-center p-6">
          <h3 className="text-xl text-gray-900 font-semibold">Drafts</h3>
          <div className="flex gap-2 items-center">
            <AiFillAppstore className="text-gray-500" size={30} />
            <TfiMenuAlt className="text-gray-500" size={30} />
            <button className="bg-green-800 flex items-center justify-center gap-2 font-bold text-white px-4 py-2 rounded-md">
              <FaPlus />
              <span>New</span>
            </button>
          </div>
        </div>

        {/* Drafts grid */}
        <div
          className="p-6 overflow-y-auto"
          style={{
            maxHeight: "calc(100vh - 180px)", // On large screens
          }}
        >
          <div className="bg-gray-100 p-6">
            <DraftGrid />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
