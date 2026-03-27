import { useState, useEffect, useCallback } from "react";
import { type PostsResponse, type PostT } from "../types/types";
import axios from "axios";

export const useGetBlogs = (): {
  blogs: PostT[];
  loading: boolean;
  error: boolean;
  getAllBlogs: () => Promise<void>;
} => {
  const [blogs, setBlogs] = useState<PostT[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getAllBlogs = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get<PostsResponse>(
        "https://dummyjson.com/posts"
      );
      const blogsData = response.data.posts;
      setBlogs(blogsData);
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);

  return { blogs, loading, error, getAllBlogs };
};
