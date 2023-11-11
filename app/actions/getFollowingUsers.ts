import {getServerSession} from 'next-auth';
import { authOptions } from '@/app/authOptions'
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server"
import getSession from './getSession';

const getFollowingUsers = async () =>{
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

        return user?.following
    } catch (error:any) {
        return null
    }
    
}
export default getFollowingUsers;