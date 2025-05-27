import { createBrowserRouter } from "react-router";
import { DashboardRoute } from "./Dashboard.routes";
import { ErrorRoute } from "./Error.Routes";

const router = createBrowserRouter([DashboardRoute, ErrorRoute]);

export default router;
