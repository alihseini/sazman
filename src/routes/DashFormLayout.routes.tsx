import { lazy, Suspense } from "react";
import DashFormLayout from "../layout/DashFormLayout";

const Report = lazy(() => import("../pages/DashForm/Report"));
const CheckReport = lazy(() => import("../pages/DashForm/CheckReport"));

export const DashForm = {
  element: <DashFormLayout />,
  path: "/",
  children: [
    {
      path: "/report",
      element: (
        <Suspense fallback={<p>...Loading</p>}>
          <Report />
        </Suspense>
      ),
    },
    {
      path: "/checkreport",
      element: (
        <Suspense fallback={<p>...Loading</p>}>
          <CheckReport />
        </Suspense>
      ),
    },
  ],
};
