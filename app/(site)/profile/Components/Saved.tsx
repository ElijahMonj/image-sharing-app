'use client'

import React from 'react';
import { CiBookmarkPlus } from "react-icons/ci";
import PostCard from './PostCard';
interface SavedProps{
    posts:any
    currentUser:any
    currentPost:any
    setCurrentPost:any
}
const Saved:React.FC<SavedProps> = ({currentUser,posts,currentPost,setCurrentPost}) => {
   
    return ( 
        <>        
             {posts.length==0 ?
                <div className="flex flex-col w-96 max-w-full justify-center h-full my-auto">
                    <div className="grid card rounded-box place-items-center ">
                        <CiBookmarkPlus size={80} className="text-secondary"/>
                    </div>                       
                    <div className="grid card rounded-box place-items-center text-center text-secondary">This user hasn&apos;t saved any post yet.</div>
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
 
export default Saved;