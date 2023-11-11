'use server'
import prisma from "@/app/libs/prismadb";
import getSession from "../getSession";

export async function getPost(id:string) {
    try {
        const session = await getSession() 
        if(!session?.user?.email){
            return null;
        }
        
        const posts = await prisma.post.findUnique({
            where:{
                id:id
            },
            include:{
                author:true,
                comments:true
            }
        })
        
        return posts
    } catch (error:any) {
        return null
    }
}
export async function getSave(postId:string,userId:string) {
    try {
        const session = await getSession() 
        if(!session?.user?.email){
            return null;
        }
        
        const user = await prisma.user.findUnique({
            where:{
                id:userId
            },
        })
        
        return user?.saved
       
    } catch (error:any) {
        return null
    }
}
