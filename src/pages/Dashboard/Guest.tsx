// Guest.tsx
import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import Header from "../../component/common/header";

interface Item {
  id: string;
  title: string;
  image: string;
  link: string;
  show: string;
}

const Guest: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 640);  

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

  return (
    <>
      <Header />
      <div className={"px-4 py-30"}>
        <Row gutter={[16, 16]} justify="center">
          {items.map((item) => {
            if (item.show === "mobile" && isDesktop) return null;
            return (
              <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
                <div className="w-full h-48 bg-gray-100 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 mb-4"
                  />
                  <p className="text-center text-sm font-medium">
                    {item.title}
                  </p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Guest;
