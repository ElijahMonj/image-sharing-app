
import prisma from "@/app/libs/prismadb";
import { revalidatePath } from 'next/cache';
import { NextResponse } from "next/server";
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
        revalidatePath('/')
        return new NextResponse('Success', {status:200});
        
    } catch (error) {
        console.log(error,'POST_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}
