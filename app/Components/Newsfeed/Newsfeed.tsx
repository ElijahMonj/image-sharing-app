'use client'
import NewsfeedCard from "./NewsfeedCard";
import { GoPersonAdd } from "react-icons/go";
import { Key, useEffect, useState } from "react";
import PostModal from "../PostModal/PostModal";
import ShareModal from "../Sharing/ShareModal";

interface NewsfeedProps{
    currentUser:any
    posts:any
    users:any
}
const Newsfeed:React.FC<NewsfeedProps> = ({currentUser,posts,users}) => {
    
    const [currentPost,setCurrentPost]=useState(0);
    
    return ( 
        <div className="flex flex-col w-full items-center h-min m-auto mt-20">  
            {posts?.length==0 ? 
            <div className="flex flex-col w-96">
                <div className="grid card rounded-box place-items-center ">
                    <GoPersonAdd size={120} className="text-secondary ms-7"/></div>                       
                <div className="grid card rounded-box place-items-center text-center text-secondary">Your feed is empty, start following your favorite people!</div>
            </div> 
            : 
            <> 

                <PostModal currentPost={currentPost} setCurrentPost={setCurrentPost} currentUser={currentUser} posts={posts}/>
                
                {posts?.map((post: { id: Key | null | undefined; }) => (
                    <NewsfeedCard
                    currentUser={currentUser} 
                    setCurrentPost={setCurrentPost}
                    key={post.id}
                    post={post}
                    />
                ))} 
                <ShareModal currentUser={currentUser} post={currentPost} users={users}/>
            </>
            }           
        </div>
     );
}
 
export default Newsfeed;