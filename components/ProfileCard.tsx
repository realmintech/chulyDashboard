import Image from "next/image";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { MdVerified } from "react-icons/md";
import { profiles } from "./data/profile";

const ProfileCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2">
      {profiles.map((profile, index) => (
        <section
          className="bg-white shadow-lg rounded-xl overflow-hidden"
          key={index}
        >
          <div className="relative w-full h-[180px]">
            <Image
              src={profile.img}
              layout="fill"
              objectFit="cover"
              alt="Profile Background"
            />
          </div>

          <div className="relative flex justify-center">
            <div className="absolute -top-12 w-24 h-24 rounded-full border-4 border-white overflow-hidden">
              <Image
                src={profile.avatar}
                width={96}
                height={96}
                className="object-cover"
                alt={`${profile.name} avatar`}
              />
            </div>
          </div>

          <div className="text-center mt-6 px-6 pb-4">
            <div className="flex justify-between items-center">
              <div className="text-left">
                <h1 className="text-lg font-semibold">
                  {profile.name}, <span>{profile.age}</span>
                </h1>
                <p className="text-gray-600 text-sm">{profile.location}</p>
              </div>
              <div className="text-right">
                <h1 className="text-sm font-semibold">{profile.match} Match</h1>
                {profile.verified && (
                  <span className="flex items-center text-blue-600 text-xs font-medium">
                    <MdVerified className="text-blue-500 mr-1" />
                    Verified Address
                  </span>
                )}
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-3 leading-relaxed">
              {profile.bio}
            </p>

            <div className="flex justify-between items-center mt-4">
              <button
                className={`px-4 py-2 rounded-full text-white text-sm ${
                  profile.btnType === "red" ? "bg-red-500" : "bg-green-500"
                }`}
              >
                {profile.btnText}
              </button>
              <button>
                <CiHeart className="cursor-pointer text-3xl" />
              </button>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProfileCard;
