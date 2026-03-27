# React Blogs Assignment

## API: DummyJSON Posts

Base URL: `https://dummyjson.com/posts`

| Action          | Method | Endpoint              |
| --------------- | ------ | --------------------- |
| Get all posts   | GET    | `/posts?limit=20`     |
| Get single post | GET    | `/posts/{id}`         |
| Search posts    | GET    | `/posts/search?q={query}` |
| Create post     | POST   | `/posts/add`          |
| Delete post     | DELETE | `/posts/{id}`         |

**POST body for create:**

```json
{ "title": "string", "body": "string", "userId": 1 }
```

**Response shape (GET all):**

```json
{
  "posts": [
    { "id": 1, "title": "...", "body": "...", "tags": [], "reactions": { "likes": 0, "dislikes": 0 }, "views": 0, "userId": 1 }
  ],
  "total": 251,
  "skip": 0,
  "limit": 20
}
```

---

## Requirements

### Level 1 — List Posts

- Fetch posts on mount and render them as cards
- Show a **loading spinner/skeleton** while fetching
- Show an **error message** with a **Retry button** if the fetch fails
- Handle **empty state** (no posts found)

### Level 2 — Create Post

- A "New Post" button that opens a form (title + body)
- POST to the API, add the returned post to the top of the list
- Show **creating/submitting state** on the button
- Handle + display **form validation errors** (empty fields)
- Handle **API error** on create

### Level 3 — Search

- Add a search input that calls `/posts/search?q=`
- **Debounce** the input (300ms)
- Show loading state while searching
- Cancel previous in-flight requests when a new search fires

### Level 4 — Delete

- Each post card has a Delete button
- Call DELETE endpoint, remove from list on success
- Show **deleting state** per-post
- Handle API error on delete

---

## Bonus (stretch)

- Use `useReducer` instead of multiple `useState` for the posts state machine
- Cancel requests on unmount (AbortController or axios CancelToken)
- Optimistic UI for delete (remove immediately, roll back on error)

---

## Hints

- You already have `axios` and `tailwindcss` installed
- Types file `types.ts` is already scaffolded — define your `Post` and `PostsResponse` types there
- Think about a custom hook (`usePosts`) to keep the component clean
