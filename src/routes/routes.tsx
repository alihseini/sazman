import { createBrowserRouter } from "react-router";
import { DashboardRoute } from "./Dashboard.routes";
import { ErrorRoute } from "./Error.Routes";
import { FormRoute } from "./Form.routes";

const router = createBrowserRouter([DashboardRoute, ErrorRoute,FormRoute]);

export default router;
