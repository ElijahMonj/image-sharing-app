'use client'
import Image from 'next/image'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsChat,BsBookmark,BsHeart} from 'react-icons/bs'
import {PiPaperPlaneTilt} from 'react-icons/pi'
import Picture from '@/public/test/1by1.jpg'
import Phone from '@/public/test/phone.jpg'
import Desktop from '@/public/test/desktop.jpg'

interface NewsfeedCardProps{
    likes:any,
    
    email:string,
    caption:string,
    tagged:any,
    image:string,
    authorName:string,
    authorImage:string,
    id:string
    
}

const NewsfeedCard:React.FC<NewsfeedCardProps> = ({
    likes,email,caption,tagged,image,authorName,authorImage,id
}) => {
    return ( 
        <div className="grid lg:w-128 md:w-118 sm:w-96 w-full">
            
                <div className="flex items-center py-3 w-full">
                    <Image
                    src={authorImage}
                    style={{height: "2rem",objectFit: "cover"}}
                    height={32}
                    width={32}
                    alt="Picture of the author"
                    className='rounded-full'
                    />
                    <div className="ml-3">
                        <span className="text-sm font-semibold antialiased block leading-tight">{authorName}</span>
                        <span className="text-xs block">Asheville, North Carolina</span>
                    </div>
                </div>
                <Image
                className='rounded-sm lg:w-128 md:w-118 sm:w-96 w-full '
                src={image}
                width={999}
                height={999}
                style={{objectFit: "cover",maxHeight:"45rem"}}
                alt="post"
               
                />
                <div className="flex items-center justify-between mt-3 mb-2">
                    <div className="flex gap-5">
                        <BsHeart className="h-6 w-6 hover:cursor-pointer hover:fill-secondary" />
                        <BsChat className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                        <PiPaperPlaneTilt className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                    </div>
                    <div className="flex">
                        <BsBookmark className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                    </div>
                </div>
                <div className="font-semibold text-sm mt-2">{likes}</div>
                <div className="text-sm mt-2">
                    <span className='font-semibold me-1'>{email}</span>
                    {caption}
                </div>
                <div className="text-sm mt-2 cursor-pointer">View all comments</div>
                <div className="divider"></div> 
        </div>
     );
}
 
export default NewsfeedCard;