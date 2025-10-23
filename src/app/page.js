import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/posts">Posts</Link>
      <Link href="/books"> | Books</Link>
      <Link href="/add-post"> | Add post</Link>
    </div>
  );
}
