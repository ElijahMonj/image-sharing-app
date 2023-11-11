
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
     {/*
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
                    following:[],
                    saved:[],
                    tagged:[]
                },
                
            })
            console.log("New account user created:")
            console.log(newAccountUser)
            return newAccountUser
        }else{
            return accountUser
        }
    }
    */}
    {/* 
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
        if((session)&&(!currentUser)){
            
            const currentSocialUser = await prisma.socialUser.findUnique({
                where:{
                    email:session.user.email
                }
            })
            console.log("Meron bang laman sa scoailuser?")
            console.log(currentSocialUser)
            if(!currentSocialUser){

                const newSocialUser=await prisma.socialUser.create({
                    data:{            
                        name:session.user.name,
                        email:session.user.email,
                        image:getBetterImage(session.user.image)
                    }
                })
                console.log("New Social User Created")
                console.log(newSocialUser)
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
    */}
    try {
        const session = await getSession();

        if(!session?.user?.email){
            return null;
        }
        const currentUser = await prisma.user.findUnique({
            where:{
                email: session.user.email as string
            },
            include:{
                posts:true
            }
        });

        if(!currentUser){
            return null
        }
        return currentUser;
    } catch (error:any) {
        return null
    }
}

export default getCurrentUser;