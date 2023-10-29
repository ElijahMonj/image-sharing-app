import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
export async function POST(request:Request){
    
    try {
        
        const body=await request.json();
        const{followingUser,followerUser}=body;

        const addFollowers =await prisma.account.update({
            where:{
                id:followingUser
            },
            data:{
                followers:{
                    push:followerUser
                }
            }
        })
        const addFollowing =await prisma.account.update({
            where:{
                id:followerUser
            },
            data:{
                following:{
                    push:followingUser
                }
            }
        }) 
        return NextResponse.json(addFollowing);
            
    } catch (error) {
        console.log(error,'POST_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}
