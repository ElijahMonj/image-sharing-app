'use server'

import { revalidatePath } from "next/cache"
import prisma from "@/app/libs/prismadb";

export const newComment = async (postId:string, postAuthorId:string,userId:string,formData: FormData) =>{
    const comment =formData.get(`comment_${postId}`)
    try{
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
            
              await prisma.notification.create({
                data: {
                    owner:{
                        connect:{
                            id:postAuthorId as string
                        }
                    },
                    notifier:{
                        connect:{
                            id:userId as string
                        }
                    },
                    link:`/post/${postId}`,
                    type:"comment",
                },
              })
        } 
        //NOTIFICATION
        revalidatePath('/')
    }catch(e){
        console.log(e)
    }finally{
        return
    }   
 
}