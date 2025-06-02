import React from "react";
import { Outlet } from "react-router";

const DashFormLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover filter blur-sm scale-105"
        style={{ backgroundImage: "url('/assets/85215.jpg')" }}
      />
      <div className="relative z-10 bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
};

export default DashFormLayout;
