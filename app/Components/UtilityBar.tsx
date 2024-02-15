'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import {MdOutlineHome,MdOutlineSearch,MdOutlineExplore,MdOutlineNotifications,MdOutlineMessage,MdOutlineAddBox,MdOutlineAccountCircle,MdOutlineSettings,MdOutlineLogout} from 'react-icons/md'

import Link from "next/link"
import CreatePostModal from "./CreatePost/CreatePostModal"
import { CldUploadButton } from "next-cloudinary"
import { useState } from "react"
import Avatar from "./Avatar"
import NotificationModal from "./Notifications/NotificationModal"
import { SiLens } from "react-icons/si"

interface UtilityBarProps{
    data:any
    notifications:any
  }
 
  const UtilityBar:React.FC<UtilityBarProps> = ({data,notifications}) => {
    const [image,setImage]=useState('');
    const [newNotifications,setNewNotifications] =useState(notifications.filter((obj: { seen: boolean }) => obj.seen == false).length);

    const handleUpload=(result:any)=>{
        setImage(result?.info?.secure_url)
        //@ts-ignore
        document.getElementById('create_post_modal').showModal()
    }
    const allowedFormats=["webp", "gif"]
    return ( 
        <>
        {/*lg*/}
        <div className='w-1/6 hidden lg:block z-40 h-screen'>
        <ul className="menu p-2 bg-base-100 text-base-content menu-lg h-screen fixed">
            <div className="h-1/2">
            <Link href={'/'} className="btn btn-ghost normal-case text-xl ms-auto me-auto w-full"><SiLens className="mt-1"/>Swiftsnap</Link>
            {/* Sidebar content here */}
                <li>
                    <Link href={'/'}>
                    <MdOutlineHome className="h-8 w-8" stroke="currentColor"/>
                    Home
                    </Link>
                </li>
                <li>
                    <Link href={'/explore'}>
                    <MdOutlineExplore className="h-8 w-8" stroke="currentColor"/>Explore
                    </Link>
                </li>
                <li>
                    {/*@ts-ignore*/}
                    <a onClick={()=>document?.getElementById('notification_modal')?.showModal()}>
                        <div className="indicator">
                            <MdOutlineNotifications className="h-8 w-8" stroke="currentColor"/>
                            {newNotifications > 0 ?
                                <span className="indicator-item badge text-xs badge-error w-6">{newNotifications}</span>
                                :<div></div> 
                            }
                        </div>
                         Notifications
                    </a>
                </li>
                <li className="hidden">
                    <a>
                    <MdOutlineMessage className="h-8 w-8" stroke="currentColor"/> Messages
                    </a>
                </li>
                <li>
                    <CldUploadButton 
                                   
                        options={{
                            maxFiles:1,
                            sources: ['local'],
                            cropping:true,
                            resourceType:'image',
                            minImageWidth:300,
                            minImageHeight:300,
                            theme:'minimal'
                        }}
                        onUpload={handleUpload}
                        uploadPreset='rfrpttac'
                        //@ts-ignore
                        clientAllowedFormats= {['gif', 'mp4', 'mov']}
                        
                        >
                    
                    <MdOutlineAddBox className="h-8 w-8" stroke="currentColor"
                    
                    /> Create
                    </CldUploadButton>
                </li>
                <li>
                    <Link href={`/profile/${data.id}`}>
                    <div className="w-8 avatar">
                    <Avatar 
                    width={256}
                    height={256}
                    src={data?.image as string}
                    />
                    </div>
                    Profile
                    </Link>
                </li>
            </div>
            

                <div className="h-1/2 flex flex-col justify-end">
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
                </div> 
                
        </ul>
        </div>
        
        {/*md*/}
        <ul className="w-auto lg:hidden md:block hidden menu p-2 text-base-content menu-lg min-h-screen z-40 fixed">
            <div className="h-1/2">
            <Link href={'/'} className="btn btn-ghost normal-case text-xl ms-auto me-auto w-full"><SiLens/></Link>
            {/* Sidebar content here */}
                <li>
                 <Link href={'/'}>
                    <MdOutlineHome className="h-8 w-8" stroke="currentColor"/>
                    
                    </Link>
                </li>
                <li>
                    <Link href={'/explore'}>
                    <MdOutlineExplore className="h-8 w-8" stroke="currentColor"/>
                    </Link>
                </li>
                <li>
                    {/*@ts-ignore*/}
                    <a onClick={()=>document?.getElementById('notification_modal')?.showModal()}>
                        <div className="indicator">
                            <MdOutlineNotifications className="h-8 w-8" stroke="currentColor"/>
                            {newNotifications > 0 ?
                                <span className="indicator-item badge text-xs badge-error w-6">{newNotifications}</span>
                                :<div></div> 
                            }
                        </div>
                    </a>
                </li>
                <li className="hidden">
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
                <div className="w-8 avatar">
                    <Avatar 
                    width={256}
                    height={256}
                    src={data?.image as string}
                    />
                    </div>
                    
                    </Link>
                </li>

            </div>
            
            <div className="h-1/2 flex flex-col justify-end">
                <li>
                <Link href={'/settings'}>
                    <MdOutlineSettings className="h-8 w-8" stroke="currentColor"/>
                    </Link>
                </li>
                <li>
                    <a onClick={() => signOut()}>
                    
                    <MdOutlineLogout className="h-8 w-8" stroke="currentColor"/> 
                    </a>
                </li>
                </div>
        </ul>
        {/*mobile*/}
        <div className="drawer md:hidden absolute z-40">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-auto h-auto min-h-screen bg-base-200 text-base-content">
            <Link href={'/'} className="btn btn-ghost normal-case text-xl ms-auto me-auto w-full"><SiLens className="mt-1"/>Swiftsnap</Link>
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
                    {/*@ts-ignore*/}
                    <a onClick={()=>document?.getElementById('notification_modal')?.showModal()}>
                        <div className="indicator">
                            <MdOutlineNotifications className="h-8 w-8" stroke="currentColor"/>
                            {newNotifications > 0 ?
                                <span className="indicator-item badge text-xs badge-error w-6">{newNotifications}</span>
                                :<div></div> 
                            }
                        </div>
                         Notifications
                    </a>
                </li>
                <li className="hidden">
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
                <div className="w-8 avatar">
                    <Avatar 
                    width={256}
                    height={256}
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
        </div>

        <CreatePostModal user={data} image={image}/>
        <NotificationModal notifications={notifications} setNewNotifications={setNewNotifications}/>
        </>
     );
}
 
export default UtilityBar;