import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
export async function POST(request:Request){
    
    try {
        
        const body=await request.json();
        const{
            authorId,
            post,
            commentText,
        }=body;

        const comment=await prisma.comment.create({
            data:{            
                post:{
                    connect:{
                        id:post
                    }
                },
                author:{
                    connect:{
                        id:authorId
                    }
                },

                commentText,
                likes:[] 
            }
        })
        return NextResponse.json(comment);
        
    } catch (error) {
        console.log(error,'POST_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}
