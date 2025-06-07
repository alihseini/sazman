import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

const Loader: React.FC = () => {
  return (
    <div>
      <span>
        <Icon icon="svg-spinners:6-dots-rotate" width="24" height="24" />
      </span>
      در حال بارگزاری
    </div>
  );
};

export default Loader;
