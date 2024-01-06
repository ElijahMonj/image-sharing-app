import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
import getSession from '@/app/actions/getSession'
export async function GET(request:Request){
   
    try {
        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }
        const currentUser = await prisma.user.findUnique({
            where:{
                email: session.user.email as string
            },
        });
        const taggableUsers = currentUser?.followers.filter((user: any) => currentUser?.following.includes(user));
        const users = await prisma.user.findMany({
            where: {
                id: { in: taggableUsers },
            }
        })
        return NextResponse.json(users);
        
    } catch (error) {
        console.log(error,'GET_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}