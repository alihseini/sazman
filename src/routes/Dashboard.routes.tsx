import { lazy, Suspense } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import { Navigate } from "react-router";
import Loader from "../component/common/Loader";

const Guest = lazy(() => import("../pages/Dashboard/Guest"));

export const DashboardRoute = {
  element: <DashboardLayout />,
  path: "/",
  children: [
    {
      index: true,
      element: <Navigate to="/dashboard/guest" replace />,
    },
    {
      path: "/dashboard/guest",
      element: (
        <Suspense fallback={<Loader />}>
          <Guest />
        </Suspense>
      ),
    },
  ],
};
