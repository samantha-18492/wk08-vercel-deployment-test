import pg from "pg";
import Link from "next/link";

export default async function PostsPage() {
  const db = new pg.Pool({
    connectionString: process.env.DB_CONN,
  });

  const res = await db.query(`SELECT * FROM posts`);
  const posts = res.rows;

  console.log(posts);
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
