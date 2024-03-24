import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import BlogDetails from "../components/BlogDetails/BlogDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("https://dev.to/api/articles?per_page=20&top=7"),
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
      },

      {
        path: "/bookmarks",
        element: <Bookmarks />,
      },
    ],
  },
]);

export default Router;
