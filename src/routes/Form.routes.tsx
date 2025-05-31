import { lazy, Suspense } from "react";
import FormLayout from "../layout/FormLayout";

const Login = lazy(() => import("../pages/login/Login"));
const Register = lazy(() => import("../pages/login/Register"));

export const FormRoute = {
  element: <FormLayout />,
  path: "/",
  children: [
    {
      path: "/login",
      element: (
        <Suspense fallback={<p>...Loading</p>}>
          <Login />
        </Suspense>
      ),
    },
    {
      path: "/register",
      element: (
        <Suspense fallback={<p>...Loading</p>}>
          <Register />
        </Suspense>
      ),
    },
  ],
};
