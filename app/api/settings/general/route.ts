import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
import { revalidatePath } from 'next/cache'
export async function POST(request:Request){
    try {
        const body=await request.json();
        const {id,name,image,bio}=body;
        const updatedProfile = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
              name,
              image,
              bio
            },
          })
        revalidatePath('/', 'layout')
        return NextResponse.json(updatedProfile);
        
    } catch (error) {
        console.log(error,'POST_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}
