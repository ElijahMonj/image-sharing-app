'use server'
import prisma from "@/app/libs/prismadb";
import getSession from "./getSession";

 
export async function getNewsfeedPosts() {
    try {
        const session = await getSession() 
        if(!session?.user?.email){
            return null;
        }
        const user = await prisma.account.findUnique({
           where:{
                email:session?.user?.email
           }
        })
        console.log(user?.following)
        const posts = await prisma.post.findMany({
            where:{
                authorId: {in: user?.following }
            },
            include:{
                author:true,
                comments:true
            }
        })
        console.log(posts)
        return posts
    } catch (error:any) {
        return null
    }
}