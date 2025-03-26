"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { FiMenu } from "react-icons/fi"; // Importing Hamburger Icon

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <section className="relative flex h-screen">
      {/* Hamburger Menu - Always Visible */}
      <button
        className="fixed top-4 left-4 z-50 shadow-lg p-2 bg-white rounded-full"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FiMenu className="text-2xl" />
      </button>

      {/* Sidebar - Initially Hidden Until Clicked */}
      {isSidebarOpen && (
        <aside className="fixed inset-y-0 left-0 w-[284px] bg-white shadow-lg z-50">
          <Sidebar />
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✖
          </button>
        </aside>
      )}

      {/* Main Content - Not Affected by Sidebar */}
      <main className="flex-1 p-4 md:p-6 bg-gray-100 overflow-y-auto">
        {children}
      </main>

      {/* Backdrop for Mobile when Sidebar is Open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </section>
  );
}
