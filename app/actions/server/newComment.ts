'use server'

import { revalidatePath } from "next/cache"
import prisma from "@/app/libs/prismadb";

export const newComment = async (postId:string, postAuthorId:string,userId:string,formData: FormData) =>{
    const comment =formData.get(`comment_${postId}`)
    await prisma.comment.create({
        data:{            
            post:{
                connect:{
                    id:postId
                }
            },
            author:{
                connect:{
                    id:userId
                }
            },
            commentText:comment as string,
            likes:[] 
        }
    })
    if(!(userId==postAuthorId)){
        const user = await prisma.user.findUnique({
            where:{
                id:userId
            }
        })
        await prisma.notification.create({
            data: {
                ownerId:postAuthorId as string,
                userName:user?.name as string,
                userImage:user?.image as string,
                link:`/post/${postId}`,
                type:"comment",
            },
          })
    } 
    //NOTIFICATION
    revalidatePath('/')
}