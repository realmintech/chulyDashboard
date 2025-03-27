"use client";

import { FiEdit2 } from "react-icons/fi";


export default function ProfileOverview() {
const colorMapping = {
  "Laying on the Beach": "bg-green-500",
  Biking: "bg-red-500",
  Cooking: "bg-yellow-500",
  Dancing: "bg-purple-500",
  "Museums & Arts": "bg-blue-500",
  Travel: "bg-blue-700",
  Drawing: "bg-pink-500",
  History: "bg-red-600",
  Woodworking: "bg-green-500",
  Photography: "bg-yellow-500",
  Poetry: "bg-green-700",
  Knitting: "bg-indigo-800",
  Gender: "bg-red-500",
  Age: "bg-blue-500",
  Occupation: "bg-yellow-500",
  Relationship: "bg-green-500",
  Location: "bg-purple-500",
  "Height range": "bg-green-500",
  "Weight range": "bg-red-600",
  Religion: "bg-blue-700",
  Nationality: "bg-green-600",
};
  return (
    <div className="p-8">
      {/* About Myself Input */}
      <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center max-w-3xl border border-gray-400">
        <input
          type="text"
          placeholder="A few words about myself"
          className="bg-transparent outline-none w-full h-[50px] text-gray-600"
          readOnly
        />
        <FiEdit2 className="text-gray-500 cursor-pointer" />
      </div>

      {/* Profile Image & Photos */}
      <div className="mt-4 flex gap-4 border border-gray-400 p-3 rounded-lg max-w-3xl">
        {/* Profile Image */}
        <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-300">
          <img
            src="/profileImage.png"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Additional Photos */}
        <div className="flex flex-wrap gap-8 ">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="w-24 h-24 flex flex-col justify-center items-center border border-gray-300 rounded-lg"
              >
                <span className="text-gray-500 text-sm">Add Photo</span>
                <img
                  src="/AddImage.png"
                  alt="Profile"
                  className="w-[30px] h-[30px] object-cover"
                />
              </div>
            ))}
        </div>
      </div>

      {/* Hobbies & Interests */}
      <div>
        {/* Hobbies & Interests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 ">
          {/* Hobbies */}
          <div className="bg-white  py-6  px-10  shadow-sm rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">My Hobbies</h3>
              <FiEdit2 className="text-gray-500 cursor-pointer" />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-3">
              {[
                { icon: "/Umbrella.png", label: "Laying on the Beach" },
                { icon: "/bike.png", label: "Biking" },
                { icon: "/RiceBowl.png", label: "Cooking" },
                { icon: "/Tango.png", label: "Dancing" },
                { icon: "/Museum.png", label: "Museums & Arts" },
              ].map((hobby, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-[56px] h-[75px]"
                >
                  <div
                    className={`w-[45px] h-[45px] rounded-full flex items-center justify-center ${
                      colorMapping[hobby.label]
                    }`}
                  >
                    <img
                      src={hobby.icon}
                      alt={hobby.label}
                      className="w-[25px] h-[25px] object-cover"
                    />
                  </div>
                  <p className="text-sm text-center">{hobby.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="bg-white  py-6  px-10  shadow-sm rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">My Interests</h3>
              <FiEdit2 className="text-gray-500 cursor-pointer" />
            </div>
            <div className="grid grid-cols-4 gap-3 mt-3">
              {[
                { icon: "/Airplane.png", label: "Travel" },
                { icon: "/Paintbrush.png", label: "Drawing" },
                { icon: "/Hourglass.png", label: "History" },
                { icon: "/Axe.png", label: "Woodworking" },
                { icon: "/Camera.png", label: "Photography" },
                { icon: "/Ink.png", label: "Poetry" },
                { icon: "/Needle.png", label: "Knitting" },
              ].map((interest, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-[56px] h-[75px]"
                >
                  <div
                    className={`w-[45px] h-[45px] rounded-full flex items-center justify-center ${
                      colorMapping[interest.label]
                    }`}
                  >
                    <img
                      src={interest.icon}
                      alt={interest.label}
                      className="w-[25px] h-[25px] object-cover"
                    />
                  </div>
                  <p className="text-sm text-center">{interest.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* About Me */}
          <div className="bg-white py-6  px-10 shadow-sm rounded-lg">
            <h3 className="font-semibold">About Me</h3>
            <div className="mt-3 space-y-2 text-gray-700">
              {[
                { label: "Gender", value: "Male", icon: "/gender.png" },
                { label: "Age", value: "27", icon: "/people.png" },
                { label: "Occupation", value: "Engineer", icon: "/Job.png" },
                {
                  label: "Relationship",
                  value: "Single",
                  icon: "/Romance.png",
                },
                { label: "Location", value: "Lagos", icon: "/Location.png" },
                {
                  label: "Height range",
                  value: "5'5 - 6'0",
                  icon: "/twoPeople.png",
                },
                {
                  label: "Weight range",
                  value: "60 - 70kg",
                  icon: "/Body.png",
                },
                {
                  label: "Religion",
                  value: "Christianity",
                  icon: "/Lotus.png",
                },
                { label: "Nationality", value: "Nigerian", icon: "/Globe.png" },
              ].map((info, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div
                    className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
                      colorMapping[info.label]
                    }`}
                  >
                    <img
                      src={info.icon}
                      alt={info.label}
                      className="w-[20px] h-[20px] object-cover"
                    />
                  </div>
                  <p className="font-medium flex w-full">
                    <span className="font-normal text-[12px] w-24">
                      {info.label}:
                    </span>
                    <span className="ml-2">{info.value}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
