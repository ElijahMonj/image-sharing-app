import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
export async function POST(request:Request){
    
    try {
        
        const body=await request.json();
        const {id,theme}=body;
        const updatedTheme = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
              theme: theme,
            },
          })
        return NextResponse.json(updatedTheme);
        
    } catch (error) {
        console.log(error,'POST_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}
