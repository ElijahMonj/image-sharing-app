import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"
import bcrypt from 'bcrypt';


export async function POST(request:Request){
  
    try {
        
        const body=await request.json();
        const{
            name,
            email,
            password,
        }=body;
       
        if(!email||!name||!password){
            return new NextResponse('Missing info',{status:400})
        }
        const hashedPassword=await bcrypt.hash(password,12);

        const newUser=await prisma.user.create({
            data:{            
                name,
                email,
                image:'/../images/defaultAvatar.jpg',
                password:hashedPassword,    
            }
        })
        console.log(newUser)
        return NextResponse.json(newUser);
        
    } catch (error) {
        console.log(error,'REGISTRATION_ERROR')
        return new NextResponse('Internal Error', {status:500});
    }
}
