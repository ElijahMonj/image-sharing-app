'use client'
import { useState } from 'react';
import {BsBookmark,BsImages,BsPersonBadge} from 'react-icons/bs'
import Posts from './Posts';
import clsx from "clsx";
import Saved from './Saved';
import Tagged from './Tagged';

interface ProfileContentProps{
    posts:any
    currentUser:any
}

const ProfileContent:React.FC<ProfileContentProps> = ({posts,currentUser}) => {
    const [content,setContent]=useState("posts")
    function contentType(){
        if (content==='posts'){
            return (
                <Posts posts={posts} currentUser={currentUser}/>
            )
        }
        if (content==='saved'){
            return (
                <Saved/>
            )
        }
        if(content==='tagged'){
            return (
                <Tagged/>
            )
        }

    }
    return ( 
        <>
        <div className="tabs">
            <button className={content === 'posts' ? 'tab tab-bordered tab-active' : 'tab tab-bordered'} 
             onClick={()=>{
                if (content!=='posts'){
                    setContent('posts')
                }
            }}>
                <BsImages className="me-1"/>Posts
            </button> 
            <button className={content === 'saved' ? 'tab tab-bordered tab-active' : 'tab tab-bordered'} 
            onClick={()=>{
                if (content!=='saved'){
                    setContent('saved')
                }
            }}>
                <BsBookmark className="me-1"/>Saved
            </button>
            <button className={content === 'tagged' ? 'tab tab-bordered tab-active' : 'tab tab-bordered'}   
            onClick={()=>{
                if (content!=='tagged'){
                    setContent('tagged')
                }
            }}>
                <BsPersonBadge className="me-1"/>Tagged
            </button> 
        </div>
        <div>
          {contentType()}
        </div>
        
        </>
     );
}
 
export default ProfileContent;