import React from "react";
import { Outlet } from "react-router";

const DashFormLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
};

export default DashFormLayout;
