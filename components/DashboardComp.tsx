import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardComp = () => {
  return (
    <section className="flex h-screen">
      {/* Sidebar Section */}
      <aside className="w-[284px] bg-white shadow-md hidden md:block">
        <Sidebar />
      </aside>

      {/* Main Content Section */}
      <main className="flex-1 p-6 bg-gray-100 overflow-auto">
        <Outlet />
      </main>
    </section>
  );
};

export default DashboardComp;
