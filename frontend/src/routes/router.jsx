import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;