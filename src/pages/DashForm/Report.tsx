import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Upload,
  message,
  Progress,
  Steps,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import Captcha from "../../component/common/Captcha";

const { Step } = Steps;
const MAX_DESCRIPTION_LENGTH = 4000;

const Report: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  // اصلاح شده: استفاده از آرایه به جای آبجکت برای ایندکس با عدد
  const fieldsToValidate = [
    [
      "subject",
      "organization",
      "specialSubject",
      "reportType",
      "urgency",
      "region",
      "orgLevel",
    ],
    ["description", "attachment"],
    ["captcha"],
  ];

  const next = async () => {
    try {
      await form.validateFields(fieldsToValidate[currentStep]);
      setCurrentStep(currentStep + 1);
    } catch {
      // Validation failed
    }
  };

  const prev = () => setCurrentStep(currentStep - 1);

  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <>
      <p className="mb-10 text-lg font-bold">فرم ثبت گزارش فساد ناشناس</p>
      <Steps current={currentStep} className="!mb-6">
        <Step title="اطلاعات پایه" />
        <Step title="شرح و فایل" />
        <Step title="تأیید نهایی" />
      </Steps>

      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        style={{ maxWidth: 600 }}
      >
        {currentStep === 0 && (
          <>
            <Form.Item
              name="subject"
              label="موضوع"
              rules={[{ required: true, message: "لطفا موضوع را وارد کنید" }]}
            >
              <Select
                placeholder="موضوع را انتخاب کنید"
                options={[{ value: "موضوع ۱", label: "موضوع ۱" }]}
              />
            </Form.Item>
            <Form.Item
              name="organization"
              label="دستگاه اجرایی"
              rules={[
                { required: true, message: "لطفا دستگاه اجرایی را وارد کنید" },
              ]}
            >
              <Select
                placeholder="دستگاه اجرایی را انتخاب کنید"
                options={[{ value: "دستگاه ۱", label: "دستگاه ۱" }]}
              />
            </Form.Item>
            <Form.Item
              name="specialSubject"
              label="موضوع تخصصی"
              rules={[
                { required: true, message: "لطفا موضوع تخصصی را وارد کنید" },
              ]}
            >
              <Select
                placeholder="موضوع تخصصی را انتخاب کنید"
                options={[{ value: "تخصصی ۱", label: "تخصصی ۱" }]}
              />
            </Form.Item>
            <Form.Item
              name="reportType"
              label="نوع گزارش"
              rules={[
                { required: true, message: "لطفا نوع گزارش را وارد کنید" },
              ]}
            >
              <Select
                placeholder="نوع گزارش را انتخاب کنید"
                options={[{ value: "نوع ۱", label: "نوع ۱" }]}
              />
            </Form.Item>
            <Form.Item
              name="urgency"
              label="فوریت رسیدگی"
              rules={[
                { required: true, message: "لطفا فوریت رسیدگی را وارد کنید" },
              ]}
            >
              <Select
                placeholder="فوریت را انتخاب کنید"
                options={[
                  { value: "عادی", label: "عادی" },
                  { value: "فوری", label: "فوری" },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="region"
              label="محدوده جغرافیایی"
              rules={[
                {
                  required: true,
                  message: "لطفا محدوده جغرافیایی را وارد کنید",
                },
              ]}
            >
              <Select
                placeholder="محدوده جغرافیایی را انتخاب کنید"
                options={[{ value: "منطقه ۱", label: "منطقه ۱" }]}
              />
            </Form.Item>
            <Form.Item
              name="orgLevel"
              label="سطح سازمانی"
              rules={[
                { required: true, message: "لطفا سطح سازمانی را وارد کنید" },
              ]}
            >
              <Select
                placeholder="سطح سازمانی را انتخاب کنید"
                options={[{ value: "سطح ۱", label: "سطح ۱" }]}
              />
            </Form.Item>
          </>
        )}

        {currentStep === 1 && (
          <>
            <Form.Item
              name="description"
              label="شرح"
              rules={[
                { required: true, message: "لطفا شرح دهید" },
                {
                  max: MAX_DESCRIPTION_LENGTH,
                  message: "حداکثر ۴۰۰۰ کاراکتر مجاز است",
                },
              ]}
            >
              <Input.TextArea
                rows={4}
                maxLength={MAX_DESCRIPTION_LENGTH}
                showCount
                onChange={(e) => setDescriptionLength(e.target.value.length)}
                placeholder="شرح فساد را وارد کنید (حداکثر ۴۰۰۰ حرف)"
              />
            </Form.Item>
            <Progress
              percent={Math.round(
                (descriptionLength / MAX_DESCRIPTION_LENGTH) * 100
              )}
              showInfo={false}
              size="small"
              strokeColor={
                descriptionLength < 3000
                  ? "#1890ff"
                  : descriptionLength < 3900
                  ? "#faad14"
                  : "#f5222d"
              }
              style={{ marginBottom: 24 }}
            />

            <Form.Item
              name="attachment"
              label="بارگذاری فایل (عکس یا PDF)"
              valuePropName="fileList"
              getValueFromEvent={(e) => (Array.isArray(e) ? e : e?.fileList)}
            >
              <Upload
                beforeUpload={(file) => {
                  const isImageOrPdf =
                    file.type === "application/pdf" ||
                    file.type.startsWith("image/");
                  if (!isImageOrPdf) {
                    message.error("فقط فایل‌های عکس یا PDF مجاز هستند!");
                  }
                  return isImageOrPdf ? true : Upload.LIST_IGNORE;
                }}
                maxCount={3}
              >
                <Button icon={<UploadOutlined />}>انتخاب فایل</Button>
              </Upload>
            </Form.Item>
          </>
        )}
        {currentStep === 2 && (
          <>
            <Captcha />
            <Form.Item
              label="کد امنیتی"
              name="captcha"
              rules={[
                { required: true, message: "لطفا کد امنیتی را وارد کنید" },
              ]}
            >
              <Input placeholder="کد امنیتی را وارد کنید" />
            </Form.Item>
          </>
        )}
        <Form.Item className="mt-6">
          {currentStep > 0 && (
            <Button onClick={prev} className="ml-2">
              قبلی
            </Button>
          )}
          {currentStep < 2 && (
            <Button type="primary" onClick={next}>
              مرحله بعد
            </Button>
          )}
          {currentStep === 2 && (
            <>
              <Button danger onClick={() => navigate(-1)}>
                انصراف
              </Button>
              <Button type="primary" htmlType="submit" className="mr-5">
                ارسال
              </Button>
            </>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default Report;
