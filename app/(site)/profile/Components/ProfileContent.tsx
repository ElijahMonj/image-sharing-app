'use client'

import PostModal from '@/app/Components/PostModal/PostModal';
import ShareModal from '@/app/Components/Sharing/ShareModal';
import { useState } from 'react';
import Posts from './Posts';
import Saved from './Saved';
import Tabs from './Tabs';
import Tagged from './Tagged';

interface ProfileContentProps{
    allPosts:any
    userPosts:any
    currentUser:any
    savedPosts:any
    users:any
    taggedPosts:any
}

const ProfileContent:React.FC<ProfileContentProps> = ({userPosts,currentUser,savedPosts,taggedPosts,allPosts,users}) => {
    const [currentPost,setCurrentPost]=useState(0);

    return ( 
        <>
        <Tabs />
        <div id='postSection' className='hidden max-w-full h-80'>
            <Posts posts={userPosts} currentUser={currentUser} currentPost={currentPost} setCurrentPost={setCurrentPost}/>
        </div>
        <div id='savedSection' className='hidden max-w-full h-80'>
            <Saved posts={savedPosts} currentUser={currentUser} currentPost={currentPost} setCurrentPost={setCurrentPost}/>
        </div>
        <div id='taggedSection' className='hidden max-w-full h-80'>
            <Tagged posts={taggedPosts} currentUser={currentUser} currentPost={currentPost} setCurrentPost={setCurrentPost}/>
        </div>
            <PostModal currentPost={currentPost} 
                setCurrentPost={setCurrentPost} 
                currentUser={currentUser} posts={allPosts}
            />
            <ShareModal currentUser={currentUser} post={currentPost} users={users}/>
        </>
     );
}
 
export default ProfileContent;