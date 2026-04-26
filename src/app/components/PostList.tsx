import Link from "next/link";
import { Post } from "@/types/post";

interface PostListProps {
  posts: Post[]
}

function PostList({posts}: PostListProps) {
  let iteration = 0;
  return (
    <div className="post-list">
      {
        posts.map((post)=>(
          <h2 key={post.id}
          ><Link href="/">{iteration += 1}. {post.title}</Link></h2>
        ))
      }
    </div> 
  )
}

export default PostList