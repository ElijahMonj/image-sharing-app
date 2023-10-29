
import prisma from "@/app/libs/prismadb";

import getSession from './getSession';

const getPosts = async () =>{
    try {
        const session = await getSession() 
        if(!session?.user?.email){
            return null;
        }
        const posts = await prisma.post.findMany({
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
export default getPosts;