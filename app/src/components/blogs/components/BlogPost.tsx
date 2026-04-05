import React from "react";
import { type PostT } from "../types/types";

const Post: React.FC<PostT> = ({ title, body, tags, views }) => {
  return (
    <div className="flex w-fit flex-col gap-1 p-2 shadow-sm border rounded-md bg-white border-slate-50">
      <h1 className="text-lg font-medium">{title}</h1>
      <p className="text-md font-light">{body}</p>
      <div className="flex justify-between items-center p-2 bg-slate-50 rounded-md">
        <div className="flex gap-1 justify-start">
          {tags.map((tag: string) => (
            <div className="flex py-0.5 px-1.5 border border-slate-100 rounded-xl">
              {tag}
            </div>
          ))}
        </div>
        <div className="flex justify-end text-sm font-bold">{`${views} views`}</div>
      </div>
    </div>
  );
};

export default Post;
