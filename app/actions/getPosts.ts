import {getServerSession} from 'next-auth';
import { authOptions } from '@/app/authOptions'
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server"
import getSession from './getSession';

const getPosts = async () =>{
    try {
        const session = await getSession() 
        if(!session?.user?.email){
            return null;
        }
        const posts = await prisma.post.findMany({
            include:{
                author:true
            }
        })

        return posts
    } catch (error:any) {
        return null
    }
    
}
export default getPosts;