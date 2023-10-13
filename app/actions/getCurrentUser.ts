import {getServerSession} from 'next-auth';
import { authOptions } from '@/app/authOptions'
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server"
import getSession from './getSession'

const getCurrentUser=async()=>{
    function getBetterImage(link:null|string|undefined):null|string|undefined{
        if(link?.includes('google')){
            return link.replace("s96-c", "s1000-c")
        }else{
            return link
        }
    }
    async function checkAccount(userData:any){
        const accountUser = await prisma.account.findUnique({
             where:{
                  email: userData.email as string
              },
              include:{ 
                    posts:true
              }
              
         })
        if(!accountUser){
            const newAccountUser=await prisma.account.create({
                data:{            
                    name:userData.name,
                    email:userData.email,
                    image:userData.image,
                    followers:[],
                    following:[]
                },
                
            })
            return newAccountUser
        }else{
            return accountUser
        }
    }
   
    try {
        
        const session = await getSession()

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

                const newSocialUser=await prisma.socialUser.create({
                    data:{            
                        name:session.user.name,
                        email:session.user.email,
                        image:getBetterImage(session.user.image)
                    }
                })
                return checkAccount(newSocialUser)
                
            }
            return checkAccount(currentSocialUser)
            
        }
        if(!currentUser){
            return null
        }
        return checkAccount(currentUser)
    } catch (error:any) {
        return null
    }
}

export default getCurrentUser;