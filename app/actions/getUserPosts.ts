import {getServerSession} from 'next-auth';
import { authOptions } from '@/app/authOptions'
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server"
import getSession from './getSession';

const getUserPosts = async () =>{
    try {
        const session = await getSession() 

        if(!session?.user?.email){
            return null;
        }
        const getUserId = await prisma.account.findUnique({
            where:{
                email:session?.user?.email
            }
        })
        
        const posts = await prisma.post.findMany({
            where: {
                authorId:getUserId?.id
              },
              include:{
                author:true
            }
        })
        
        return posts
    } catch (error:any) {
        return null
    }
    
}
export default getUserPosts;