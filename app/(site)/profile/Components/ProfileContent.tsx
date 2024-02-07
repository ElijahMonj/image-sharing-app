'use client'

import Posts from './Posts';
import Saved from './Saved';
import Tagged from './Tagged';
import Tabs from './Tabs';
import { useState } from 'react';
import PostModal from '@/app/Components/PostModal/PostModal';

interface ProfileContentProps{
    posts:any
    currentUser:any
    savedPosts:any
    taggedPosts:any
}

const ProfileContent:React.FC<ProfileContentProps> = ({posts,currentUser,savedPosts,taggedPosts}) => {
    const [currentPost,setCurrentPost]=useState(0);

    return ( 
        <>
        <Tabs />
        <div id='postSection' className='hidden'>
            <Posts posts={posts} currentUser={currentUser} currentPost={currentPost} setCurrentPost={setCurrentPost}/>
        </div>
        <div id='savedSection' className='hidden'>
            <Saved currentUser={currentUser} posts={savedPosts} currentPost={currentPost} setCurrentPost={setCurrentPost}/>
        </div>
        <div id='taggedSection' className='hidden'>
            <Tagged posts={taggedPosts} currentUser={currentUser} currentPost={currentPost} setCurrentPost={setCurrentPost}/>
        </div>
        <PostModal currentPost={currentPost} 
                        setCurrentPost={setCurrentPost} 
                        currentUser={currentUser} posts={posts}/>
        </>
     );
}
 
export default ProfileContent;