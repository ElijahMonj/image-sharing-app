
import prisma from "@/app/libs/prismadb";
import getSession from "../getSession";

 
export async function getNewsfeedPosts() {
    try {
        const session = await getSession() 
        if(!session?.user?.email){
            return null;
        }
        const user = await prisma.user.findUnique({
           where:{
                email:session?.user?.email
           }
        })
       
        const posts = await prisma.post.findMany({
            where:{
                authorId: {in: user?.following }
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