import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Exchange from "../pages/Exchange";
import History from "../pages/History";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Exchange /> },
            { path: 'history', element: <History /> },
        ],
    },
]);

export default routes;