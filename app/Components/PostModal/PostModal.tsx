'use client'
import defaultAvatar from '@/public/images/defaultAvatar.jpg';
import Image from 'next/image';
import { useState } from "react";
import Comments from './Comments';
interface PostModalProps {
    currentPost:any
    setCurrentPost:any
    currentUser:any
    posts:any
}

const PostModal:React.FC<PostModalProps> = ({currentUser,currentPost,setCurrentPost,posts}) => {
    const [showPicker, setShowPicker] = useState(false); 
    console.log(currentPost)  
    return ( 
        <dialog id={`postmodal`} className="modal" onClose={()=>{
            setCurrentPost(0);
            setShowPicker(false);
            }}>
                
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
                
                <div className="modal-box w-11/12 lg:w-max max-w-7xl h-auto p-0">
                    {currentPost==0 ?
                    <div className="w-128 h-48 align-center flex justify-center">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
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
                        
                            <Comments currentPost={currentPost} currentUser={currentUser} setCurrentPost={setCurrentPost} posts={posts} showPicker={showPicker} setShowPicker={setShowPicker}/>
                        
                        </div>
                    </div>
                    }     
                   
                </div>
                 
            </dialog>
     );
}
 
export default PostModal;