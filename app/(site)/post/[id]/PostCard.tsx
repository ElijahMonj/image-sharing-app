'use client'
import NewsfeedCard from "@/app/Components/Newsfeed/NewsfeedCard";
import PostModal from "@/app/Components/PostModal/PostModal";
import { useState } from "react";

interface PostCardProps{
    currentUser:any
    postData:any
}
const PostCard:React.FC<PostCardProps> = ({currentUser,postData}) => {
    const [currentPost,setCurrentPost]=useState(0);
    return ( 
        <>
            <PostModal currentPost={currentPost} setCurrentPost={setCurrentPost} currentUser={currentUser} posts={postData}/>
            <NewsfeedCard
            currentUser={currentUser} 
            setCurrentPost={setCurrentPost}
            key={postData?.id}
            post={postData} 
            />       
        </>
     );
}
 
export default PostCard;