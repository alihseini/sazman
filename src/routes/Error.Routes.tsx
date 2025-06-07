import { lazy, Suspense } from "react";
import ErrorLayout from "../layout/errorLayout";
import Loader from "../component/common/Loader";

const Error403 = lazy(() => import("../pages/error/Error403"));
const Error404 = lazy(() => import("../pages/error/Error404"));
const Error500 = lazy(() => import("../pages/error/Error500"));

export const ErrorRoute = {
  element: <ErrorLayout />,
  path: "/",
  children: [
    {
      path: "/403",
      element: (
        <Suspense fallback={<Loader />}>
          <Error403 />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense fallback={<Loader />}>
          <Error404 />
        </Suspense>
      ),
    },
    {
      path: "/500",
      element: (
        <Suspense fallback={<Loader />}>
          <Error500 />
        </Suspense>
      ),
    },
  ],
};
