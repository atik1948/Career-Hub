import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import "./index.css";
import Root from "./component/Root/Root";
import Home from "./component/Home/Home";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import jobsData from "../data/jobs.json";
import blogsData from "../data/blogs.json";

const Blog = lazy(() => import("./component/Blog/Blog"));
const BlogPost = lazy(() => import("./component/BlogPost/BlogPost"));
const AppliedJobs = lazy(() => import("./component/AppliedJobs/AppliedJobs"));
const JobDetails = lazy(() => import("./component/JobDetails/JobDetails"));

const withSuspense = (component) => (
  <Suspense
    fallback={
      <div className="site-container py-12">
        <div className="surface-card h-32 animate-pulse" />
      </div>
    }
  >
    {component}
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied-jobs",
        element: withSuspense(<AppliedJobs />),
      },
      {
        path: "/blog",
        element: withSuspense(<Blog />),
        loader: () => blogsData,
      },
      {
        path: "/blog/:slug",
        element: withSuspense(<BlogPost />),
        loader: () => blogsData,
      },
      {
        path: "/job/:id",
        element: withSuspense(<JobDetails />),
        loader: () => jobsData,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
