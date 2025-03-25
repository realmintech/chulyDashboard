"use client";

import Image from "next/image";
import React from "react";
import { PiDotsNineBold } from "react-icons/pi";
import { datas } from "./data/SideMenu";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-[284px] h-[750px] p-6 flex flex-col items-center bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center ">
        <Image
          src="/travel-agent.png"
          className="rounded-full object-cover mb-4"
          width={75}
          height={75}
          alt="Profile Picture"
        />
        <h2 className="text-lg font-semibold text-gray-900">Temiloluwa</h2>
      </div>

      <div className="mt-6 w-full">
        <div className="flex items-center gap-4 w-full py-3 px-6 bg-red-500 text-white rounded-lg">
          <PiDotsNineBold className="text-lg" />
          <span className="text-sm font-medium">Dashboard</span>
        </div>

        {datas.map((data, index) => (
          <div
            key={index}
            className="flex items-center gap-4 w-full py-3 px-6 my-6 text-gray-700 hover:bg-gray-100 rounded-lg transition"
          >
            <Image src={data.img} width={20} height={20} alt="icon" />
            <button className="text-sm font-medium">
              <Link to="profile">{data.text}</Link>
            </button>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
