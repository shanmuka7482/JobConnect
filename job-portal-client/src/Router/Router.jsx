import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import FindJobs from "../Pages/FindJobs";
import PostJobs from "../Pages/PostJobs";
import EditJobs from "../Pages/EditJobs.jsx";
import UpdateJob from "../Pages/UpdateJob.jsx";
import Login from "../Components/Login.jsx";
import JobDetails from "../Pages/JobDetails.jsx";
import AppliedJobs from "../Pages/AppliedJobs.jsx";
import Dashboard from "../Pages/Dashboard.jsx";
import DashboardHome from "../Pages/DashboardHome.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/FindJobs", element: <FindJobs /> },
      {
        path: "/Dashboard",
        element: <Dashboard />,
        children: [
          { path: "/Dashboard", element: <DashboardHome /> },
          { path: "/Dashboard/PostJobs", element: <PostJobs /> },
          { path: "/Dashboard/EditJobs", element: <EditJobs /> },
          { path: "/Dashboard/AppliedJobs", element: <AppliedJobs /> },
        ],
      },
      {
        path: "edit-job/:id",
        element: <UpdateJob />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/all-jobs/${params.id}`),
      },

      { path: "/Login", element: <Login /> },
      { path: "/job/:id", element: <JobDetails /> },
    ],
  },

]);
export default router;
