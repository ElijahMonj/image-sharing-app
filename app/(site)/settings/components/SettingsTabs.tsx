'use client'
import { useState } from 'react';
import { BsShieldCheck } from "react-icons/bs";
import General from './General';
import { TbUserEdit } from "react-icons/tb";
import Account from './Account';

interface SettingsTabsProps{
   currentUser:any
}

const SettingsTabs:React.FC<SettingsTabsProps> = ({currentUser}) => {
    const [content,setContent]=useState("general")
    function contentType(){
        if (content==='general'){
            return (
                <General currentUser={currentUser}/>
            )
        }
        if (content==='account'){
            return (
                <Account currentUser={currentUser}/>
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
                <TbUserEdit className="me-1"/>General
            </button> 
            <button className={content === 'account' ? 'tab tab-active w-full' : 'tab w-full'} 
            onClick={()=>{
                if (content!=='account'){
                    setContent('account')
                }
            }}>
                <BsShieldCheck className="me-1"/>Account
            </button> 
        </div>
        <div className='w-full'>
          {contentType()}
        </div>
        
        </>
     );
}
 
export default SettingsTabs;