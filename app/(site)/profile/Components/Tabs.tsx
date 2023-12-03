'use client'

import { useEffect, useState } from "react";
import { BsBookmark, BsImages, BsPersonBadge } from "react-icons/bs";

const Tabs = () => {
    const [currentTab,setCurrentTab]=useState('posts');
    useEffect(() => {
        if(currentTab=='posts'){
            document.getElementById('postSection')?.classList.remove('hidden');
            document.getElementById('savedSection')?.classList.add('hidden');
            document.getElementById('taggedSection')?.classList.add('hidden');
        }
        else if(currentTab=='saved'){
            document.getElementById('postSection')?.classList.add('hidden');
            document.getElementById('savedSection')?.classList.remove('hidden');
            document.getElementById('taggedSection')?.classList.add('hidden');
        }else{
            document.getElementById('postSection')?.classList.add('hidden');
            document.getElementById('savedSection')?.classList.add('hidden');
            document.getElementById('taggedSection')?.classList.remove('hidden');
        }
      });
    return ( 
        <div className="tabs">
            <button className={currentTab == 'posts' ? 'tab tab-bordered tab-active' : 'tab tab-bordered'} onClick={()=>{setCurrentTab('posts')}}>
                <BsImages className="me-1"/>Posts
            </button> 
            <button className={currentTab == 'saved' ? 'tab tab-bordered tab-active' : 'tab tab-bordered'} onClick={()=>{setCurrentTab('saved')}}>
                <BsBookmark className="me-1"/>Saved
            </button>
            <button className={currentTab == 'tagged' ? 'tab tab-bordered tab-active' : 'tab tab-bordered'} onClick={()=>{setCurrentTab('tagged')}}>
                <BsPersonBadge className="me-1"/>Tagged
            </button> 
        </div>
     );
}
 
export default Tabs;