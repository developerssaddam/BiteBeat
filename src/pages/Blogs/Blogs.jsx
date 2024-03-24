import { Link, useLoaderData } from "react-router-dom";
import "./Blogs.css";
import Blog from "../../components/Blog/Blog";
import notFoundImg from "../../assets/404.jpg";

const Blogs = () => {
  const blogs = useLoaderData();
  const firstBlog = blogs[0];

  const { id, title, published_at, description, cover_image } = firstBlog;

  return (
    <section className="">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <Link
          rel="noopener noreferrer"
          to={`/blog/${id}`}
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-[#7c196c] text-white rounded-2xl"
        >
          <img
            src={cover_image || notFoundImg}
            alt=""
            className="object-cover w-full h-64 sm:h-96 lg:col-span-7 rounded-l-2xl"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {title}
            </h3>
            <span className="text-xs text-gray-400">
              {new Date(published_at).toLocaleDateString()}
            </span>
            <p>{description}</p>
          </div>
        </Link>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(1, 20).map((item, index) => (
            <Blog key={index} blog={item}></Blog>
          ))}
          {/* <a
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline border-2 border-[#FF00D3] hover:scale-105 rounded-lg"
          >
            <img
              role="presentation"
              className="object-cover w-full h-44 rounded-t-lg"
              src="https://source.unsplash.com/random/480x360?1"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs text-gray-400">January 21, 2021</span>
              <p>
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur, ex has tantas percipit perfecto. At per tempor
                albucius perfecto, ei probatus consulatu patrioque mea, ei
                vocent delicata indoctum pri.
              </p>
            </div>
          </a> */}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 text-gray-400"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
