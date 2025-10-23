import { db } from "@/utils/utilities.js";
import { LikeButton } from "@/app/components/LikeButton";

export default async function Page({ params }) {
  const { id } = await params;

  const data = await db.query(`SELECT * FROM book_details WHERE id = $1`, [id]);
  const books = data.rows;
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <LikeButton />
        </div>
      ))}
    </div>
  );
}
