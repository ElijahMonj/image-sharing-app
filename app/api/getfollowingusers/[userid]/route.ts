
import { NextResponse } from 'next/server';
import prisma from "@/app/libs/prismadb"
interface IParams{
    userid?: string;
}
export async function GET( request: Request,
  { params }: { params: IParams }){
    const {userid}=params;
    
    
  try {
    if(!userid){
      return new NextResponse("Invalid Request");
    }
      const user = await prisma.user.findUnique({
          where:{
              id:userid
          },
         
      })
    return NextResponse.json(user?.following);
      
  } catch (error) {
      return new NextResponse('Internal Error', {status:500});
  }
}

