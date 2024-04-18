import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import FindJobs from "../Pages/FindJobs";
import PostJobs from "../Pages/PostJobs";
import EditJobs from "../Pages/EditJobs.jsx";
import UpdateJob from "../Pages/UpdateJob.jsx";
import Login from "../Components/Login.jsx";
import JobDetails from "../Pages/JobDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/PostJobs", element: <PostJobs /> },
      { path: "/FindJobs", element: <FindJobs /> },
      { path: "/EditJobs", element: <EditJobs /> },
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
