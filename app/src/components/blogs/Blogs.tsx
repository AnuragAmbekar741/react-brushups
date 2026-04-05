import React from "react";
import Post from "./components/BlogPost";
import { useGetBlogs } from "./hooks/useGetBlogs";

const EmptyBlogsState: React.FC = () => {
  return (
    <div className="flex w-full h-full items-center justify-center text-2xl font-light bg-slate-50 border-slate-200 p-1">
      No blogs to show!
    </div>
  );
};

const Blogs: React.FC = () => {
  const { blogs, loading, error, setSearch } = useGetBlogs();

  const LoadingState = () => {
    return <div className="flex w-full">Loading</div>;
  };

  if (error) {
    return (
      <div className="flex text-lg font-medium w-full p-5 text-red-400">
        Something went wrong!
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 w-full h-full p-10">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl">Blogs</h1>
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 w-2/3 border border-slate-200 rounded-full"
        />
        <button className="px-3 py-1.5 border border-slate-200 bg-slate-50 rounded-xl">
          Refresh
        </button>
      </div>
      <div className="flex flex-col gap-4 w-full h-[calc(100vw-50rem)] overflow-x-scroll p-3 rounded-md bg-slate-50">
        {loading ? (
          LoadingState()
        ) : (
          <>
            {!blogs?.length ? (
              <EmptyBlogsState />
            ) : (
              blogs?.map((blogPost) => <Post {...blogPost} />)
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
