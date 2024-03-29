'use client'

import React from 'react';
import { BsPersonBadge } from "react-icons/bs";
import PostCard from './PostCard';
interface TaggedProps{
    posts:any
    currentUser:any
    currentPost:any
    setCurrentPost:any
}

const Tagged:React.FC<TaggedProps> = ({currentUser,posts,currentPost,setCurrentPost}) => {
    
    return ( 
        <>        
             {posts.length==0 ?
                <div className="flex flex-col w-96 max-w-full justify-center h-full my-auto">
                    <div className="grid card rounded-box place-items-center ">
                        <BsPersonBadge size={70} className="text-secondary"/>
                    </div>                       
                    <div className="grid card rounded-box place-items-center text-center text-secondary mt-1">This user wasn&apos;t tagged on any posts yet.</div>
                </div> 
                :
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                 <>
                        
                        {/*@ts-ignore*/}
                            {posts.map(post => {
                            return (
                                <PostCard post={post} key={post.id}
                                setCurrentPost={setCurrentPost} currentPost={currentPost}/>
                                );
                            })}
                    </>
                </div>
             } 
        </>
     );
}
 
export default Tagged;