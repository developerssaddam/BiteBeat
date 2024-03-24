import { Link } from "react-router-dom";
import notFoundImg from "../../assets/404.jpg";
import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const { id, title, published_at, description, cover_image } = blog;
  return (
    <Link
      to={`/blog/${id}`}
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 border-[#FF00D3] hover:scale-105 rounded-lg"
    >
      <img
        role="presentation"
        className="object-cover w-full h-44 rounded-t-lg"
        src={cover_image || notFoundImg}
      />
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs text-gray-400">
          {new Date(published_at).toLocaleDateString()}
        </span>
        <p>{description}</p>
      </div>
    </Link>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
