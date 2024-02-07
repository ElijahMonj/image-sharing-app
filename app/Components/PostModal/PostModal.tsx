'use client'
import prisma from "@/app/libs/prismadb";
import Image from 'next/image'
import Comments from './Comments';
import defaultAvatar from '@/public/images/defaultAvatar.jpg'
import ShareModal from "../Sharing/ShareModal";

interface PostModalProps {
    currentPost:any
    setCurrentPost:any
    currentUser:any
    posts:any
}

const PostModal:React.FC<PostModalProps> = ({currentUser,currentPost,setCurrentPost,posts}) => {

    return ( 
        <dialog id={`postmodal`} className="modal">
                
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                
                <div className="modal-box w-11/12 lg:w-max max-w-7xl h-auto p-0">
                    {currentPost==0 ?
                    <div>FUCK</div>
                    :
                    <div className="flex flex-col lg:flex-row place-items-center items-stretch">
                        <div className='grid lg:w-max w-full bg-slate-950'>
                            
                            <Image 
                            src={currentPost?.image ? currentPost?.image : defaultAvatar}
                            style={{objectFit:"contain",maxHeight:"50rem"}}
                            alt="post"
                            width={999}
                            height={999}
                            className='flex-grow rounded-sm w-full my-auto'/>
                            
                        
                        </div>
                       
                        <div className="grid lg:max-w-96 card bg-base-300 rounded-box">
                        
                            <Comments currentPost={currentPost} currentUser={currentUser} setCurrentPost={setCurrentPost} posts={posts}/>
                        
                        </div>
                    </div>
                    }     
                   
                </div>
                 
            </dialog>
     );
}
 
export default PostModal;