import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
export async function POST(request:Request){
    
    try {
        
        const body=await request.json();
        const{
            author,
            caption,
            tagged,
            image,
            
        }=body;
        if(tagged==""){
            const post=await prisma.post.create({
                data:{            
                    author:{
                        connect:{
                            id:author
                        }
                    },
                    caption,
                    image,
                    likes:[] 
                }
            })
            return NextResponse.json(post);
        }else{
            const post=await prisma.post.create({
                data:{            
                    author:{
                        connect:{
                            id:author
                        }
                    },
                    caption,
                    tagged:{
                        connect:{
                            id:tagged
                        }
                    },
                    image,
                    likes:[] 
                }
            })
            return NextResponse.json(post);
        }   
    } catch (error) {
        console.log(error,'POST_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}
