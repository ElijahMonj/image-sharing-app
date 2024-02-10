
import Image from 'next/image'
import convertDate, { timeAgo } from '@/app/actions/convertDate'
import Avatar from '../Avatar'
import Link from "next/link"
import NewsfeedActions from './NewsfeedActions'

import PostModal from '../PostModal/PostModal'

interface NewsfeedCardProps{
    post:any
    currentUser:any
    setCurrentPost:any
}

const NewsfeedCard:React.FC<NewsfeedCardProps> = ({ post,currentUser,setCurrentPost }) => {


    return ( 
        <div className="grid lg:w-128 md:w-118 sm:w-96 w-full px-2 md:px-0 lg:px-0">
                 
                <div className="flex items-center py-3 w-full">
                    
                    <Link href={`/profile/${post?.author.id}`} className='avatar w-10'>
                    <Avatar 
                    width={256}
                    height={32}
                    src={post?.author.image as string}
                    />
                    </Link>
                   
                    <div className="ml-3">
                        <div className='flex'>
                        <Link href={`/profile/${post?.author.id}`} className="text-sm font-semibold antialiased block leading-tight me-1">{post?.author.name}</Link>
                        {post.tagged == null ? <></>          
                        : <div className="text-sm antialiased block leading-tight"> is with {<Link href={`/profile/${post.tagged.id}`} className="font-semibold">{post.tagged?.name}</Link>}</div> }
                        </div>
                        <span className="text-xs font-medium text-secondary block" suppressHydrationWarning >{timeAgo(post?.createdAt)}</span>
                    </div>
                </div>
                <Image
                className='rounded-sm lg:w-128 md:w-118 sm:w-96 w-full cursor-pointer'
                src={post?.image as string}
                width={999}
                height={999}
                style={{objectFit: "cover",maxHeight:"45rem"}}
                alt="post"
                priority={true}  
                onClick={()=>{
                    setCurrentPost(post)
                        // @ts-ignore
                    document?.getElementById(`postmodal`)?.showModal()
                    }}         
                />

                <NewsfeedActions post={post} currentUser={currentUser} setCurrentPost={setCurrentPost}/>
                         
                <div className="text-sm mt-2 mx-1">
                    <span className='font-semibold me-1'>{post?.author.email}</span>
                    {post?.caption}
                </div>
                
                <div className="divider"></div> 
        </div>
     );
}
 
export default NewsfeedCard;