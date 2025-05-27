import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";

interface Item {
  id: string;
  title: string;
  image: string;
  link: string;
}

const CardsFromJson: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => setItems(json.data));
  }, []);

  return (
    <Row gutter={[16, 16]} justify="center" className="p-6">
      {items.map((item) => (
        <Col key={item.id}>
          <div className="w-64 h-48 bg-gray-100 rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-lg transition">
            <img src={item.image} alt={item.title} className="w-12 h-12 mb-4" />
            <p className="text-center text-sm font-medium">{item.title}</p>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default CardsFromJson;
