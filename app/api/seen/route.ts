import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

export async function POST(request:Request){
    try {
        const body=await request.json();
        const {id}=body;
        const seen = await prisma.notification.update({
            where: {
                id: id,
            },
            data: {
              seen:true
            },
          })
        return NextResponse.json(seen);
        
    } catch (error) {
        console.log(error,'POST_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}