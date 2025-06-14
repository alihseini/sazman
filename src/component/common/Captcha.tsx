import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getCaptcha } from "../../services/user";
import { useQuery } from "@tanstack/react-query";

interface CaptchaResponse {
  data: {
    dntCaptchaImage: string;
  };
}

const Captcha: React.FC = () => {
  const { data, isLoading, refetch } = useQuery<CaptchaResponse>({
    queryKey: ["captcha"],
    queryFn: getCaptcha,
    refetchOnWindowFocus: false,
  });
  console.log(data);

  if (isLoading) return <p>در حال بارگذاری کپچا...</p>;
  return (
    <div className="flex my-2 gap-2">
      <img
        src={`data:image/png;base64,${data?.dntCaptchaImage}`}
        alt="کپچا"
      />
      <button className="hover:cursor-pointer" onClick={() => refetch()}>
        <Icon icon="lucide:refresh-ccw" width="24" height="24" />
      </button>
    </div>
  );
};

export default Captcha;
