import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router";

const { Header, Content } = Layout;

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 11) return "صبح بخیر";
  else if (hour < 16) return "ظهر بخیر";
  else if (hour < 20) return "عصر بخیر";
  else return "شب بخیر";
};

const DashboardLayout: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const today = new Date().toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!isDesktop) {
    // موبایل: فقط فول اسکرین Outlet
    return (
      <div className="w-screen h-screen overflow-auto">
        <Outlet />
      </div>
    );
  }

  // دسکتاپ: لایوت کامل
  return (
    <Layout className="h-screen overflow-hidden flex flex-col">
      <Header
        style={{
          height: 64,
          padding: 0,
          background: "#00375c",
        }}
      />
      <Content style={{ height: "calc(100% - 64px)", overflow: "hidden" }}>
        <div className="relative w-full h-full">
          <div className="h-[40%] bg-[#00375c]" />
          <div
            className="h-[60%] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://136.bazresi.ir/dargah/assets/img/bg.8a1a09b9.svg')",
            }}
          />
          <div className="absolute inset-0 flex justify-center items-center p-4">
            <div className="bg-white shadow-lg rounded-xl w-full max-w-screen-lg h-[80vh] flex flex-col lg:flex-row overflow-hidden">
              {/* محتوای اصلی */}
              <div className="w-full lg:w-[80%] bg-white flex items-center justify-center rounded-t-xl lg:rounded-tr-xl lg:rounded-r-xl p-4 overflow-auto">
                <Outlet />
              </div>

              {/* سایدبار */}
              <div
                className="relative w-full lg:w-[20%] h-48 lg:h-full overflow-hidden flex flex-col justify-end pb-4 px-3 text-white rounded-b-xl lg:rounded-b-none lg:rounded-l-xl mt-2 lg:mt-0"
                style={{
                  backgroundImage:
                    "url('https://136.bazresi.ir/dargah/assets/img/bg2.67b95ed1.jpg')",
                  filter: "brightness(0.5)",
                }}
              >
                <div className="absolute inset-0 bg-black opacity-40" />
                <div className="relative flex justify-center items-center flex-grow">
                  <img
                    src="https://136.bazresi.ir/dargah/assets/logos/logo-g.svg"
                    alt="Logo"
                    className="max-w-[70%] max-h-[70%]"
                    style={{ filter: "brightness(1)" }}
                  />
                </div>
                <div className="relative mt-2 text-center">
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
