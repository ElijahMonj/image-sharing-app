
import {SlOptions} from 'react-icons/sl'
import Avatar from '../Avatar';
import {BsChat,BsBookmark,BsHeart} from 'react-icons/bs'
import {PiPaperPlaneTilt} from 'react-icons/pi'
import {BiHappy} from 'react-icons/bi'
import EmojiPicker from 'emoji-picker-react';
import { useState } from 'react';
import {toast} from 'react-hot-toast'
import axios from 'axios';
interface CommentsProps{
    data:any
    setCommentInput:any
    commentInput:any
    currentUser:any
}
const Comments:React.FC<CommentsProps> = ({data,setCommentInput,commentInput,currentUser}) => {
    const [emojiOpen,setEmojiOpen]=useState(false);
    const [isLoading,setIsLoading]=useState(false)
    function handlePostComment(){
        const commentData = {
            authorId:currentUser.id,
            post:data.id,
            commentText:commentInput
        }
        console.log(commentData)
        // axios.post('/api/comment',commentData).then(()=> console.log("commenting..."))
        // .catch(()=>toast.error('Something went wrong!'))
        // .finally(()=> {
        //     setIsLoading(false)
        //     toast.success('Comment Posted!')   
        // })
    }
    return ( 
        <div className='h-full flex flex-col justify-between divide-y bg-base-100'>
            <div className="flex justify-between grow-0 p-4">
                <div className='grid place-content-center'>
                    <Avatar size={30} src={data?.author?.image}/>
                </div>    
                <div className='grid place-content-center'>
                    <SlOptions className="h-4 w-4 hover:cursor-pointer hover:fill-secondary"/>
                </div>
            </div>
            
            <div className='grow-0 p-4'>{data.caption}</div>
            <div className='grow p-4'>
                <div className='relative w-full h-full'>
                <div className='absolute overflow-y-auto left-0 right-0 top-0 bottom-0'>
                   
                    <div className='mb-2'>
                        <div className="flex items-center">
                            <p className="inline-flex items-center mr-3 text-sm font-semibold gap-2">
                                <Avatar size={4} src={data?.author?.image}/>
                                Michael Gough</p>
                            <p className="text-sm"><div>Feb. 8, 2022</div></p>
                        </div>
                        <p>XD XD XDXDXDXD  XDXDX X XDDX XD XDDX DX DXDX DX XD DXDXDX</p>
                    </div>
                </div>
                </div>
                
           
            </div>
             
             <div className='grow-0 px-4 py-2'>
                <div className="flex items-center justify-between">
                    <div className="flex gap-5">
                        <BsHeart className="h-6 w-6 hover:cursor-pointer hover:fill-secondary" />
                        <BsChat className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                        <PiPaperPlaneTilt className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                    </div>
                    <div className="flex">
                        <BsBookmark className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                    </div>
                </div>
                <div>
                    Likes
                </div>
             </div>
            
           
            <div className='flex w-full grow-0 p-4 join gap-1'>
                <button className='btn btn-ghost btn-sm p-1'>
                    <BiHappy className='h-5 w-5 '/>
                </button>
                
                <input type="text" placeholder="Type here" id='postCommentInput' 
                onChange={(e)=>setCommentInput(e.target.value)}
                value={commentInput}
                disabled={isLoading}
                className="input input-ghost input-sm w-full max-w-xs" />
                <button className='btn btn-ghost btn-sm'
                onClick={handlePostComment}
                disabled={isLoading}
                >Post</button>
            </div>
        </div>
     );
}
 
export default Comments;