import React from "react";
import vodafoneLogo from "../assets/vodafone.png";
import { HiChevronUpDown } from "react-icons/hi2";
import { FiPlus } from "react-icons/fi";
const VodafoneCard = () => {
  return (
    <div className="flex flex-col p-4">
      <div className="flex justify-between bg-white p-2 shadow-md items-center rounded-t-md">
        <div className="flex items-center gap-2">
          <img src={vodafoneLogo} alt="vodafone" className="w-10 h-10" />
          <h1 className="text-sm">Vodafone</h1>
        </div>
        <HiChevronUpDown size={20} className="text-black font-bold" />
      </div>

      <div className="bg-gray-300 rounded-b-md flex gap-2 items-center px-3 py-1">
        <FiPlus size={20} className="text-black" />
        <h3 className="text-sm text-black">Invite Team Members</h3>
      </div>
    </div>
  );
};

export default VodafoneCard;
