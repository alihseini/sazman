import { lazy, Suspense } from "react";
import DashFormLayout from "../layout/DashFormLayout";
import Loader from "../component/common/Loader";

const Report = lazy(() => import("../pages/DashForm/Report"));
const CheckReport = lazy(() => import("../pages/DashForm/CheckReport"));

export const DashForm = {
  element: <DashFormLayout />,
  path: "/",
  children: [
    {
      path: "/report",
      element: (
        <Suspense fallback={<Loader />}>
          <Report />
        </Suspense>
      ),
    },
    {
      path: "/checkreport",
      element: (
        <Suspense fallback={<Loader />}>
          <CheckReport />
        </Suspense>
      ),
    },
  ],
};
