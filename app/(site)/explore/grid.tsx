
import Image from 'next/image'
import PostModal from "../../Components/PostModal/PostModal";
import React from 'react';
import PostCard from '../profile/Components/PostCard';
import prisma from "@/app/libs/prismadb";
import Empty from './Empty';
interface GridProps{
    currentUser:any
}

const Grid:React.FC<GridProps> = async ({currentUser}) => {
    const posts = await prisma.post.findMany({
        where: {
            NOT:{
                authorId:currentUser.id
            }
          },
          include:{
            author:true,
            comments:true
        }
    })
    
    return ( 
        <>
            {posts.length==0 ?
                <Empty/>
                :
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                    {/*@ts-ignore*/}
                    {posts.reverse().map(post => {
                        return (
                        <React.Fragment key={post.id}>
                            <PostCard post={post}/>
                            <PostModal currentUser={currentUser} postId={post.id}/> 
                        </React.Fragment> 
                        );
                        
                    })} 
                </div>
            }
        </>
        
     );
}
 
export default Grid;