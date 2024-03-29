'use client'

import {BsBookmark,BsHeart,BsFillHeartFill,BsFillBookmarkFill} from 'react-icons/bs'
import { BsChat } from "react-icons/bs";
import {PiPaperPlaneTilt} from 'react-icons/pi'
import { experimental_useOptimistic as useOptimistic } from 'react';
import { like, save, unlike, unsave } from "@/app/actions/server/interactions";

interface NewsfeedActionsProps{
    post:any
    currentUser:any
    setCurrentPost:any
}

const NewsfeedActions:React.FC<NewsfeedActionsProps> = ({post,currentUser,setCurrentPost}) => {
    
    const dislikePost = unlike.bind(null,post.id,currentUser.id)
    const likePost = like.bind(null,post.id,currentUser.id)
    const savePost = save.bind(null,post.id,currentUser.id)
    const unsavePost = unsave.bind(null,post.id,currentUser.id)
    
    const [optimisticLikes,addOptimisticLikes]=useOptimistic(post.likes,(state, isLiking)=>{
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
            const index = state.indexOf(post.id);
            state.splice(index, 1);
           
            return state
        }else{
            
            return [...state, post.id]
        }
    })

    return ( 
        <>
        <div className="flex items-center justify-between mt-3 mb-2 mx-1">
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
                            onClick={()=>{
                            setCurrentPost(post)
                                // @ts-ignore
                            document?.getElementById(`postmodal`)?.showModal()
                            }} />
                        <PiPaperPlaneTilt className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"
                        
                        onClick={()=>{
                            setCurrentPost(post)
                            //@ts-ignore
                            document?.getElementById(`sharemodal`)?.showModal()}
                            }
                        />
                        
                    </div>
                    <div className="flex">
                        
                    {optimisticSave.includes(post.id) ? 
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
                <div className="font-semibold text-sm mt-2 mx-1">{optimisticLikes.length} likes</div>
                </>
     );
}
 
export default NewsfeedActions;