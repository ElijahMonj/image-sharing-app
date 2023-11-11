import prisma from "@/app/libs/prismadb";
import { revalidatePath } from "next/cache";
import {BsChat,BsBookmark,BsHeart,BsFillHeartFill,BsFillBookmarkFill} from 'react-icons/bs'
import {PiPaperPlaneTilt} from 'react-icons/pi'
import OpenModal from "./OpenModal";
import PostModal from "../PostModal/PostModal";
interface NewsfeedActionsProps{
    postId:string
    currentUser:any
}

const NewsfeedActions:React.FC<NewsfeedActionsProps> = async ({postId,currentUser}) => {
    const post = await prisma.post.findUnique({
        where:{
            id:postId
        }
    })
    const user = await prisma.user.findUnique({
        where:{
            id:currentUser.id
        }
    })
    const isLiked = post?.likes.includes(currentUser.id)
    const isSaved = user?.saved.includes(postId);
    const dislike = async (formData:FormData)=>{
        'use server';
        console.log("disliking...")
        
        const currentLikes:any = post?.likes 
        const index = currentLikes.indexOf(currentUser.id);
        const x = currentLikes.splice(index, 1);
        const unlike = await prisma.post.update({
            where:{
                id:postId
            },
            data:{
                likes: currentLikes
            }
        })
        revalidatePath('/')
    }
    const like = async (formData:FormData) =>{
        'use server';
        await prisma.post.update({
            where:{
                id:postId
            },
            data:{
                likes:{
                    push:currentUser.id
                }
            }
        })
        revalidatePath('/')
    }

    const save = async ()=>{
        'use server'
        await prisma.user.update({
            where:{
                id:currentUser.id
            },
            data:{
                saved:{
                    push:postId
                }
            }
        })
        revalidatePath('/')
    }
    const unsave = async ()=>{
        'use server'
        console.log("unsaving")
        
        const currentSaves:any = user?.saved 
        const index = currentSaves.indexOf(postId);
        currentSaves.splice(index, 1);
        await prisma.user.update({
            where:{
                id:currentUser.id
            },
            data:{
                saved: currentSaves
            }
        })
        revalidatePath('/')
    }

    return ( 
        <div className="flex items-center justify-between mt-3 mb-2 mx-1">
                    <div className="flex gap-5">
                        {isLiked ? 
                        <form action={dislike}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsFillHeartFill className="h-6 w-6 hover:cursor-pointer fill-red-500"/>
                            </label>
                        </form>
                        :
                        <form action={like}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsHeart className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                            </label>
                        </form>
                        }
                         
                        
                        <OpenModal postId={postId} currentUser={currentUser}/>
                        <PostModal currentUser={currentUser} postId={postId}/>  
                        <PiPaperPlaneTilt className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                    </div>
                    <div className="flex">
                        
                        {isSaved ? 
                        <form action={unsave}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsFillBookmarkFill className="h-6 w-6 hover:cursor-pointer fill-base-content"/>
                            </label>
                        </form>
                        :
                        <form action={save}>
                            <label>
                            <input type="submit" className='hidden'/>
                                <BsBookmark className="h-6 w-6 hover:cursor-pointer hover:fill-secondary"/>
                            </label>
                        </form>
                        }
                    </div>
                </div>
     );
}
 
export default NewsfeedActions;