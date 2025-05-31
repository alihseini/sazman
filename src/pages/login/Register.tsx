import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Input, DatePicker } from "antd";
import React from "react";
import { useNavigate } from "react-router";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Register: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative">
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

      <p className="text-center text-2xl mb-6 font-semibold">ثبت نام</p>

      <Form
        name="register"
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* فیلدها */}
          <Form.Item
            label="شماره موبایل"
            name="mobile"
            rules={[
              { required: true, message: "لطفا شماره موبایل را وارد کنید" },
            ]}
          >
            <div className="p-1 bg-white relative rounded-2xl">
              <Input className="!border-none pr-10" />
              <Icon
                icon="mingcute:phone-line"
                className="absolute top-2 right-2 text-gray-400"
                width="24"
                height="24"
              />
            </div>
          </Form.Item>

          <Form.Item
            label="کد ملی"
            name="nationalId"
            rules={[{ required: true, message: "لطفا کد ملی را وارد کنید" }]}
          >
            <div className="p-1 bg-white relative rounded-2xl">
              <Input className="!border-none pr-10" />
              <Icon
                icon="mingcute:idcard-line"
                className="absolute top-2 right-2 text-gray-400"
                width="24"
                height="24"
              />
            </div>
          </Form.Item>

          <Form.Item
            label="نام"
            name="firstName"
            rules={[{ required: true, message: "لطفا نام را وارد کنید" }]}
          >
            <div className="p-1 bg-white relative rounded-2xl">
              <Input className="!border-none pr-10" />
              <Icon
                icon="mingcute:user-2-line"
                className="absolute top-2 right-2 text-gray-400"
                width="24"
                height="24"
              />
            </div>
          </Form.Item>

          <Form.Item
            label="نام خانوادگی"
            name="lastName"
            rules={[
              { required: true, message: "لطفا نام خانوادگی را وارد کنید" },
            ]}
          >
            <div className="p-1 bg-white relative rounded-2xl">
              <Input className="!border-none pr-10" />
              <Icon
                icon="mingcute:user-2-line"
                className="absolute top-2 right-2 text-gray-400"
                width="24"
                height="24"
              />
            </div>
          </Form.Item>

          <Form.Item
            label="نام پدر"
            name="fatherName"
            rules={[{ required: true, message: "لطفا نام پدر را وارد کنید" }]}
          >
            <div className="p-1 bg-white relative rounded-2xl">
              <Input className="!border-none pr-10" />
              <Icon
                icon="mingcute:user-2-line"
                className="absolute top-2 right-2 text-gray-400"
                width="24"
                height="24"
              />
            </div>
          </Form.Item>

          <Form.Item
            label="تاریخ تولد"
            name="birthDate"
            rules={[
              { required: true, message: "لطفا تاریخ تولد را وارد کنید" },
            ]}
          >
            <DatePicker
              className="w-full rounded-2xl"
              format="YYYY/MM/DD"
              placeholder="تاریخ تولد"
            />
          </Form.Item>

          <Form.Item
            label="کد امنیتی"
            name="captcha"
            className="md:col-span-2"
            rules={[{ required: true, message: "لطفا کد امنیتی را وارد کنید" }]}
          >
            <div className="p-1 bg-white relative rounded-2xl w-full md:w-1/2">
              <Input className="!border-none" />
            </div>
          </Form.Item>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <Button type="primary" htmlType="submit" className="w-full">
            ثبت نام
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Register;
