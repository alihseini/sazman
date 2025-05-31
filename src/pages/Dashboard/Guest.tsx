// Guest.tsx
import React, { useEffect, useState } from "react";
import { Row, Col, Button, Table } from "antd";
import Header from "../../component/common/header";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Item {
  id: string;
  title: string;
  image: string;
  link: string;
  show: string;
}

type ViewMode = "normal" | "compact" | "table";

const Guest: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);
  const [viewMode, setViewMode] = useState<ViewMode>("normal");

  const getIcon = (mode: ViewMode) => {
    switch (mode) {
      case "normal":
        return "mi:table";
      case "compact":
        return "mingcute:grid-fill";
      case "table":
        return "mingcute:list-check-fill";
      default:
        return "mingcute:windows-line";
    }
  };

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setItems(json.data));

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cycleViewMode = () => {
    setViewMode((prev) =>
      prev === "normal" ? "compact" : prev === "compact" ? "table" : "normal"
    );
  };

  const filteredItems = items.filter(
    (item) => !(item.show === "mobile" && isDesktop)
  );

  const columns = [
    {
      title: "ردیف",
      key: "index",
      render: (_: any, __: any, index: number) => index + 1,
    },
    {
      title: "تصویر",
      dataIndex: "image",
      key: "image",
      render: (src: string) => <img src={src} alt="" className="w-8 h-8" />,
    },
    {
      title: "عنوان",
      dataIndex: "title",
      key: "title",
      align: "right",
    },
  ];

  return (
    <>
      <Header />
      <div className="px-4 py-6">
        <div className="mb-4 text-center">
          <Button onClick={cycleViewMode} shape="circle" size="large">
            <Icon icon={getIcon(viewMode)} width="24" height="24" />
          </Button>
        </div>

        {viewMode === "table" ? (
          <Table
            dataSource={filteredItems}
            columns={columns}
            rowKey="id"
            pagination={false}
            showHeader={false}
          />
        ) : (
          <Row gutter={[16, 16]} justify="center">
            {filteredItems.map((item) => {
              const isMobileOnly = item.show === "mobile";

              const content = (
                <div
                  className={`w-full ${
                    viewMode === "compact" ? "h-28" : "h-48"
                  } bg-gray-100 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition cursor-pointer`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`${
                      viewMode === "compact" ? "w-8 h-8 mb-2" : "w-12 h-12 mb-4"
                    }`}
                  />
                  <p
                    className={`text-center ${
                      viewMode === "compact" ? "text-xs" : "text-sm"
                    } font-medium`}
                  >
                    {item.title}
                  </p>
                </div>
              );

              return (
                <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                  {isMobileOnly ? <a href="tel:136" className="!text-black">{content}</a> : content}
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </>
  );
};

export default Guest;
