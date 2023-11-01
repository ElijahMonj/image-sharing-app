'use client'
import Image from 'next/image'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsChat,BsBookmark,BsHeart,BsFillHeartFill} from 'react-icons/bs'
import {PiPaperPlaneTilt} from 'react-icons/pi'
import { like,unlike } from '@/app/actions/server/interactions'
import convertDate from '@/app/actions/convertDate'
import Avatar from '../Avatar'
import Link from "next/link"
import { useState,useEffect } from 'react'
interface NewsfeedCardProps{
    data:any
    setCurrentPost:any
    setCommentInput:any
    currentUser:any
}

const NewsfeedCard:React.FC<NewsfeedCardProps> = ({
    setCurrentPost,setCommentInput,data,currentUser
}) => {
    const likeData=like.bind(null,data.id,currentUser.id)
    const unlikeData=unlike.bind(null,data.id,currentUser.id)
    const [isLiked,setIsLiked]=useState(false)
    useEffect(() => {
        if(data.likes.includes(currentUser.id)){
            setIsLiked(true)
        }
    },[data.likes, currentUser.id]);
    return ( 
        <div className="grid lg:w-128 md:w-118 sm:w-96 w-full">
            
                <div className="flex items-center py-3 w-full">
                    <div className='w-8'>
                    <Avatar 
                    width={256}
                    height={32}
                    src={data.author.image}
                    />
                    </div>
                   
                    <div className="ml-3">
                        <Link href={`/profile/${data.author.id}`} className="text-sm font-semibold antialiased block leading-tight">{data.author.name}</Link>
                        <span className="text-xs block">{convertDate(data.createdAt)}</span>
                    </div>
                </div>
                <Image
                className='rounded-sm lg:w-128 md:w-118 sm:w-96 w-full '
                src={data.image}
                width={999}
                height={999}
                style={{objectFit: "cover",maxHeight:"45rem"}}
                alt="post"
               
                />
                <div className="flex items-center justify-between mt-3 mb-2 mx-1">
                    <div className="flex gap-5">
                        {isLiked ? 
                        <form action={unlikeData}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsFillHeartFill className="h-6 w-6 hover:cursor-pointer fill-red-500"/>
                            </label>
                        </form>
                        :
                        <form action={likeData}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsHeart className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                            </label>
                        </form>
                        }
                         
                        
                        <BsChat className="h-6 w-6 hover:cursor-pointer hover:fill-secondary" 
                         onClick={()=>{
                            setCurrentPost(data)
                            setCommentInput('')
                             // @ts-ignore
                            document?.getElementById(`post_modal`)?.showModal()
                         }}
                        />
                        <PiPaperPlaneTilt className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                    </div>
                    <div className="flex">
                        <BsBookmark className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                    </div>
                </div>
                <div className="font-semibold text-sm mt-2 mx-1">{data.likes.length} likes</div>
                <div className="text-sm mt-2 mx-1">
                    <span className='font-semibold me-1'>{data.author.email}</span>
                    {data.caption}
                </div>
                <div className="text-sm mt-2 cursor-pointer mx-1">View all comments</div>
                <div className="divider"></div> 
        </div>
     );
}
 
export default NewsfeedCard;