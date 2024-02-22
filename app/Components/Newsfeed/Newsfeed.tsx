'use client'
import { Key, useState } from "react";
import { GoPersonAdd } from "react-icons/go";
import PostModal from "../PostModal/PostModal";
import ShareModal from "../Sharing/ShareModal";
import NewsfeedCard from "./NewsfeedCard";

interface NewsfeedProps{
    currentUser:any
    posts:any
    users:any
}
const Newsfeed:React.FC<NewsfeedProps> = ({currentUser,posts,users}) => {
    
    const [currentPost,setCurrentPost]=useState(0);
    
    return ( 
        <div className="flex flex-col w-full items-center h-min m-auto min-h-screen">  
            {posts?.length==0 ? 
            <div className="flex flex-col w-96 max-w-full justify-center absolute my-auto h-full">
                <div className="grid card rounded-box place-items-center">
                    <GoPersonAdd size={120} className="text-secondary ms-7"/></div>                       
                <div className="grid card rounded-box place-items-center text-center text-secondary">Your feed is empty <br/> start following your favorite people!</div>
            </div> 
            : 
            <div className="mt-16"> 
                <PostModal currentPost={currentPost} setCurrentPost={setCurrentPost} currentUser={currentUser} posts={posts}/>
                
                {posts?.map((post: { id: Key | null | undefined; }) => (
                    <NewsfeedCard
                    currentUser={currentUser} 
                    setCurrentPost={setCurrentPost}
                    key={post.id}
                    post={post}
                    />
                ))} 
                <ShareModal currentUser={currentUser} currentPost={currentPost} users={users}/>
            </div>
            }           
        </div>
     );
}
 
export default Newsfeed;