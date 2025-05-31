import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate } from "react-router";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const ForgetPass: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col lg:flex-row h-100">
      <div className="mb-4">
        <Button
          type="link"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary-600 !absolute !top-0 left-0"
        >
          <Icon icon="ic:baseline-arrow-back" width="20" />
          بازگشت
        </Button>
      </div>
      <div className="flex-1 w-full lg:w-[55%] p-6">
        <p className="w-full text-center text-2xl">فراموشی رمز عبور</p>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="کد ملی"
            name="nationalCode"
            rules={[{ required: true, message: "لطفا کد ملی را وارد کنید" }]}
            className="!mt-5"
          >
            <div className="p-1 bg-white relative rounded-2xl">
              <Input className="!border-none pr-10" />
              <Icon
                icon="mingcute:user-2-line"
                className="!absolute !top-2 right-2 text-gray-400"
                width="24"
                height="24"
              />
            </div>
          </Form.Item>

          <Form.Item
            label="شماره همراه"
            name=""
            rules={[
              { required: true, message: "لطفا شماره همراه خود را وارد کنید" },
            ]}
          >
            <div className="p-1 bg-white relative rounded-2xl">
              <Input className="!border-none" />
            </div>
          </Form.Item>

          <Form.Item
            label="کد امنیتی"
            name="captcha"
            rules={[{ required: true, message: "لطفا کد امنیتی را وارد کنید" }]}
          >
            <div className="p-1 bg-white relative rounded-2xl w-50">
              <Input className="!border-none" />
            </div>
          </Form.Item>

          <div className="flex flex-col gap-3 mt-4">
            <Button type="primary" htmlType="submit" className="w-full">
              ارسال کد تایید
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPass;
