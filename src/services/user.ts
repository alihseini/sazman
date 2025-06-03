import toast from "react-hot-toast";
import api from "../utils/api";

interface CaptchaResponse {
  data: {
    dntCaptchaImage: string;
  };
}

const getCaptcha = (): Promise<CaptchaResponse> => {
  return new Promise((resolve, reject) => {
    api
      .get<CaptchaResponse>("v1/Authenticate/CreateExternalCaptcha")
      .then((response) => {
        resolve(response.data);    
      })
      .catch((error) => {
        toast.error(error.message || "خطا در دریافت کپچا");
        reject(error);
      });
  });
};

export { getCaptcha };
