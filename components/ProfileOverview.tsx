"use client";

import { FiEdit2 } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";

export default function ProfileOverview() {
  return (
    <div className="p-6">
      {/* About Myself Input */}
      <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center border border-gray-400">
        <input
          type="text"
          placeholder="A few words about myself"
          className="bg-transparent outline-none w-full h-[50px] text-gray-600"
          readOnly
        />
        <FiEdit2 className="text-gray-500 cursor-pointer" />
      </div>

      {/* Profile Image & Photos */}
      <div className="mt-4 flex gap-4 border border-gray-400 p-3 rounded-lg">
        {/* Profile Image */}
        <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-300">
          <img
            src="/profileImage.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Additional Photos */}
        <div className="flex gap-8 ">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="w-24 h-24 flex flex-col justify-center items-center border border-gray-300 rounded-lg"
              >
                <AiOutlinePlus className="text-gray-400 text-2xl" />
                <span className="text-gray-500 text-sm">Add Photo</span>
              </div>
            ))}
        </div>
      </div>

      {/* Hobbies & Interests */}
      <div className="grid md:grid-cols-3 gap-4 mt-6">
        {/* Hobbies */}
        <div className="bg-white p-4 shadow-sm rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">My Hobbies</h3>
            <FiEdit2 className="text-gray-500 cursor-pointer" />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[
              { icon: "🌴", label: "Laying on the Beach" },
              { icon: "🚴", label: "Biking" },
              { icon: "🍳", label: "Cooking" },
              { icon: "💃", label: "Dancing" },
              { icon: "🏛️", label: "Museums & Arts" },
            ].map((hobby, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-2xl">{hobby.icon}</span>
                <p className="text-sm text-center">{hobby.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className="bg-white p-4 shadow-sm rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">My Interests</h3>
            <FiEdit2 className="text-gray-500 cursor-pointer" />
          </div>
          <div className="grid grid-cols-3 gap-3 mt-3">
            {[
              { icon: "✈️", label: "Travel" },
              { icon: "🎨", label: "Drawing" },
              { icon: "⏳", label: "History" },
              { icon: "🪵", label: "Woodworking" },
              { icon: "📸", label: "Photography" },
              { icon: "✍️", label: "Poetry" },
              { icon: "🧶", label: "Knitting" },
            ].map((interest, index) => (
              <div key={index} className="flex flex-col items-center">
                <span className="text-2xl">{interest.icon}</span>
                <p className="text-sm text-center">{interest.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* About Me */}
        <div className="bg-white p-4 shadow-sm rounded-lg">
          <h3 className="font-semibold">About Me</h3>
          <div className="mt-3 space-y-2 text-gray-700">
            {[
              { label: "Gender", value: "Male", icon: "🔗" },
              { label: "Age", value: "27", icon: "👤" },
              { label: "Occupation", value: "Engineer", icon: "💼" },
              { label: "Relationship", value: "Single", icon: "👨‍👩‍👧" },
              { label: "Location", value: "Lagos", icon: "📍" },
              { label: "Height range", value: "5'5 - 6'0", icon: "📏" },
              { label: "Weight range", value: "60 - 70kg", icon: "⚖️" },
              { label: "Religion", value: "Christianity", icon: "⛪" },
              { label: "Nationality", value: "Nigerian", icon: "🌍" },
            ].map((info, index) => (
              <div key={index} className="flex items-center">
                <span className="mr-2">{info.icon}</span>
                <p>
                  <span className="font-semibold">{info.label}:</span>{" "}
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
