import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"
export async function POST(request:Request){
    
    try {
        
        const body=await request.json();
        const{followingUser,followerUser}=body;
        //removing id from follower array
        const unfollowingUser=await prisma.user.findUnique({
            where:{
                id:followingUser
            }
        })
        const currentFollowers:any = unfollowingUser?.followers 
        const index = currentFollowers.indexOf(followerUser);
        const x = currentFollowers.splice(index, 1);
        const removeFollowers =await prisma.user.update({
            where:{
                id:followingUser
            },
            data:{
                followers: currentFollowers
            }
        })
         //removing id from following array
         const user=await prisma.user.findUnique({
            where:{
                id:followerUser
            }
        })
        const currentFollowing:any = user?.following 
        const i = currentFollowing.indexOf(followingUser);
        const remove = currentFollowing.splice(i, 1);
        const removeFollowing =await prisma.user.update({
            where:{
                id:followerUser
            },
            data:{
                following: currentFollowing
            }
        })

        return NextResponse.json(removeFollowers);
            
    } catch (error) {
        console.log(error,'POST_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}
