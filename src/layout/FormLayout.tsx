import React from "react";
import { Outlet } from "react-router";
import { today } from "../utils/helper";

const FormLayout: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-center p-6"
      style={{
        backgroundImage:
          "url('https://136.bazresi.ir/dargah/assets/img/pivs/31.jpg')",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-md z-0" />
      <div className="relative z-10 bg-white/90 rounded-xl shadow-lg p-8 w-200">
        <Outlet />
      </div>
      <footer className="absolute bottom-0 w-full bg-black opacity-45  text-xl z-10 text-center mt-6 text-white">
        <p>{today}</p>
      </footer>
    </div>
  );
};

export default FormLayout;
