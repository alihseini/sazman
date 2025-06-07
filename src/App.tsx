import { ConfigProvider } from "antd";
import router from "./routes/routes";
import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import FontSizeToolbar from "./component/common/FontSizeToolbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "IRANYekanXFaNum",
          },
        }}
      >
        <FontSizeToolbar />
        <RouterProvider router={router} />
      </ConfigProvider>
    </QueryClientProvider>
  );
}

export default App;
