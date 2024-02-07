
import NewsfeedCard from "@/app/Components/Newsfeed/NewsfeedCard";
import getCurrentUser from "@/app/actions/getCurrentUser";
import React from "react";
import PostCard from "./PostCard";
import prisma from "@/app/libs/prismadb";
interface IParams {
    id: string;
};

const Post = async ({params}:{params:IParams}) => {
    
    const currentUser = await getCurrentUser();
    const post = await prisma.post.findUnique({
        where: {
            id: params.id,
        },
        include:{
            author:true,
            comments:true
        }
    })
    const user = await prisma.user.findUnique({
        where:{
            id:currentUser?.id
        }
    })
    
    return ( 
        <div className="flex flex-col w-full items-center h-min m-auto mt-20 absolute"> 
            <PostCard
            postData={post}
            currentUser={user}/>
        </div>
     );
}
 
export default Post;