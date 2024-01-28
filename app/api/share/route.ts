import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
export async function POST(request:Request){  
    try { 
        const body=await request.json();
        const{
            ownerId,
            userName,
            userImage,
            link,
        }=body;

        const share=await prisma.notification.create({
            data: {
                ownerId:ownerId,
                userName:userName,
                userImage:userImage,
                link:link,
                type:"share",
            },
          })
        return NextResponse.json(share);
        
    } catch (error) {
        console.log(error,'POST_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}
