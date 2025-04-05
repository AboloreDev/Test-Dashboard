import React from "react";
import { FiPlus } from "react-icons/fi";

const CreatePostButton = () => {
  return (
    <button className="flex items-center justify-center gap-2 bg-green-800 text-white cursor-pointer py-2 rounded-md shadow-md hover:bg-green-600">
      <FiPlus size={20} />
      <span>Create Post</span>
    </button>
  );
};

export default CreatePostButton;
