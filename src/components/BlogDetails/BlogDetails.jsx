import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const blogDetails = useLoaderData();

  return (
    <div>
      <h1>Title : {blogDetails.title}</h1>
    </div>
  );
};

export default BlogDetails;
