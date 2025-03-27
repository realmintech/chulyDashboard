"use client";

import { FiEdit2 } from "react-icons/fi";
import Image from "next/image";

type Category = "Hobbies" | "Interests" | "AboutMe";
type ColorMapping = Record<string, string>;

const colorMapping: ColorMapping = {
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

interface ProfileItem {
  label: string;
  icon: string;
  value?: string;
}

const hobbies: ProfileItem[] = [
  { icon: "/Umbrella.png", label: "Laying on the Beach" },
  { icon: "/bike.png", label: "Biking" },
  { icon: "/RiceBowl.png", label: "Cooking" },
  { icon: "/Tango.png", label: "Dancing" },
  { icon: "/Museum.png", label: "Museums & Arts" },
];

const interests: ProfileItem[] = [
  { icon: "/Airplane.png", label: "Travel" },
  { icon: "/Paintbrush.png", label: "Drawing" },
  { icon: "/Hourglass.png", label: "History" },
  { icon: "/Axe.png", label: "Woodworking" },
  { icon: "/Camera.png", label: "Photography" },
  { icon: "/Ink.png", label: "Poetry" },
  { icon: "/Needle.png", label: "Knitting" },
];

const aboutMe: ProfileItem[] = [
  { label: "Gender", value: "Male", icon: "/gender.png" },
  { label: "Age", value: "27", icon: "/people.png" },
  { label: "Occupation", value: "Engineer", icon: "/Job.png" },
  { label: "Relationship", value: "Single", icon: "/Romance.png" },
  { label: "Location", value: "Lagos", icon: "/Location.png" },
  { label: "Height range", value: "5'5 - 6'0", icon: "/twoPeople.png" },
  { label: "Weight range", value: "60 - 70kg", icon: "/Body.png" },
  { label: "Religion", value: "Christianity", icon: "/Lotus.png" },
  { label: "Nationality", value: "Nigerian", icon: "/Globe.png" },
];

export default function ProfileOverview() {
  return (
    <div className="p-8">
      <div className="bg-gray-100 p-4 rounded-md flex justify-between items-center max-w-3xl border border-gray-400">
        <input
          type="text"
          placeholder="A few words about myself"
          className="bg-transparent outline-none w-full h-[50px] text-gray-600"
          readOnly
        />
        <FiEdit2 className="text-gray-500 cursor-pointer" />
      </div>

      <div className="mt-4 flex gap-4 border border-gray-400 p-3 rounded-lg max-w-3xl">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-gray-300">
          <Image
            src="/profileImage.png"
            alt="Profile"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-wrap gap-8">
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="w-24 h-24 flex flex-col justify-center items-center border border-gray-300 rounded-lg"
              >
                <span className="text-gray-500 text-sm">Add Photo</span>
                <Image
                  src="/AddImage.png"
                  alt="Add"
                  width={30}
                  height={30}
                  objectFit="cover"
                />
              </div>
            ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <ProfileSection title="My Hobbies" items={hobbies} />

        <ProfileSection title="My Interests" items={interests} />

        <div className="bg-white py-6 px-10 shadow-sm rounded-lg">
          <h3 className="font-semibold">About Me</h3>
          <div className="mt-3 space-y-2 text-gray-700">
            {aboutMe.map((info, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div
                  className={`w-[35px] h-[35px] rounded-full flex items-center justify-center ${
                    colorMapping[info.label]
                  }`}
                >
                  <Image
                    src={info.icon}
                    alt={info.label}
                    width={20}
                    height={20}
                    objectFit="cover"
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
  );
}

interface ProfileSectionProps {
  title: string;
  items: ProfileItem[];
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ title, items }) => (
  <div className="bg-white py-6 px-10 shadow-sm rounded-lg">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold">{title}</h3>
      <FiEdit2 className="text-gray-500 cursor-pointer" />
    </div>
    <div className="grid grid-cols-4 gap-3 mt-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-[56px] h-[75px]"
        >
          <div
            className={`w-[45px] h-[45px] rounded-full flex items-center justify-center ${
              colorMapping[item.label]
            }`}
          >
            <Image
              src={item.icon}
              alt={item.label}
              width={25}
              height={25}
              objectFit="cover"
            />
          </div>
          <p className="text-sm text-center">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
);
