"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <section className="relative flex h-screen">
      <button
        className="fixed left-4 z-50 p-2"
        onClick={() => setIsSidebarOpen(true)}
      >
        <FiMenu className="text-2xl" />
      </button>
      {isSidebarOpen && (
        <aside className="fixed left-0 w-[284px] bg-white shadow-lg z-50">
          <Sidebar />
          <button
            className="absolute top-4 right-4 text-black"
            onClick={() => setIsSidebarOpen(false)}
          >
            <FaTimes />
          </button>
        </aside>
      )}
      <main className="flex-1 p-4 md:p-6 bg-gray-100 overflow-y-auto">
        {children}
      </main>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/5 bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </section>
  );
}
