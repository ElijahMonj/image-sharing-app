'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import {MdOutlineHome,MdOutlineSearch,MdOutlineExplore,MdOutlineNotifications,MdOutlineMessage,MdOutlineAddBox,MdOutlineAccountCircle,MdOutlineSettings,MdOutlineLogout} from 'react-icons/md'
import Image from "next/image"
import Link from "next/link"
import CreatePostModal from "./CreatePost/CreatePostModal"
import { CldUploadButton } from "next-cloudinary"
import { useState } from "react"
import Avatar from "./Avatar"
interface UtilityBarProps{
    data:any
  }
  const UtilityBar:React.FC<UtilityBarProps> = ({data}) => {
    const [image,setImage]=useState('');
   const handleUpload=(result:any)=>{
    setImage(result?.info?.secure_url)
    //@ts-ignore
    
    document.getElementById('create_post_modal').showModal()
   }
    return ( 
        <>
        {/*lg*/}
        <div className='w-1/6 hidden lg:block z-50'>
        <ul className="menu p-2 bg-base-100 text-base-content menu-lg h-auto min-h-screen fixed">
            <a className="btn btn-ghost normal-case text-xl ms-auto me-auto w-full">daisyUI</a>
            {/* Sidebar content here */}
                <li>
                    <Link href={'/'}>
                    <MdOutlineHome className="h-8 w-8" stroke="currentColor"/>
                    Home
                    </Link>
                </li>
                <li>
                    <Link href={'/explore'}>
                    <MdOutlineExplore className="h-8 w-8" stroke="currentColor"/>    Explore
                    </Link>
                </li>
                <li>
                    <a>
                    <MdOutlineNotifications className="h-8 w-8" stroke="currentColor"/>  Notifications
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineMessage className="h-8 w-8" stroke="currentColor"/> Messages
                    </a>
                </li>
                <li>
                    <CldUploadButton             
                          options={{maxFiles:1}}
                          onUpload={handleUpload}
                          uploadPreset='rfrpttac'
                          >
                    {/*<a onClick={()=>document.getElementById('create_post_modal').showModal()}>*/}
                    <MdOutlineAddBox className="h-8 w-8" stroke="currentColor"
                    
                    /> Create
                    </CldUploadButton>
                </li>
                <li>
                    <Link href={`/profile/${data.id}`}>
                    <div className="w-8">
                    <Avatar 
                    width={256}
                    height={32}
                    src={data?.image as string}
                    />
                    </div>
                    Profile
                    </Link>
                </li>

                <div className="divider"></div> 
                <li>
                    <Link href={'/settings'}>
                    <MdOutlineSettings className="h-8 w-8" stroke="currentColor"/> Settings
                    </Link>
                </li>
                <li>
                    <a onClick={() => signOut()}>
                    <MdOutlineLogout className="h-8 w-8" stroke="currentColor"/> Logout
                    </a>
                </li>
        </ul>
        </div>
        
        {/*md*/}
        <ul className="w-auto lg:hidden md:block hidden menu p-2 bg-base-100 text-base-content menu-lg h-auto min-h-screen z-50">
            <a className="btn btn-ghost normal-case text-xl ms-auto me-auto w-full">XD</a>
            {/* Sidebar content here */}
                <li>
                 <Link href={'/'}>
                    <MdOutlineHome className="h-8 w-8" stroke="currentColor"/>
                    
                    </Link>
                </li>
                <li>
                    <a>
                    <MdOutlineExplore className="h-8 w-8" stroke="currentColor"/>    
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineNotifications className="h-8 w-8" stroke="currentColor"/>  
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineMessage className="h-8 w-8" stroke="currentColor"/> 
                    </a>
                </li>
                <li>
                    <CldUploadButton             
                          options={{maxFiles:1}}
                          onUpload={handleUpload}
                          uploadPreset='rfrpttac'
                          >
                    {/*<a onClick={()=>document.getElementById('create_post_modal').showModal()}>*/}
                    <MdOutlineAddBox className="h-8 w-8" stroke="currentColor"
                    
                    />
                    </CldUploadButton>
                </li>
                <li>
                <Link href={`/profile/${data.id}`}>
                    <div className="w-8">
                    <Avatar 
                    width={256}
                    height={32}
                    src={data?.image as string}
                    />
                    </div>
                    
                    </Link>
                </li>

                <div className="divider"></div> 
                <li>
                    <a>
                    <MdOutlineSettings className="h-8 w-8" stroke="currentColor"/> 
                    </a>
                </li>
                <li>
                    <a onClick={() => signOut()}>
                    
                    <MdOutlineLogout className="h-8 w-8" stroke="currentColor"/> 
                    </a>
                </li>
        </ul>
        {/*mobile*/}
        <div className="drawer md:hidden absolute z-50">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-auto h-auto min-h-screen bg-base-200 text-base-content">
            <a className="btn btn-ghost normal-case text-xl ms-auto me-auto w-full">daisyUI</a>
            {/* Sidebar content here */}
            <li>
            <Link href={'/'}>
                    <MdOutlineHome className="h-8 w-8" stroke="currentColor"/>
                    Home
                    </Link>
                </li>
                <li>
                    <a>
                    <MdOutlineExplore className="h-8 w-8" stroke="currentColor"/>    Explore
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineNotifications className="h-8 w-8" stroke="currentColor"/>  Notifications
                    </a>
                </li>
                <li>
                    <a>
                    <MdOutlineMessage className="h-8 w-8" stroke="currentColor"/> Messages
                    </a>
                </li>
                <li>
                <CldUploadButton             
                          options={{maxFiles:1}}
                          onUpload={handleUpload}
                          uploadPreset='rfrpttac'
                          >
                    {/*<a onClick={()=>document.getElementById('create_post_modal').showModal()}>*/}
                    <MdOutlineAddBox className="h-8 w-8" stroke="currentColor"
                    
                    /> Create
                    </CldUploadButton>
                </li>
                <li>
                <Link href={`/profile/${data.id}`}>
                    <div className="w-8">
                    <Avatar 
                    width={256}
                    height={32}
                    src={data?.image as string}
                    />
                    </div>
                    Profile
                    </Link>
                </li>

                <div className="divider"></div> 
                <li>
                    <a>
                    <MdOutlineSettings className="h-8 w-8" stroke="currentColor"/> Settings
                    </a>
                </li>
                <li>
                    <a onClick={() => signOut()}>
                    <MdOutlineLogout className="h-8 w-8" stroke="currentColor"/> Logout
                    </a>
                </li>
            
            </ul>
        </div>
        </div>

        <CreatePostModal user={data} image={image}/>
        </>
     );
}
 
export default UtilityBar;