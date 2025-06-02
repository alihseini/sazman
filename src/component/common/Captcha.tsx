import React from "react";
import { useCaptcha } from "../../hooks/react-query/useCaptcha";
import { Icon } from "@iconify/react/dist/iconify.js";

const Captcha: React.FC = () => {
  const { captcha, isLoading, refetchCaptcha } = useCaptcha();

  if (isLoading) return <p>در حال بارگذاری کپچا...</p>;
  return (
    <div className="flex my-2 gap-2">
      <img
        src={`data:image/png;base64,${captcha?.data?.dntCaptchaImage}`}
        alt="کپچا"
      />
      <button className="hover:cursor-pointer" onClick={() => refetchCaptcha()}>
        <Icon icon="lucide:refresh-ccw" width="24" height="24" />
      </button>
    </div>
  );
};

export default Captcha;
