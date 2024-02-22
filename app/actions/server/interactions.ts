'use server'
import prisma from "@/app/libs/prismadb";
import { revalidatePath } from "next/cache";

export async function like(postId:string,likerId:string){
    const post = await prisma.post.findUnique({
        where:{
            id:postId
        }
    })
    if(!post?.likes.includes(likerId)){
        console.log("liking")
        await prisma.post.update({
        where:{
            id:postId
        },
        data:{
            likes:{
                push:likerId
            }
        }
        })
        if(!(likerId==post?.authorId)){
            const liker = await prisma.user.findUnique({
                where:{
                    id:likerId
                }
            })
              await prisma.notification.create({
                data: {
                    owner:{
                        connect:{
                            id:post?.authorId as string
                        }
                    },
                    notifier:{
                        connect:{
                            id:liker?.id as string
                        }
                    },
                    link:`/post/${postId}`,
                    type:"like",
                },
              })
        }    
    }
    
    //NOTIFICATION
    revalidatePath('/')
}
export async function unlike(postId:string,likerId:string){
    console.log("unliking")
    const post = await prisma.post.findUnique({
        where:{
            id:postId
        }
    })
    const currentLikes:any = post?.likes 
    const index = currentLikes.indexOf(likerId);
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

export async function save(postId:string,userId:string){
    const user = await prisma.user.findUnique({
        where:{
            id:userId
        }
    })
    if(!user?.saved.includes(postId)){
        console.log("saving")
        await prisma.user.update({
        where:{
            id:userId
        },
        data:{
            saved:{
                push:postId
            }
        }
    })
    }
    revalidatePath('/')
}
export async function unsave(postId:string,userId:string){
    console.log("unsaving")
    const user = await prisma.user.findUnique({
        where:{
            id:userId
        }
    })
    const currentSaves:any = user?.saved 
    const index = currentSaves.indexOf(postId);
    currentSaves.splice(index, 1);
    await prisma.user.update({
        where:{
            id:userId
        },
        data:{
            saved: currentSaves
        }
    })
    revalidatePath('/')
}
 