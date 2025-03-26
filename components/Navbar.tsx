"use client";

import Image from "next/image";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-6 py-3 bg-white border-r-2 shadow-sm">
      <div className="flex items-center gap-4 py-2 px-16 ">
        <Image src="/logo.png" width={60} height={60} alt="Logo" />

        <p className="font-[Jaini_Purva] text-[20px] text-gray-900">Chuly</p>
      </div>
      <div className="flex items-center gap-3 flex-1 max-w-[300px] mx-auto">
        <div className="relative w-full max-w-[200px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>

        <button className="flex items-center gap-2 px-4 py-2 border rounded-full">
          <Image
            src="/Filter.png"
            width={18}
            height={18}
            className="rounded-full"
            alt="Filter"
          />
          <span className="hidden md:inline">Filter</span>
        </button>
      </div>

      {/* Right Section: Notifications & Profile Picture */}
      <div className="flex items-center gap-4">
        {/* Notification Icon with Badge */}
        <div className="relative">
          <Image
            src="/Alarm.png"
            width={22}
            height={22}
            className="rounded-full"
            alt="Profile"
          />
        </div>

        {/* Profile Picture */}
        <Image
          src="/travel-agent.png"
          width={40}
          height={40}
          className="rounded-full"
          alt="Profile"
        />
      </div>
    </nav>
  );
};

export default Navbar;
