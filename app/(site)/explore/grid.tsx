'use client'
import Image from 'next/image'
import PostModal from "../../Components/PostModal/PostModal";
import React, { useState } from 'react';
import PostCard from '../profile/Components/PostCard';
import prisma from "@/app/libs/prismadb";
import Empty from './Empty';
import ShareModal from '@/app/Components/Sharing/ShareModal';
interface GridProps{
    currentUser:any
    posts:any
    users:any
}

const Grid:React.FC<GridProps> = ({currentUser,posts,users}) => {
    const [currentPost,setCurrentPost]=useState(0);
    return ( 
        <>
            {posts.length==0 ?
                <Empty/>
                :
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                    <>   
                    <PostModal currentPost={currentPost} 
                        setCurrentPost={setCurrentPost} 
                        currentUser={currentUser} posts={posts}/>
                        {/*@ts-ignore*/}
                            {posts.map(post => {
                            return (
                                <PostCard post={post} key={post.id}
                                setCurrentPost={setCurrentPost} currentPost={currentPost}/>
                                );
                            })}
                    <ShareModal currentUser={currentUser} post={currentPost} users={users}/>
                    </>
                </div>
            }
        </>
        
     );
}
 
export default Grid;