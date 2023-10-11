import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse } from 'next/server';
import prisma from "@/app/libs/prismadb"
interface IParams{
  postId?: string;
}
export async function GET( request: Request,
  { params }: { params: IParams }){
    const {postId}=params;
    
    
  try {
    if((!postId)||(postId=='undefined')){
      
      return new NextResponse("loading");
    }
      const comments = await prisma.comment.findMany({
          where:{
              postId:postId
          },
          include:{
            author:true,
          }
      })
    return NextResponse.json(comments);
      
  } catch (error) {
      return new NextResponse('Internal Error', {status:500});
  }
}

