import { lazy, Suspense } from "react";
import FormLayout from "../layout/FormLayout";

const Login = lazy(() => import("../pages/login/Login"));
const Register = lazy(() => import("../pages/login/Register"));
const ForgetPass = lazy(() => import("../pages/login/ForgetPass"));
const ChangeNumber = lazy(() => import("../pages/login/ChangeNumber"));

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
    {
      path: "/forgetpass",
      element: (
        <Suspense fallback={<p>...Loading</p>}>
          <ForgetPass />
        </Suspense>
      ),
    },
    {
      path: "/changenumber",
      element: (
        <Suspense fallback={<p>...Loading</p>}>
          <ChangeNumber />
        </Suspense>
      ),
    },
  ],
};
