
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
}

const ProfileContent:React.FC<ProfileContentProps> = ({posts,currentUser,savedPosts}) => {
    
    return ( 
        <>
        <Tabs />
        <div id='postSection' className=''>
            <Posts posts={posts} currentUser={currentUser}/>
        </div>
        <div id='savedSection' className=''>
            <Saved posts={posts} currentUser={currentUser} savedPosts={savedPosts}/>
        </div>
        <div id='taggedSection' className=''>
            <Tagged/>
        </div>
        </>
     );
}
 
export default ProfileContent;