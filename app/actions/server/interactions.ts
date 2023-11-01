'use server'
import prisma from "@/app/libs/prismadb";
import getSession from "../getSession";
import { revalidatePath } from "next/cache";

export async function like(postId:string,likerId:string){
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
    revalidatePath('/');
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
    console.log(currentLikes)
    revalidatePath('/');
}

 