import { createBrowserRouter } from "react-router";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import MainLayout from "../layouts/MainLayout";
import LeadList from "../pages/leads/LeadList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path : "leads",
                element: <LeadList />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />,
    }
]);

export default router;