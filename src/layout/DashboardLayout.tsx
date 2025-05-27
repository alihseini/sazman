import React from "react";
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
  const today = new Date().toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
      <Layout style={{ height: "100%" }}>
        <Header style={{ height: 64, padding: 0, background: "#00375c" }} />
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
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="bg-white shadow-lg rounded-xl w-3/4 h-[80vh] flex overflow-hidden">
                <div className="w-[80%] bg-white flex items-center justify-center rounded-r-xl ml-2">
                  <Outlet />
                </div>
                <div className="relative w-[20%] rounded-l-xl overflow-hidden flex flex-col justify-end pb-4 px-3 text-white">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://136.bazresi.ir/dargah/assets/img/bg2.67b95ed1.jpg')",
                      filter: "brightness(0.5)",
                    }}
                  />
                  <div className="absolute inset-0 bg-black opacity-40" />

                  <div className="relative flex justify-center items-center h-full">
                    <img
                      src="https://136.bazresi.ir/dargah/assets/logos/logo-g.svg"
                      alt="Logo"
                      className="max-w-[80%] max-h-[80%]"
                      style={{ filter: "brightness(1)" }}
                    />
                  </div>
                  <div className="relative mt-4 text-center">
                    <p className="text-base font-semibold">{getGreeting()}</p>
                    <p className="mb-1 text-sm">{today}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
