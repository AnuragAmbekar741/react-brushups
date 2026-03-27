import React from "react";
import Post from "./components/BlogPost";
import { useGetBlogs } from "./hooks/useGetBlogs";

const Blogs: React.FC = () => {
  const { blogs, loading, getAllBlogs, error } = useGetBlogs();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong!</div>;
  }

  return (
    <div className="flex flex-col gap-6 w-full h-full p-10">
      <h1 className="text-3xl">Blogs</h1>
      <div className="flex flex-col gap-4 w-fit">
        {blogs.map((blogPost) => (
          <Post {...blogPost} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
