import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useState } from "react";
import { Link } from "react-router";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#00375c] fixed top-0 left-0 right-0 z-500">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between py-5 px-6 relative">
        <p className="hidden lg:block text-white font-semibold text-base whitespace-nowrap">
          درگاه سامانه‌های یکپارچه سازمان بازرسی کل کشور
        </p>
        <p className="block lg:hidden text-white font-semibold text-base whitespace-nowrap">
          درگاه سامانه‌های یکپارچه
        </p>
        <div className="hidden sm:flex gap-4">
          <Link
            to="/register"
            className="!bg-blue-600 hover:bg-blue-700 transition !text-white px-4 py-2 rounded-xl"
          >
            ثبت نام شهروند
          </Link>
          <Link
            to="/login"
            className="!bg-[#17A2B8] hover:bg-cyan-600 transition !text-white px-4 py-2 rounded-xl"
          >
            ورود به حساب
          </Link>
        </div>
        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? 
               <Icon icon="solar:close-circle-bold" width="24" height="24" />
             : (
              <Icon icon="solar:user-bold" width="24" height="24" />
            )}
          </button>
          {menuOpen && (
            <div className="absolute top-full left-6 mt-2 bg-white rounded-lg shadow-md py-2 px-4 flex flex-col gap-2 z-50">
              <Link
                to="/register"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
                onClick={() => setMenuOpen(false)}
              >
                ثبت نام شهروند
              </Link>
              <Link
                to="/login"
                className="bg-[#17A2B8] hover:bg-cyan-600 text-white px-4 py-2 rounded-xl"
                onClick={() => setMenuOpen(false)}
              >
                ورود به حساب
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
