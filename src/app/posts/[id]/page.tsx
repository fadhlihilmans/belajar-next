import React from 'react'
import { getDetailPost } from '@/lib/api';

interface pageProps {
  params: {
    id: number,
  }
}

async function page({params}: pageProps) {
  
  const {id} = await params;
  const posts = await getDetailPost(id);

  console.log(posts);

  return (
    <div className="post-detail">
      <h1>{posts.title}</h1>
      <div className='content'>{posts.body}</div>
    </div>
  )
}

export default page