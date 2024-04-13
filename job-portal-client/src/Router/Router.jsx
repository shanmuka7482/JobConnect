import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import FindJobs from "../Pages/FindJobs";
import PostJobs from "../Pages/PostJobs";
import EditJobs from "../Pages/EditJobs.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/PostJobs", element: <PostJobs /> },
      { path: "/FindJobs", element: <FindJobs /> },
      { path: "/EditJobs", element: <EditJobs /> },
    ],
  },
]);
export default router;
