import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router";
import { today } from "../utils/helper";

const { Content } = Layout;

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 11) return "صبح بخیر";
  else if (hour < 16) return "ظهر بخیر";
  else if (hour < 20) return "عصر بخیر";
  else return "شب بخیر";
};

const DashboardLayout: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(
    window.innerWidth >= 1024
  );

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) {
    return (
      <div
        className="w-screen h-screen overflow-auto"
        style={{ overflowX: "hidden" }}
      >
        <Outlet />
      </div>
    );
  }

  return (
    <Layout
      className="h-screen overflow-hidden flex flex-col"
      style={{ overflowX: "hidden" }}
    >
      <Content
        style={{
          height: "calc(100% - 64px)",
          overflow: "hidden",
          overflowX: "hidden",
        }}
      >
        <div className="relative w-full h-full" style={{ overflowX: "hidden" }}>
          <div className="h-[40%] bg-[#00375c]" />
          <div
            className="h-[60%] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://136.bazresi.ir/dargah/assets/img/bg.8a1a09b9.svg')",
            }}
          />
          <div
            className="absolute inset-0 flex justify-center items-center p-4"
            style={{ overflowX: "hidden" }}
          >
            <div
              className="bg-white shadow-lg rounded-xl w-full max-w-screen-lg h-[80vh] flex flex-col lg:flex-row overflow-hidden"
              style={{ overflowX: "hidden" }}
            >
              <div
                className="w-full lg:w-[80%] bg-white flex flex-col rounded-t-xl lg:rounded-tr-xl lg:rounded-r-xl p-4"
                style={{ overflowX: "hidden" }}
              >
                <div
                  className="flex-grow overflow-auto"
                  style={{ overflowX: "hidden" }}
                >
                  <Outlet />
                </div>
              </div>

              <div
                className="relative  w-full lg:w-[20%] h-48 lg:h-full overflow-hidden flex flex-col justify-end pb-4 px-3 text-white rounded-b-xl lg:rounded-b-none lg:rounded-l-xl mt-2 lg:mt-0"
                style={{
                  backgroundImage:
                    "url('https://136.bazresi.ir/dargah/assets/img/bg2.67b95ed1.jpg')",
                  filter: "brightness(0.7)",
                  overflowX: "hidden",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40" />
                <div
                  className="relative flex justify-center items-center flex-grow"
                  style={{ overflowX: "hidden" }}
                >
                  <img
                    src="https://136.bazresi.ir/dargah/assets/logos/logo-g.svg"
                    alt="Logo"
                    className="max-w-[70%] max-h-[70%]"
                    style={{ filter: "brightness(1)" }}
                  />
                </div>
                <div
                  className="relative mt-2 text-center"
                  style={{ overflowX: "hidden" }}
                >
                  <p className="text-base font-semibold">{getGreeting()}</p>
                  <p className="mb-1 text-sm">{today}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default DashboardLayout;
