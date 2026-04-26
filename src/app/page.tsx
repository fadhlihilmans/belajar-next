import Image from "next/image";
import Link from "next/link";
import { getLastPost } from "@/lib/api";
import PostList from "./components/PostList";

export default async function Home() {
  const posts = await getLastPost();
  
  return (
    <>
      <div className="main-heading">
        <h1> Selamat Datang di Page ini</h1>
        <p className="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nulla dolor nam debitis quibusdam rem. Debitis vero possimus modi consectetur.</p>
      </div>
      <PostList posts={posts}/>
    </>
  );
}
