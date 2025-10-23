import { db } from "@/utils/utilities";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  const res = await db.query(`SELECT * FROM book_details`);
  const books = res.rows;

  return (
    <div>
      <h1>Books</h1>
      <div className="flex flex-wrap gap-10">
        {books.map((book) => (
          <div key={book.id} className="border-amber-700 border-5">
            <Link href={`/books/${book.id}`}>
              <Image
                src={book.cover_url}
                width={300}
                height={200}
                alt={book.url_slug}
              />
              {book.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
