import {getServerSession} from 'next-auth';
import { authOptions } from '@/app/authOptions'
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server"
import getSession from './getSession'

const getUser=async(userId:string)=>{
    try {
        
        const session = await getSession()

        if(!session?.user?.email){
            return null;
        }
        const userData = await prisma.user.findUnique({
            where:{
                id: userId
            },
            include:{
                posts:true
            }
        });
        
        return userData
    } catch (error:any) {
        return null
    }
}

export default getUser;