
import Image from 'next/image'
import { like,save,unlike, unsave } from '@/app/actions/server/interactions'
import convertDate from '@/app/actions/convertDate'
import Avatar from '../Avatar'
import Link from "next/link"
import { useState,useEffect } from 'react'
import { getPost, getSave } from '@/app/actions/server/getPost'
import NewsfeedActions from './NewsfeedActions'
import prisma from "@/app/libs/prismadb";
interface NewsfeedCardProps{
    postId:string
    currentUser:any
}

const NewsfeedCard:React.FC<NewsfeedCardProps> = async ({ postId,currentUser }) => {

    const data = await prisma.post.findUnique({
        where:{
            id:postId
        },
        include:{
            author:true,
            comments:true
        }
    })
    

    return ( 
        <div className="grid lg:w-128 md:w-118 sm:w-96 w-full">
            
                <div className="flex items-center py-3 w-full">
                    <div className='w-8'>
                    <Avatar 
                    width={256}
                    height={32}
                    src={data?.author.image as string}
                    />
                    </div>
                   
                    <div className="ml-3">
                        <Link href={`/profile/${data?.author.id}`} className="text-sm font-semibold antialiased block leading-tight">{data?.author.name}</Link>
                        <span className="text-xs block">{convertDate(data?.createdAt as Date)}</span>
                    </div>
                </div>
                <Image
                className='rounded-sm lg:w-128 md:w-118 sm:w-96 w-full '
                src={data?.image as string}
                width={999}
                height={999}
                style={{objectFit: "cover",maxHeight:"45rem"}}
                alt="post"
               
                />
                <NewsfeedActions postId={postId} currentUser={currentUser}/>
                
                <div className="font-semibold text-sm mt-2 mx-1">{data?.likes.length} likes</div>
                <div className="text-sm mt-2 mx-1">
                    <span className='font-semibold me-1'>{data?.author.email}</span>
                    {data?.caption}
                </div>
                <div className="text-sm mt-2 cursor-pointer mx-1">View all comments</div>
                <div className="divider"></div> 
        </div>
     );
}
 
export default NewsfeedCard;