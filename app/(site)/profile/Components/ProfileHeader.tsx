'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {AiOutlineEdit} from 'react-icons/ai'
import axios from "axios";
import toast from "react-hot-toast";
interface ProfileHeaderProps{
    data:any
    currentUser:any
    isCurrentUser:boolean
    
}
const ProfileHeader:React.FC<ProfileHeaderProps> = ({data,isCurrentUser,currentUser}) => {
   const [isFollowing,setIsFollowing]=useState(false);
   const [isLoading,setIsLoading]=useState(false);
   useEffect(() => {
        axios.get(`/api/getfollowingusers/${currentUser.id}`)
        .then(res => {
            const resultData = res.data;
            console.log(resultData)
            if(resultData.includes(data.id)){
                setIsFollowing(true)
             }else{
                 setIsFollowing(false)
             }  
        })
    });
  function follow(){
    setIsLoading(true)
    const followData={
        followingUser:data.id,
        followerUser:currentUser.id
    }
    axios.post('/api/addfollow',followData).then(()=> console.log("following..."))
        .catch(()=>toast.error('Something went wrong!'))
        .finally(()=> {
            setIsLoading(false)
            toast.success(data.name+" is now followed!")   
        })
   
  }
  function unfollow(){
    setIsLoading(true)
    const followData={
        followingUser:data.id,
        followerUser:currentUser.id
    }
    axios.post('/api/removefollow',followData).then(()=> console.log("unfollowing..."))
        .catch(()=>toast.error('Something went wrong!'))
        .finally(()=> {
            setIsLoading(false)
            toast.success(data.name+" is now unfollowed.")   
        })
   
  }
    return ( 
        <>
        <div className="w-full flex">
            <div className="grid lg:w-1/3 md:w-1/4 sm:w-1/4 w-1/4 place-items-center">
                <div className="avatar">
                    <div className="rounded-full lg:w-36 md:w-32 sm:w-32 w-20">
                        <Image className="rounded-full" quality={100} width={256} height={32} src={data?.image as string} alt="user avatar"/>
                    </div>
                </div>
            </div>
            <div className="lg:w-2/3 md:w-3/4 sm:w-3/4 w-3/4 flex flex-col">
                <div className="lg:text-l text-md font-semibold">
                   {data.name}
                </div>
                <div className="w-full flex justify-between">
                    <div className="flex justify-center flex-col text-slate-500 lg:text-sm text-xs overflow-hidden">{data.email}</div> 
                                  
                </div>
                
                <div className="lg:w-1.5/2 flex gap-4 mt-1">
                        <div className="lg:text-sm text-xs text-center flex flex-col justify-center">{data.posts.length} Posts</div>
                        <p className="lg:text-sm text-xs text-center flex flex-col justify-center">{data.following.length} Following</p>
                        <p className="lg:text-sm text-xs text-center flex flex-col justify-center">{data.followers.length} Followers</p>
                        {isCurrentUser ? 
                        <Link className="btn lg:btn-sm md:btn-sm btn-xs" href="/settings">Edit</Link>
                        :  
                        <>
                         {isFollowing ? <button className="btn lg:btn-sm md:btn-sm btn-xs" onClick={unfollow} disabled={isLoading}>Unfollow</button> 
                                      : <button className="btn lg:btn-sm md:btn-sm btn-xs" onClick={follow} disabled={isLoading}>Follow</button>}
                        </>
                           
                        }
                        
                    </div>  
                
                <div className="mt-2">
                    <p className="text-sm hidden lg:block md:block sm:block">{data.bio}</p>
                </div>
            </div>
           
        </div>
        <div className="lg:hidden md:hidden sm:hidden text-xs w-3/6 mx-auto">
            {data.bio}
        </div>
        </>
     );
}
 
export default ProfileHeader;