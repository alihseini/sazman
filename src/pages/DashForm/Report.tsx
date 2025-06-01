import React from "react";
import { Button, Form, Input, Select, Upload, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

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

const Report: React.FC = () => {
  return (
    <>
      <p>فرم ثبت گزارش فساد ناشناس</p>
      <Form
        name="nest-messages"
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
        validateMessages={validateMessages}
        layout="vertical"
      >
        <Form.Item name="subject" label="موضوع" rules={[{ required: true }]}>
          <Select
            showSearch
            placeholder="موضوع را انتخاب کنید"
            optionFilterProp="label"
            options={[{ value: "موضوع ۱", label: "موضوع ۱" }]}
          />
        </Form.Item>

        <Form.Item
          name="organization"
          label="دستگاه اجرایی"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            placeholder="دستگاه اجرایی را انتخاب کنید"
            optionFilterProp="label"
            options={[{ value: "دستگاه ۱", label: "دستگاه ۱" }]}
          />
        </Form.Item>

        <Form.Item
          name="specialSubject"
          label="موضوع تخصصی"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            placeholder="موضوع تخصصی را انتخاب کنید"
            optionFilterProp="label"
            options={[{ value: "تخصصی ۱", label: "تخصصی ۱" }]}
          />
        </Form.Item>

        <Form.Item
          name="reportType"
          label="نوع گزارش"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            placeholder="نوع گزارش را انتخاب کنید"
            optionFilterProp="label"
            options={[{ value: "نوع ۱", label: "نوع ۱" }]}
          />
        </Form.Item>

        <Form.Item
          name="urgency"
          label="فوریت رسیدگی به فساد"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            placeholder="فوریت را انتخاب کنید"
            optionFilterProp="label"
            options={[
              { value: "عادی", label: "عادی" },
              { value: "فوری", label: "فوری" },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="region"
          label="محدوده جغرافیایی تاثیر فساد"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            placeholder="محدودیت جغرافیایی را انتخاب کنید"
            optionFilterProp="label"
            options={[{ value: "منطقه ۱", label: "منطقه ۱" }]}
          />
        </Form.Item>

        <Form.Item
          name="orgLevel"
          label="سطح سازمانی مشارکت در فساد"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            placeholder="سطح مشارکت را انتخاب کنید"
            optionFilterProp="label"
            options={[{ value: "سطح ۱", label: "سطح ۱" }]}
          />
        </Form.Item>

        <Form.Item
          name="description"
          label="شرح"
          rules={[{ required: true, message: "لطفا شرح دهید" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            ارسال
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Report;
