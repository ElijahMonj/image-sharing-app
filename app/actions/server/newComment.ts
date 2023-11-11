'use server'

import { revalidatePath } from "next/cache"
import prisma from "@/app/libs/prismadb";

export const newComment = async (postId:string, userId:string,formData: FormData) =>{
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
    revalidatePath('/')
}