"use client";

import { FiEdit2 } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

export default function ProfileHeader() {
  return (
    <div className="relative mx-10 overflow-hidden rounded-lg">
      <div className="relative h-40 md:h-56 w-full">
        <img
          src="/Leaf.png"
          alt="Cover"
          className="w-full h-full object-cover"
        />

        <button className="absolute top-4 left-4 bg-gray-600 text-white px-3 py-1 text-sm rounded-md flex items-center">
          Back
        </button>
        <button className="absolute top-4 right-4 bg-gray-800 text-white px-3 py-1 text-sm rounded-md shadow-md">
          Update Cover
        </button>
      </div>

      <div className="relative flex items-center px-6 -mt-20 md:-mt-36">
        <div className="relative w-48 h-48 md:w-52 md:h-52 rounded-lg overflow-hidden">
          <img
            src="/profileImage.png"
            alt="Profile"
            className="w-full h-full object-cover rounded-lg"
          />

          <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-md flex items-center justify-center">
            <AiOutlinePlus className="text-sm" />
          </button>
        </div>

        <div className="ml-4 flex flex-col justify-center">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold">Temiloluwa, 27</h2>
            <button className="text-gray-500 text-sm p-1">
              <FiEdit2 />
            </button>
          </div>
          <p className="text-gray-600">Lagos</p>
        </div>
      </div>

      <div className="flex justify-end space-x-3 p-4">
        <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
          Edit Profile
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-full text-sm">
          Edit Match Setup
        </button>
      </div>
    </div>
  );
}
