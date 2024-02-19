'use client'
import axios from "axios";
import Link from "next/link";
import { BsChatFill, BsChatTextFill, BsHeartFill } from "react-icons/bs";
import { MdNotifications, MdPersonAddAlt1 } from "react-icons/md";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import { timeAgo } from "../../actions/convertDate";
import Avatar from "../Avatar";

import { useState } from "react";

interface NotificationProps{
    data:any
    setNewNotifications:any
}

const Notification:React.FC<NotificationProps> = ({data,setNewNotifications}) => {
    function notificationIcon(type:string) {
        if (type=="comment"){
            return (
            <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-primary rounded-full">
                <BsChatFill className="w-3 h-3 text-white" aria-hidden="true"/>
            <span className="sr-only">Message icon</span>
            </span>
            ) 
        }
        else if (type=="share"){
            return (
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-warning rounded-full">
                    <PiPaperPlaneTiltFill className="w-3 h-3 text-white" aria-hidden="true"/>
                <span className="sr-only">Share icon</span>
                </span>
                ) 
        }
        else if (type=="like"){
            return (
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-error rounded-full">
                    <BsHeartFill className="w-3 h-3 text-white" aria-hidden="true"/>
                <span className="sr-only">Heart icon</span>
                </span>
                ) 
        }
        else if (type=="message"){
            return (
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-accent rounded-full">
                    <BsChatTextFill className="w-3 h-3 text-white" aria-hidden="true"/>
                <span className="sr-only">Message icon</span>
                </span>
                ) 
        }
        else if (type=="follow"){
            return (
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-success rounded-full">
                    <MdPersonAddAlt1 className="w-3 h-3 text-white" aria-hidden="true"/>
                <span className="sr-only">Follow icon</span>
                </span>
                ) 
        }
        else{
            return (
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center w-6 h-6 bg-info rounded-full">
                    <MdNotifications className="w-4 h-4 text-white" aria-hidden="true"/>
                <span className="sr-only">Bell icon</span>
                </span>
                ) 
        }
        
    } 
    function notificationDescription(type:string) {
        if (type=="comment"){
            return (
                <div className="text-sm font-normal">commented on your post.</div> 
            ) 
        }
        else if (type=="share"){
            return (
                <div className="text-sm font-normal">shared a post with you.</div> 
                ) 
        }
        else if (type=="like"){
            return (
                <div className="text-sm font-normal">liked your post.</div> 
                ) 
        }
        else if (type=="message"){
            return (
                <div className="text-sm font-normal">has messaged you.</div> 
                ) 
        }
        else if (type=="follow"){
            return (
                <div className="text-sm font-normal">has started following you!</div> 
                ) 
        }
        else{
            return (
                <div className="text-sm font-normal">Welcome!</div> 
                ) 
        }
        
    }
    const [isSeen,setIsSeen]=useState(data.seen)
    return ( 
        <Link className="flex items-center p-2" href={data.link} onClick={()=>{
            if(!isSeen){
                setIsSeen(true) 
                const dt ={
                    id:data.id
                }
                axios.post('/api/seen',dt)
                setNewNotifications((value: number)=>value-1)
            }    
            document?.getElementById('notificationClose')?.click()
            }}
             >
            <div className="relative inline-block shrink-0 avatar w-12">
                <Avatar width={256} height={256} src={data.userImage}/>
                {notificationIcon(data.type)}
            </div>
            <div className="ms-3 text-sm font-normal">
                <div className="text-sm font-bold">{data.userName}</div>
                {notificationDescription(data.type)}
                <span className="text-xs font-medium text-secondary" suppressHydrationWarning >{timeAgo(data.createdAt)}</span>   
            </div>
            {!isSeen ? <div className="w-2 h-2 bg-primary ms-auto me-3 rounded-full"></div>:
            <div className=""></div>}
            
        </Link>
     );
}
 
export default Notification;