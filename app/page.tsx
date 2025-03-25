'use client'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardComp from "../components/DashboardComp";
import Profile from "../components/Profile";

export default function Home(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardComp />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
