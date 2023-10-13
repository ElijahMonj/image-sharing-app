'use client'
import Picture from '@/public/test/1by1.jpg'
import Phone from '@/public/test/phone.jpg'
import Desktop from '@/public/test/desktop.jpg'
import NewsfeedCard from "./NewsfeedCard";
import Long from "@/public/test/long.jpg";
import { useEffect, useState } from 'react';
import convertDate from '@/app/actions/convertDate';
import PostModal from '../PostModal/PostModal';

interface NewsfeedProps{
    posts:any
    currentUser:any
}
const Newsfeed:React.FC<NewsfeedProps> = ({posts,currentUser}) => {
    const [currentPost,setCurrentPost]=useState(0);
    const [commentInput,setCommentInput]=useState('');
    
    return ( 
        <div className="flex flex-col w-full items-center h-min m-auto mt-20"> 
                {/*@ts-ignore*/}
                {posts.map(post => (
                    <NewsfeedCard
                    setCurrentPost={setCurrentPost}
                    setCommentInput={setCommentInput} 
                    key={post.id}
                    data={post}
                    />
                ))} 
                <PostModal post={currentPost} commentInput={commentInput} setCommentInput={setCommentInput} currentUser={currentUser}/>
                
                            
        </div>
     );
}
 
export default Newsfeed;