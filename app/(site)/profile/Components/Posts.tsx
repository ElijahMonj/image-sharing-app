'use client'
import PostModal from '@/app/Components/PostModal/PostModal';
import { BiImageAdd } from "react-icons/bi";
import PostCard from './PostCard';
import React, { useState } from 'react';
interface PostsProps{
    posts:any
    currentUser:any
    currentPost:any
    setCurrentPost:any
}
const Posts:React.FC<PostsProps> = ({posts,currentUser,currentPost,setCurrentPost}) => {
    
    return ( 
        <>        
             {posts.length==0 ?
                <div className="flex flex-col w-96 h-96 justify-center">
                    <div className="grid card rounded-box place-items-center ">
                        <BiImageAdd size={80} className="text-secondary"/>
                    </div>                       
                    <div className="grid card rounded-box place-items-center text-center text-secondary">This user hasn&apos;t posted anything yet.</div>
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
 
export default Posts;