
import Image from 'next/image'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsChat,BsBookmark,BsHeart} from 'react-icons/bs'
import {PiPaperPlaneTilt} from 'react-icons/pi'
import Picture from '@/public/test/1by1.jpg'
import Phone from '@/public/test/phone.jpg'
import Desktop from '@/public/test/desktop.jpg'

interface NewsfeedCardProps{
    src?:string|null|any;
}

const NewsfeedCard:React.FC<NewsfeedCardProps> = ({
    src
}) => {
    return ( 
        <div className="grid lg:w-96 md:w-96 sm:w-96 w-full">
            
                <div className="flex items-center py-3 w-full">
                    <Image
                    src={Phone}
                    style={{height: "2rem",width:"2rem",objectFit: "cover"}}
                    alt="Picture of the author"
                    className='rounded-full'
                    />
                    <div className="ml-3">
                        <span className="text-sm font-semibold antialiased block leading-tight">8fact</span>
                        <span className="text-xs block">Asheville, North Carolina</span>
                    </div>
                </div>
                <Image
                src={src}
                style={{objectFit: "cover",maxHeight:"36rem"}}
                alt="post"
                className='rounded-sm lg:w-96 md:w-96 sm:w-96 w-full'
                />
                <div className="flex items-center justify-between mx-4 mt-3 mb-2">
                    <div className="flex gap-5">
                        <BsHeart className="h-6 w-6 hover:cursor-pointer hover:fill-secondary" />
                        <BsChat className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                        <PiPaperPlaneTilt className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                    </div>
                    <div className="flex">
                        <BsBookmark className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                    </div>
                </div>
                <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
                <div className="divider"></div> 
        </div>
     );
}
 
export default NewsfeedCard;