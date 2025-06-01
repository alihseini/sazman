import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router";

const onFinish = (values: any) => {
  console.log("Form values:", values);
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const CheckReport: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <p className="mb-10">مشاهده گزارش وضعیت فساد ناشناس</p>
      <Form
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
        layout="vertical"
      >
        <Form.Item
          label="شماره رهگیری"
          name=""
          rules={[
            { required: true, message: "لطفا شماره همراه خود را وارد کنید" },
          ]}
        >
          <div className="p-1 bg-gray-300 relative rounded-2xl">
            <Input className="!border-none" />
          </div>
        </Form.Item>

        <Form.Item
          label="کد امنیتی"
          name="captcha"
          rules={[{ required: true, message: "لطفا کد امنیتی را وارد کنید" }]}
        >
          <div className="p-1 bg-gray-300 relative rounded-2xl w-50">
            <Input className="!border-none" />
          </div>
        </Form.Item>
        <Form.Item>
          <Button danger onClick={() => navigate(-1)}>
            انصراف
          </Button>
          <Button type="primary" htmlType="submit" className="mr-5">
            ارسال
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CheckReport;
