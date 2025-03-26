import ProfileCard from "@/components/ProfileCard";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className="flex items-center flex-wrap justify-between p-4 w-full max-w-7xl">
        <div className="flex items-center gap-4">
          <Image
            src="/travel-agent.png"
            width={100}
            height={100}
            className="rounded-full"
            alt="Profile"
          />

          <div className="flex flex-col">
            <h1 className="text-lg font-semibold text-gray-900">
              Welcome, Temiloluwa
            </h1>
            <p className="text-sm text-gray-500 mb-2">
              My Profile Completeness
            </p>

            <div className="flex items-center gap-2">
              <div className="relative w-40 h-3 bg-gray-300 rounded-full">
                <div className="absolute top-0 left-0 h-3 w-[60%] bg-red-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-600">60%</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <h2 className="text-sm font-semibold text-gray-900">
            Relationship Type:
          </h2>
          <select className="px-3 py-1 shadow-lg rounded-md text-sm focus:outline-none">
            <option value="Dating">Dating</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </div>
      </section>
      <section>
        <ProfileCard />
      </section>
    </>
  );
};

export default page;
