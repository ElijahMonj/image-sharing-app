import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
export async function POST(request:Request){  
    try { 
        const body=await request.json();
        const{
            ownerId,
            notifierId,
            postId,
        }=body;

        const share= await prisma.notification.create({
            data: {
                owner:{
                    connect:{
                        id:ownerId
                    }
                },
                notifier:{
                    connect:{
                        id:notifierId as string
                    }
                },
                link:`/post/${postId}`,
                type:"share",
            },
          })
        return NextResponse.json(share);
        
    } catch (error) {
        console.log(error,'POST_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}
