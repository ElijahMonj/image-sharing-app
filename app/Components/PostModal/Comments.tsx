
import {SlOptions} from 'react-icons/sl'
import Avatar from '../Avatar';
import {BsChat,BsBookmark,BsHeart, BsFillHeartFill, BsFillBookmarkFill} from 'react-icons/bs'
import {PiPaperPlaneTilt} from 'react-icons/pi'
import {BiHappy} from 'react-icons/bi'
import { like, unlike, save,unsave } from '@/app/actions/server/interactions';
import { newComment } from '@/app/actions/server/newComment';
import { useEffect, experimental_useOptimistic as useOptimistic, useRef, useState } from 'react';
import convertDate from '@/app/actions/convertDate';
import Link from 'next/link';
import { Theme } from 'emoji-picker-react';
import EmojiPicker from 'emoji-picker-react';
import { EmojiStyle } from 'emoji-picker-react';
interface CommentsProps{
    currentPost:any
    setCurrentPost:any
    currentUser:any
    posts:any
    showPicker:boolean
    setShowPicker:any
}

const Comments:React.FC<CommentsProps> = ({currentPost,currentUser,setCurrentPost,posts,showPicker,setShowPicker}) => {
    
    
    
    const dislikePost = unlike.bind(null,currentPost.id,currentUser.id)
    const likePost = like.bind(null,currentPost.id,currentUser.id)
    const savePost = save.bind(null,currentPost.id,currentUser.id)
    const unsavePost = unsave.bind(null,currentPost.id,currentUser.id)
    const addComment = newComment.bind(null,currentPost.id,currentPost.authorId,currentUser.id)
    
    const ref =useRef<HTMLFormElement>(null)
    const [optimisticComments,addOptimisticComments] = useOptimistic(currentPost.comments,(state, newCmmt)=>{
        return [...state, newCmmt]
    })
    const [optimisticLikes,addOptimisticLikes]=useOptimistic(currentPost.likes,(state, isLiking)=>{
        if(!isLiking){       
            const index = state.indexOf(currentUser.id);
            state.splice(index, 1);
            
            return state
        }else{
            
            return [...state, currentUser.id]
        }
    })
    const [optimisticSave,addOptimisticSave]=useOptimistic(currentUser.saved,(state, isSaving)=>{
        if(!isSaving){       
            const index = state.indexOf(currentPost.id);
            state.splice(index, 1);
            console.log(state)
            return state
        }else{
            console.log([...state, currentPost.id])
            return [...state, currentPost.id]
        }
    })
    const onEmojiClick = (event: { emoji: string; }) => {
        let input = document.getElementById(`commentInput_${currentPost.id}`) as HTMLInputElement
        input.value = input.value + event.emoji
      };
      useEffect(() => {
        setCurrentPost(posts.find((post:any)=>post.id==currentPost.id))
      },[currentPost.id, posts, setCurrentPost]);
    function getTheme(){
        const element = document.querySelector("html") 
        const currentTheme = element?.getAttribute("data-theme"); 
        if(currentTheme=='corporate'){
            return Theme.LIGHT
        }else if(currentTheme=='business'){
            return Theme.DARK
        }else{
            return Theme.AUTO
        }
    }
    return ( 
        <div className='h-full flex flex-col justify-between bg-base-100'>
            
            <div className="flex justify-between grow-0 p-4">
                <div className='flex'>
                    <div className='w-8 me-2'>
                        <Link href={`/profile/${currentPost?.author.id}`}>
                            <Avatar width={256} height={32} src={currentPost?.author?.image}/>
                        </Link>
                    </div>
                    <Link href={`/profile/${currentPost?.author.id}`} className="font-bold m-auto me-1">{currentPost?.author.name}</Link>
                    {currentPost.tagged == null ?
                    <></>
                    : <div className="m-auto me-5">is with {<Link href={`/profile/${currentPost.tagged.id}`} className="font-bold">{currentPost.tagged.name}</Link>}</div>}
                    
                </div>    
                <div className='grid place-content-center'>
                    <SlOptions className="h-4 w-4 hover:cursor-pointer hover:fill-secondary"/>
                </div>
            </div>
            
            <div className='grow-0 p-4'>{currentPost.caption}</div>
            <div className='grow p-4'>
                <div className='relative w-full lg:h-full h-64'>
                <div className='absolute overflow-y-auto left-0 right-0 top-0 bottom-0'>
                <div>
                    {optimisticComments.map((comment:any) => (
                    <div className='mb-2' key={comment.id}>
                    <div className="flex items-center">
                        <span className="inline-flex items-center mr-3 text-sm font-semibold gap-2">
                            <Link href={`/profile/${comment?.author.id}`}>
                                <Avatar width={24} height={24} src={comment?.author?.image}/>
                            </Link>
                            <Link href={`/profile/${comment?.author.id}`}>
                                {comment?.author?.name}
                            </Link>
                        </span>
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
                            
                            addOptimisticLikes(false)
                            await dislikePost()
                            }}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsFillHeartFill className="h-6 w-6 hover:cursor-pointer fill-red-500"/>
                            </label>
                        </form>
                        :
                        <form action={async () =>{
                            
                            addOptimisticLikes(true)
                            await likePost()
                            }}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsHeart className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                            </label>
                        </form>
                        }
                        <BsChat className="h-6 w-6 hover:cursor-pointer hover:fill-secondary" 
                        onClick={()=>document?.getElementById(`commentInput_${currentPost.id}`)?.focus()}/>
                        <PiPaperPlaneTilt className="h-6 w-6 hover:cursor-pointer hover:fill-secondary" 
                        //@ts-ignore
                        onClick={()=>document?.getElementById(`sharemodal`)?.showModal()}/>
                    </div>
                    <div className="flex">
                    {optimisticSave.includes(currentPost.id) ? 
                        <form action={async () =>{
                            
                            addOptimisticSave(false)
                            await unsavePost()
                            }}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsFillBookmarkFill className="h-6 w-6 hover:cursor-pointer fill-base-content"/>
                            </label>
                        </form>
                        :
                        <form action={async () =>{
                            
                            addOptimisticSave(true)
                            await savePost()
                            }}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsBookmark className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                            </label>
                        </form>
                        }
                    </div>
                </div>
                <div className='text-sm'>
                   {optimisticLikes.length} Likes
                </div>
             </div>
                    <EmojiPicker
                        open={showPicker}
                        searchDisabled={true}
                        width={280}
                        emojiStyle={EmojiStyle.FACEBOOK}
                        height={360}
                        theme={getTheme()}
                        className='absolute z-50'
                        onEmojiClick={onEmojiClick}
                        style={{position:"absolute", bottom:'60px'}}
                        lazyLoadEmojis={true}
                        skinTonesDisabled={true}
                    />
             <form ref={ref} className='flex w-full grow-0 p-4 join gap-1' action={async (formData) =>{
                
                ref.current?.reset()
                
                addOptimisticComments({
                    id: Math.random(),
                    commentText: formData.get(`comment_${currentPost.id}`) as string,
                    createdAt: new Date(),
                    author : {
                        image: currentUser.image,
                        name:currentUser.name
                    }
                })
               
                await addComment(formData)
                
                }}> 
                    

                    <div className='btn btn-ghost btn-sm p-1' onClick={() => setShowPicker((val: any) => !val)}>
                        
                        <BiHappy className='h-5 w-5 '/>
                    </div>

                    <input type="text" name={`comment_${currentPost.id}`}
                    placeholder="Add a comment..." id={`commentInput_${currentPost.id}`} className="input input-ghost input-sm w-full" required />
                    <button className='btn btn-ghost btn-sm'
                    type='submit'
                    >Post</button>
            </form>
        </div>
     );
}
 
export default Comments;