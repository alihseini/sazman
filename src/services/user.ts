import toast from "react-hot-toast";
import api from "../utils/api";

const getCaptcha = () => {
  return new Promise((resolve, reject) => {
    api
      .get("v1/Authenticate/CreateExternalCaptcha")
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
        toast(error);
      });
  });
};

export { getCaptcha };
