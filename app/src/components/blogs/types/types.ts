export interface PostT {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
}

export interface PostsResponse {
  posts: PostT[];
  total: number;
  skip: number;
  limit: number;
}
