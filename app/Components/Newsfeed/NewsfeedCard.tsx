
import Image from 'next/image'

import convertDate from '@/app/actions/convertDate'
import Avatar from '../Avatar'
import Link from "next/link"

import NewsfeedActions from './NewsfeedActions'
import prisma from "@/app/libs/prismadb";
import PostModal from '../PostModal/PostModal'
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
    let taggedUser:any;
    if(data?.tagged.length==0){
        taggedUser=false
    }else{
        taggedUser = await prisma.user.findUnique({
            where:{
                id:data?.tagged[0]
            }
        })
    }

    return ( 
        <div className="grid lg:w-128 md:w-118 sm:w-96 w-full">
                <PostModal currentUser={currentUser} postId={postId}/> 
                <div className="flex items-center py-3 w-full">
                    <div className='w-8'>
                    <Link href={`/profile/${data?.author.id}`} >
                    <Avatar 
                    width={256}
                    height={32}
                    src={data?.author.image as string}
                    />
                    </Link>
                    </div>
                   
                    <div className="ml-3">
                        <div className='flex'>
                        <Link href={`/profile/${data?.author.id}`} className="text-sm font-semibold antialiased block leading-tight me-1">{data?.author.name}</Link>
                        {taggedUser ? 
                        <div className="text-sm antialiased block leading-tight"> is with {<Link href={`/profile/${taggedUser?.id}`} className="font-semibold">{taggedUser?.name}</Link>}</div> 
                        : <></>}
                        </div>
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

                <NewsfeedActions postData={data} currentUser={currentUser}/>
                
                
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