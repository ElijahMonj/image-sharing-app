import bcrypt from 'bcrypt';
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
import { revalidatePath } from 'next/cache'
export async function POST(request:Request){
    try {
        const body=await request.json();
        const {id,password}=body;
        
        const hashedPassword=await bcrypt.hash(password,12);
        const updatedPassword = await prisma.user.update({
            where: {
                id: id,
            },
            data: {
              password:hashedPassword
            },
          })
        revalidatePath('/settings')
        return NextResponse.json(updatedPassword);
        
    } catch (error) {
        console.log(error,'POST_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}
