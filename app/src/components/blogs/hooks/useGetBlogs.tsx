import axios from "axios";
import {
  useState,
  useEffect,
  useCallback,
  type SetStateAction,
  useMemo,
} from "react";
import { type PostsResponse, type PostT } from "../types/types";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function debounceSearch<T extends (...args: any[]) => any>(
  fn: T,
  delay: number
) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any, ...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

export const useGetBlogs = (): {
  blogs: PostT[];
  loading: boolean;
  error: boolean;
  getAllBlogs: (query: string) => Promise<void>;
  setSearch: React.Dispatch<SetStateAction<string>>;
} => {
  const [blogs, setBlogs] = useState<PostT[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const getAllBlogs = useCallback(async (query: string) => {
    setLoading(true);
    setError(false);
    try {
      const response = await axios.get<PostsResponse>(
        `https://dummyjson.com/posts/search?q=${query}`
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

  const debouncedGetAllBlogs = useMemo(
    () => debounceSearch(getAllBlogs, 1000),
    [getAllBlogs]
  );

  useEffect(() => {
    debouncedGetAllBlogs(search);
  }, [debouncedGetAllBlogs, search]);

  return { blogs, loading, error, getAllBlogs, setSearch };
};
