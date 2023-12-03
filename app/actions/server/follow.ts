'use server'
import prisma from "@/app/libs/prismadb"
import { revalidatePath } from "next/cache"
export async function follow(followingUserId:string,currentUserId:string){
    const currentUser = await prisma.user.findUnique({
        where:{
            id:currentUserId
        }
    })

    if(!currentUser?.following.includes(followingUserId)){
        await prisma.user.update({
            where:{
                id:currentUserId
            },
            data:{
                following:{
                    push:followingUserId
                }
            }
        }) 
    }
    const otherUser  = await prisma.user.findUnique({
        where:{
            id:followingUserId
        }
    })
    if(!otherUser?.followers.includes(currentUserId)){
        await prisma.user.update({
            where:{
                id:followingUserId
            },
            data:{
                followers:{
                    push:currentUserId
                }
            }
        })
    } 
    revalidatePath('/profile')
}
export async function unfollow(followingUserId:string,currentUserId:string){
    //removing id from follower array
    const unfollowingUser=await prisma.user.findUnique({
        where:{
            id:followingUserId
        }
    })
    const currentFollowers:any = unfollowingUser?.followers 
    const index = currentFollowers.indexOf(currentUserId);
    currentFollowers.splice(index, 1);
    await prisma.user.update({
        where:{
            id:followingUserId
        },
        data:{
            followers: currentFollowers
        }
    })
     //removing id from following array
     const user=await prisma.user.findUnique({
        where:{
            id:currentUserId
        }
    })
    const currentFollowing:any = user?.following 
    const i = currentFollowing.indexOf(followingUserId);
    currentFollowing.splice(i, 1);
    await prisma.user.update({
        where:{
            id:currentUserId
        },
        data:{
            following: currentFollowing
        }
    })
    revalidatePath('/profile')
}