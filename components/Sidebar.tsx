"use client";

import Link from "next/link";
import Image from "next/image";
import { PiDotsNineBold } from "react-icons/pi";
import { datas } from "./data/SideMenu";

const Sidebar = () => {
  return (
    <aside className="w-[284px] h-[750px] p-6 flex flex-col items-center bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center">
        <Image
          src="/travel-agent.png"
          className="rounded-full object-cover mb-4"
          width={100}
          height={100}
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
            <Link
              href={`/dashboard/${data.href || "#"}`}
              className="text-sm font-medium"
            >
              {data.text}
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
