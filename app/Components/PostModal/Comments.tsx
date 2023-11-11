'use client'
import {SlOptions} from 'react-icons/sl'
import Avatar from '../Avatar';
import {BsChat,BsBookmark,BsHeart, BsFillHeartFill, BsFillBookmarkFill} from 'react-icons/bs'
import {PiPaperPlaneTilt} from 'react-icons/pi'
import {BiHappy} from 'react-icons/bi'
import { like, unlike, save,unsave } from '@/app/actions/server/interactions';
import { newComment } from '@/app/actions/server/newComment';
import { experimental_useOptimistic as useOptimistic, useRef } from 'react';
import convertDate from '@/app/actions/convertDate';

interface CommentsProps{
    postData:any
    currentUser:any
    postComments:any
}
const Comments:React.FC<CommentsProps> = ({postData,currentUser,postComments}) => {
       
    const dislikePost = unlike.bind(null,postData.id,currentUser.id)
    const likePost = like.bind(null,postData.id,currentUser.id)
    const savePost = save.bind(null,postData.id,currentUser.id)
    const unsavePost = unsave.bind(null,postData.id,currentUser.id)
    const addComment = newComment.bind(null,postData.id,currentUser.id)
    
    const ref =useRef<HTMLFormElement>(null)
    const [optimisticComments,addOptimisticComments] = useOptimistic(postComments,(state, newCmmt)=>{
        return [...state, newCmmt]
    })
    const [optimisticLikes,addOptimisticLikes]=useOptimistic(postData.likes,(state, newLiker)=>{
        if(newLiker=="disliking"){
           
            const index = state.indexOf(newLiker);
            state.splice(index, 1);
            console.log(state)
            console.log(state.length)
            return [state]
        }else{
            return [...state, newLiker]
        }
        
    })

    return ( 
        <div className='h-full flex flex-col justify-between divide-y bg-base-100'>
            <div className="flex justify-between grow-0 p-4">
                <div className='flex gap-3'>
                    <div className='w-8'>
                        <Avatar width={256} height={32} src={postData?.author?.image}/>
                    </div>
                    <div className='font-medium m-auto'>
                        {postData?.author?.name}
                    </div>
                    
                </div>    
                <div className='grid place-content-center'>
                    <SlOptions className="h-4 w-4 hover:cursor-pointer hover:fill-secondary"/>
                </div>
            </div>
            
            <div className='grow-0 p-4'>{postData.caption}</div>
            <div className='grow p-4'>
                <div className='relative w-full lg:h-full h-64'>
                <div className='absolute overflow-y-auto left-0 right-0 top-0 bottom-0'>
                <div>
                    {optimisticComments.map((comment:any) => (
                    <div className='mb-2' key={comment.id}>
                    <div className="flex items-center">
                        <span className="inline-flex items-center mr-3 text-sm font-semibold gap-2">
                            <Avatar width={24} height={24} src={comment?.author?.image}/>
                            {comment?.author?.name}</span>
                        <span className="text-xs"><div>{convertDate(comment.createdAt)}</div></span>
                    </div>
                    <span className='text-sm'>{comment.commentText}</span>
                    </div>
                ))} 
                </div>           
                </div>
                </div>       
            </div>
             
             <div className='grow-0 px-4 py-2'>
                <div className="flex items-center justify-between">
                    <div className="flex gap-5">
                    {optimisticLikes.includes(currentUser.id) ? 
                        <form action={async () =>{
                            addOptimisticLikes("disliking")
                            await dislikePost()
                            }}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsFillHeartFill className="h-6 w-6 hover:cursor-pointer fill-red-500"/>
                            </label>
                        </form>
                        :
                        <form action={async () =>{
                            addOptimisticLikes(currentUser.id)
                            await likePost()
                            }}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsHeart className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                            </label>
                        </form>
                        }
                        <BsChat className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                        <PiPaperPlaneTilt className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                    </div>
                    <div className="flex">
                    {currentUser.saved.includes(postData.id) ? 
                        <form action={unsavePost}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsFillBookmarkFill className="h-6 w-6 hover:cursor-pointer fill-base-content"/>
                            </label>
                        </form>
                        :
                        <form action={savePost}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsBookmark className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                            </label>
                        </form>
                        }
                    </div>
                </div>
                <div className='text-sm'>
                    {!optimisticLikes ? <>{optimisticLikes.length}</> : <>{optimisticLikes.length}</>}
                    Likes
                    
                </div>
             </div>
             <form ref={ref} className='flex w-full grow-0 p-4 join gap-1' action={async (formData) =>{
                ref.current?.reset()
                addOptimisticComments({
                    id: Math.random(),
                    commentText: formData.get(`comment_${postData.id}`) as string,
                    createdAt: new Date(),
                    author : {
                        image: currentUser.image,
                        name:currentUser.name
                    }
                })
                await addComment(formData)
                }}>
                    <button className='btn btn-ghost btn-sm p-1'>
                        <BiHappy className='h-5 w-5 '/>
                    </button>
                    
                    <input type="text" name={`comment_${postData.id}`} 
                    placeholder="Add a comment..." id='postCommentInput' className="input input-ghost input-sm w-full" required />
                    <button className='btn btn-ghost btn-sm'
                    type='submit'
                    >Post</button>
            </form>
        </div>
     );
}
 
export default Comments;