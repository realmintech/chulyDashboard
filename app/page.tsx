"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <p>This is the main landing page.</p>
      <Link href='/dashboard' >Go to Dashboard</Link>
    </div>
  );
}
