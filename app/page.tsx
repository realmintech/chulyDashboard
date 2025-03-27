"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-red-500 text-white text-center p-6">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
        Welcome to Our Platform
      </h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Experience the best platform to connect, discover, and explore amazing
        features.
      </p>
      <Link
        href="/dashboard"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300"
      >
        Go to Dashboard
      </Link>
    </div>
  );
}
