import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const profiles = [
  {
    name: "Davina",
    age: 23,
    location: "Abuja",
    match: "85%",
    verified: true,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare eros mi, sed auctor libero finibus nec.",
    img: "/profile1.jpg",
    avatar: "/avatar1.jpg",
    btnType: "red", // "red" for "More Info", "green" for "View Info"
  },
  {
    name: "Emily",
    age: 31,
    location: "Lagos",
    match: "80%",
    verified: false,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "/profile2.jpg",
    avatar: "/avatar2.jpg",
    btnType: "red",
  },
  {
    name: "John",
    age: 28,
    location: "Delta",
    match: "72%",
    verified: true,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "/profile3.jpg",
    avatar: "/avatar3.jpg",
    btnType: "red",
  },
  {
    name: "Karen",
    age: 23,
    location: "Abuja",
    match: "85%",
    verified: false,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "/profile4.jpg",
    avatar: "/avatar4.jpg",
    btnType: "green",
  },
];

const ProfileCard = ({ profile }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-[300px]">
      {/* Profile Image */}
      <div className="relative">
        <Image
          src={profile.img}
          width={300}
          height={180}
          alt="Profile"
          className="w-full h-40 object-cover"
        />
        {/* Overlay Profile Picture */}
        <div className="absolute bottom-[-20px] left-3 border-4 border-white rounded-full">
          <Image
            src={profile.avatar}
            width={60}
            height={60}
            alt="User Avatar"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Profile Details */}
      <div className="p-4 pt-6">
        <h2 className="text-lg font-semibold">
          {profile.name}, {profile.age}
        </h2>
        <p className="text-sm text-gray-500">{profile.location}</p>
        <p className="text-sm font-semibold text-gray-900">
          {profile.match} Match
        </p>

        {profile.verified && (
          <p className="text-xs text-blue-500 font-medium mt-1">
            ✅ Verified Address
          </p>
        )}

        <p className="text-sm text-gray-600 mt-2">{profile.bio}</p>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4">
          <button
            className={`px-4 py-1 text-sm font-semibold rounded-md ${
              profile.btnType === "red"
                ? "bg-red-500 text-white"
                : "bg-green-500 text-white"
            }`}
          >
            {profile.btnType === "red" ? "More Info" : "View Info"}
          </button>
          <FaHeart className="text-gray-400 hover:text-red-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

const ProfileGrid = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </section>
  );
};

export default ProfileGrid;
