'use client'

import {BsBookmark,BsHeart,BsFillHeartFill,BsFillBookmarkFill} from 'react-icons/bs'
import {PiPaperPlaneTilt} from 'react-icons/pi'
import OpenModal from "./OpenModal";
import { experimental_useOptimistic as useOptimistic } from 'react';
import { like, save, unlike, unsave } from "@/app/actions/server/interactions";

interface NewsfeedActionsProps{
    postData:any
    currentUser:any
}

const NewsfeedActions:React.FC<NewsfeedActionsProps> = ({postData,currentUser}) => {
    
    const dislikePost = unlike.bind(null,postData.id,currentUser.id)
    const likePost = like.bind(null,postData.id,currentUser.id)
    const savePost = save.bind(null,postData.id,currentUser.id)
    const unsavePost = unsave.bind(null,postData.id,currentUser.id)
    
    const [optimisticLikes,addOptimisticLikes]=useOptimistic(postData.likes,(state, isLiking)=>{
        if(!isLiking){       
            const index = state.indexOf(currentUser.id);
            state.splice(index, 1);
            console.log(state.includes(currentUser.id))
            return state
        }else{
            console.log([...state, currentUser.id])
            return [...state, currentUser.id]
        }
    })
    const [optimisticSave,addOptimisticSave]=useOptimistic(currentUser.saved,(state, isSaving)=>{
        if(!isSaving){       
            const index = state.indexOf(postData.id);
            state.splice(index, 1);
            console.log(state)
            return state
        }else{
            console.log([...state, postData.id])
            return [...state, postData.id]
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
                         
                        
                        <OpenModal postId={postData.id} currentUser={currentUser}/>
                         
                        <PiPaperPlaneTilt className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                    </div>
                    <div className="flex">
                        
                    {optimisticSave.includes(postData.id) ? 
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