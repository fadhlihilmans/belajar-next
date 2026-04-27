import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/api";
import PostList from "../components/PostList";

export default async function Page() {
  const posts = await getAllPosts();
  
  return (
    <>
      <div className="main-heading">
        <h2> POSTS </h2>
        <p className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nulla dolor nam debitis quibusdam rem. Debitis vero possimus modi consectetur.</p>
      </div>
      <PostList posts={posts}/>
    </>
  );
}
