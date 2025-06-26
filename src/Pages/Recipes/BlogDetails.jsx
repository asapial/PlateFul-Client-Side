import React from "react";
import { useLocation, useNavigate } from "react-router";
import { FaBookOpen, FaUserCircle, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";

const BlogDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const blog = state?.blog;

  if (!blog) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <p className="text-error text-xl font-bold">Blog not found.</p>
        <button
          className="mt-6 px-4 py-2 bg-primary text-primary-content rounded-xl flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="w-full bg-base-100 py-16 px-4 flex flex-col items-center min-h-[80vh] my-10">
      <div className="max-w-7xl w-full mx-auto rounded-3xl bg-base-200/80 border border-base-300 shadow-2xl overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-t-3xl border-b border-primary"
        />
        <div className="p-8 flex flex-col gap-4">
          <h1 className="text-3xl md:text-4xl font-extrabold text-primary flex items-center gap-3">
            <FaBookOpen className="text-accent" />
            {blog.title}
          </h1>
          <div className="flex items-center gap-6 text-base-content/70 text-sm mb-2">
            <span className="flex items-center gap-1">
              <FaUserCircle className="text-info" /> {blog.author}
            </span>
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="text-warning" /> {blog.date}
            </span>
          </div>
          <div
            className="prose max-w-none text-base-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <button
            className="mt-8 px-5 py-2 bg-primary text-primary-content rounded-xl font-semibold shadow hover:bg-primary/80 transition flex items-center gap-2 w-fit"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft /> Back to Blogs
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;