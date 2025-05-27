import { RouterProvider } from "react-router";
import router from "./routes/Routes";
import UserProvider from "./store/context/userContext";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ConfigProvider
          theme={{
            token: {
              fontFamily: "IRANYekanXFaNum",
            },
          }}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
