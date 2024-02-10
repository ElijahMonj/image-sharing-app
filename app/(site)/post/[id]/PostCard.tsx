'use client'
import NewsfeedCard from "@/app/Components/Newsfeed/NewsfeedCard";
import PostModal from "@/app/Components/PostModal/PostModal";
import ShareModal from "@/app/Components/Sharing/ShareModal";
import { useState } from "react";

interface PostCardProps{
    currentUser:any
    postData:any
    users:any
}
const PostCard:React.FC<PostCardProps> = ({currentUser,postData,users}) => {
    const [currentPost,setCurrentPost]=useState(postData);
    return ( 
        <>
            <PostModal currentPost={currentPost} setCurrentPost={setCurrentPost} currentUser={currentUser} posts={postData}/>
            <NewsfeedCard
            currentUser={currentUser} 
            setCurrentPost={setCurrentPost}
            post={postData} 
            />    
            <ShareModal currentUser={currentUser} post={currentPost} users={users}/>   
        </>
     );
}
 
export default PostCard;