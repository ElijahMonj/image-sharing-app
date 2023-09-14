import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
export async function POST(request:Request){
    
    try {
        
        const body=await request.json();
        const{
            authorId,
            caption,
            tagged,
            image,
        }=body;

        const post=await prisma.post.create({
            data:{            
                authorId,
                caption,
                tagged,
                image,
                likes:[] 
            }
        })
        return NextResponse.json(post);
        
    } catch (error) {
        console.log(error,'POST_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}
