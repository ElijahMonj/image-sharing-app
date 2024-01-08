
import { useState } from 'react';
import {BsBookmark,BsImages,BsPersonBadge} from 'react-icons/bs'
import Posts from './Posts';
import clsx from "clsx";
import Saved from './Saved';
import Tagged from './Tagged';
import Tabs from './Tabs';

interface ProfileContentProps{
    posts:any
    currentUser:any
    savedPosts:any
    taggedPosts:any
}

const ProfileContent:React.FC<ProfileContentProps> = ({posts,currentUser,savedPosts,taggedPosts}) => {
    
    return ( 
        <>
        <Tabs />
        <div id='postSection' className='hidden'>
            <Posts posts={posts} currentUser={currentUser}/>
        </div>
        <div id='savedSection' className='hidden'>
            <Saved currentUser={currentUser} savedPosts={savedPosts}/>
        </div>
        <div id='taggedSection' className='hidden'>
            <Tagged taggedPosts={taggedPosts} currentUser={currentUser}/>
        </div>
        </>
     );
}
 
export default ProfileContent;