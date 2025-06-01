import { lazy, Suspense } from "react";
import DashFormLayout from "../layout/DashFormLayout";

const Report = lazy(() => import("../pages/DashForm/Report"));

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
  ],
};
