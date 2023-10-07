import {getServerSession} from 'next-auth';
import { authOptions } from '@/app/authOptions'
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server"
import getSession from './getSession';

const getPostComments = async (postId:string) =>{
    try {
        const session = await getSession() 
        if(!session?.user?.email){
            return null;
        }
        const comments = await prisma.comment.findMany({
            where:{
                postId:postId
            }
        })

        return comments
    } catch (error:any) {
        return null
    }
    
}
export default getPostComments;