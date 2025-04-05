import React, { useState } from "react";
import womanfb from "../assets/womanfb.png";
import womanx from "../assets/woamnx.png";
import tiktok from "../assets/tiktok.png";
import { Plus, X } from "lucide-react";
import pintrest from "../assets/pintrest.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
const SocialProfiles = () => {
  const [selectedProfile, setSelectedProfile] = useState("Julit-tee");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-2">
      <h2 className="text-sm text-gray-500 uppercase">Social Profiles</h2>

      <div className="flex flex-col gap-3 mt-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={womanfb}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm">Juliteee</span>
          </div>
          <input
            type="checkbox"
            checked={selectedProfile === "Julitee"}
            onChange={() => setSelectedProfile("Julitee")}
            className={`form-checkbox h-4 w-4 cursor-pointer ${
              selectedProfile ? "text-green-500" : ""
            } transition duration-200`}
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={womanx}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm">Julit-tee</span>
          </div>
          <input
            type="checkbox"
            checked={selectedProfile === "Julit-tee"}
            onChange={() => setSelectedProfile("Julit-tee")}
            className="form-checkbox cursor-pointer h-4 w-4 text-green-500 transition duration-200"
          />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={tiktok}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm">Tiktok</span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="text-gray-600 cursor-pointer bg-white p-1 rounded-full hover:text-black transition"
          >
            <Plus size={18} />
          </button>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={pintrest}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm">Pintrest</span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="text-gray-600 cursor-pointer bg-white p-1 rounded-full hover:text-black transition"
          >
            <Plus size={18} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={instagram}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm">Instagram</span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="text-gray-600 cursor-pointer bg-white p-1 rounded-full hover:text-black transition"
          >
            <Plus size={18} />
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <img
              src={youtube}
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="text-sm">Youtube</span>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="text-gray-600 cursor-pointer bg-white p-1 rounded-full hover:text-black transition"
          >
            <Plus size={18} />
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-sm shadow-xl relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Link Your Account
            </h3>
            <p className="text-sm text-gray-600">
              This is where you can connect your social account.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialProfiles;
