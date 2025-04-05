import { Edit, MoreVertical, Trash2 } from "lucide-react";
import React, { useState } from "react";

const DraftCard = ({ draft, onEdit, onDelete }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  return (
    <div className="flex flex-col bg-white  rounded-lg p-4 overflow-hidden">
      <div className="flex justify-between items-center p-2">
        <h3 className="text-sm font-medium">{draft.title}</h3>

        {/* Options menu */}
        <div className="relative">
          <button
            onClick={toggleOptions}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <MoreVertical size={16} />
          </button>

          {showOptions && (
            <div className="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-md z-10">
              <div className="py-1">
                <button
                  onClick={() => {
                    onEdit(draft.id);
                    setShowOptions(false);
                  }}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                >
                  <Edit size={16} className="mr-2" />
                  Edit
                </button>
                <button
                  onClick={() => {
                    onDelete(draft.id);
                    setShowOptions(false);
                  }}
                  className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                >
                  <Trash2 size={16} className="mr-2" />
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Image */}
      <div className="w-full aspect-video overflow-hidden bg-gray-100">
        <img
          src={draft.image}
          alt={draft.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-3">
        <p className="text-xs text-gray-600 line-clamp-3">{draft.content}</p>
      </div>
    </div>
  );
};

export default DraftCard;
