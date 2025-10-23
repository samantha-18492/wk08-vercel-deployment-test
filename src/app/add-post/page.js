import pg from "pg";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default function Page() {
  async function handleSubmit(formData) {
    "use server";

    const data = Object.fromEntries(formData);
    const db = new pg.Pool({
      connectionString: process.env.DB_CONN,
    });
    const newPost = db.query(
      `INSERT INTO posts (title, content) VALUES ($1, $2)`,
      [data.title, data.content]
    );

    revalidatePath("/posts");

    redirect("/posts");
  }
  return (
    <div>
      <h2>Add a new post:</h2>
      <form action={handleSubmit}>
        <input name="title" placeholder="title" required />
        <input name="content" placeholder="comment" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
