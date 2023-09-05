import {getServerSession} from 'next-auth';
import { authOptions } from '@/app/authOptions'
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server"

const getCurrentUser=async()=>{
    function getBetterImage(link:null|string|undefined):null|string|undefined{
        if(link?.includes('google')){
            return link.replace("s96-c", "s1000-c")
        }else{
            return link
        }
    }
    try {
        
        const session = await getServerSession(authOptions)

        if(!session?.user?.email){
            return null;
        }
        const currentUser = await prisma.user.findUnique({
            where:{
                email: session.user.email as string
            }
        });
        if(session&&!currentUser){
            
            const currentSocialUser =await prisma.socialUser.findUnique({
                where:{
                    email:session.user.email
                }
            })
            if(!currentSocialUser){
                
                const imageURL = ()=>{
                    if(session?.user?.image?.includes('google')){
                        return "GALING SA GOOGLE"
                    }else{
                        return "di galing sa google"
                    }
                }


                const newSocialUser=await prisma.socialUser.create({
                    data:{            
                        name:session.user.name,
                        email:session.user.email,
                        image:getBetterImage(session.user.image)
                    }
                })
                console.log("Signed in with social:")
                console.log(newSocialUser);
                return newSocialUser
            }
            return currentSocialUser
        }
        if(!currentUser){
            return null
        }
        return currentUser;
    } catch (error:any) {
        return null
    }
}

export default getCurrentUser;