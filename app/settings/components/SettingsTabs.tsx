'use client'
import { useState } from 'react';
import {BsBookmark,BsImages,BsPersonBadge} from 'react-icons/bs'

import clsx from "clsx";


interface SettingsTabsProps{
   
}

const SettingsTabs:React.FC<SettingsTabsProps> = ({}) => {
    const [content,setContent]=useState("general")
    function contentType(){
        if (content==='general'){
            return (
                <div>General</div>
            )
        }
        if (content==='account'){
            return (
                <div>Emailpsw</div>
            )
        }
        

    }
    return ( 
        <>
        <div className="tabs-boxed w-full flex">
            <button className={content === 'general' ? 'w-full tab tab-active' : 'tab w-full'} 
             onClick={()=>{
                if (content!=='general'){
                    setContent('general')
                }
            }}>
                <BsImages className="me-1"/>General
            </button> 
            <button className={content === 'account' ? 'tab tab-active w-full' : 'tab w-full'} 
            onClick={()=>{
                if (content!=='account'){
                    setContent('account')
                }
            }}>
                <BsBookmark className="me-1"/>Account
            </button> 
        </div>
        <div>
          {contentType()}
        </div>
        
        </>
     );
}
 
export default SettingsTabs;