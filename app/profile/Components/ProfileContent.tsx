'use client'
import { useState } from 'react';
import {BsBookmark,BsImages,BsPersonBadge} from 'react-icons/bs'
import Posts from './Posts';
import clsx from "clsx";

const ProfileContent = () => {
    const [content,setContent]=useState("posts")
    function contentType(){
        if (content==='posts'){
            return (
                <Posts/>
            )
        }
        if (content==='saved'){
            return (
                <div>Saved</div>
            )
        }
        if(content==='tagged'){
            return (
                <div>Tagged</div>
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