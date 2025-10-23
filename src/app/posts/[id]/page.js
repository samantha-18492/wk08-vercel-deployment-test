import { db } from "@/utils/utilities";

export default async function Post({ params }) {
  const slug = await params;

  const post = (await db.query(`SELECT * FROM posts WHERE id = ${slug.id};`))
    .rows;

  return (
    <div>
      {post.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p className="whitespace-pre-line">{post.content}</p>
        </div>
      ))}
    </div>
  );
}
