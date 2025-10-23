"use client";
import { useState } from "react";

export function LikeButton() {
  const [likes, setLikes] = useState(false);
  return <button onClick={() => setLikes(!likes)}>{likes ? "❤︎" : "♡"}</button>;
}
