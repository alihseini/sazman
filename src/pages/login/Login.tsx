import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Form, Input } from "antd";
import React from "react";
import { Link } from "react-router";
import { getFormData } from "../../utils/helper";
import Captcha from "../../component/common/Captcha";

const onFinish = (values: any) => {
  console.log("Success:", values);
  const loginData = getFormData(values);
  console.log(loginData);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const Login: React.FC = () => {

  return (
    <div className="flex flex-col lg:flex-row h-160">
      <div className="hidden lg:flex text-[#00375c] w-full lg:w-[45%] flex-col items-center justify-center border-l border-dashed border-gray-300 p-6">
        <img
          src="https://136.bazresi.ir/dargah/assets/img/logo.e711fe7c.svg"
          alt="logo"
          className="w-40"
        />
        <p className="mt-10 text-center text-lg">درگاه سامانه های یکپارچه</p>
        <p className="text-center text-base">سازمان بازرسی کل کشور</p>
        <Link to={"/dashboard/guest"}>136.ir</Link>
      </div>

      <div className="flex-1 w-full lg:w-[55%] p-6">
        <p className="w-full text-center text-2xl">ورود</p>
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
            name="UserName"
            rules={[{ required: true, message: "لطفا کد ملی را وارد کنید" }]}
            className="!mt-5"
          >
            <div className="p-1 bg-white relative rounded-2xl">
              <Input className="!border-none !pr-8" />
              <Icon
                icon="mingcute:user-2-line"
                className="!absolute !top-2 right-2 text-gray-400"
                width="24"
                height="24"
              />
            </div>
          </Form.Item>

          <Form.Item
            label="رمز عبور"
            name="Password"
            rules={[{ required: true, message: "لطفا رمز عبور را وارد کنید" }]}
          >
            <div className="p-1 bg-white relative rounded-2xl">
              <Input.Password className="!border-none" />
            </div>
          </Form.Item>

          <Form.Item
            label="کد امنیتی"
            name="DNTCaptchaInputText"
            rules={[{ required: true, message: "لطفا کد امنیتی را وارد کنید" }]}
          >
            <Captcha />
            <div className="p-1 bg-white relative rounded-2xl">
              <Input className="!border-none" />
            </div>
          </Form.Item>

          <div className="flex flex-col gap-3 mt-4">
            <Button type="primary" htmlType="submit" className="w-full">
              ورود
            </Button>
            <Link
              className="w-full text-center border border-primary-500 text-primary-600 py-2 rounded hover:bg-gray-50 transition"
              to="/register"
            >
              ثبت نام شهروند
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row justify-between mt-5 text-sm">
            <Link to="/forgetpass">فراموشی رمز عبور</Link>
            <Link to="/changenumber">تغییر شماره همراه</Link>
          </div>

          <div className="flex items-center my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <p className="mx-4 text-gray-500 whitespace-nowrap text-sm">
              ورود از طریق
            </p>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Link
              className="flex-1 flex items-center justify-center gap-2 border border-primary-500 text-primary-600 py-2 rounded hover:bg-gray-50 transition text-sm"
              to="/"
            >
              <img
                src="https://136.bazresi.ir/dargah/assets/logos/dolatMan.png"
                alt="دولت من"
                className="w-5 h-5"
              />
              <span>دولت من</span>
            </Link>

            <Link
              className="flex-1 flex items-center justify-center gap-2 border border-primary-500 text-primary-600 py-2 rounded hover:bg-gray-50 transition text-sm"
              to="/"
            >
              <img
                src="https://136.bazresi.ir/dargah/assets/logos/sanalogo.png"
                alt="ثنا"
                className="w-5 h-5"
              />
              <span>ثنا قوه قضائیه</span>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
