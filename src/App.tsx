import { ConfigProvider } from "antd";
import router from "./routes/routes";
import { RouterProvider } from "react-router";


function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "IRANYekanXFaNum",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
