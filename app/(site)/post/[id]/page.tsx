
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { Toaster } from "react-hot-toast";
import PostCard from "./PostCard";
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
            comments:{
                include: {
                    author: true,
                }
            },
            tagged:true
        }
    })
    const user = await prisma.user.findUnique({
        where:{
            id:currentUser?.id
        }
    })
    const users = await prisma.user.findMany({
        where:{
            id: { in: user?.following },
        }
    })
    return ( 
        <>
        <div className="flex flex-col w-full items-center h-min m-auto mt-20 absolute"> 
            <PostCard
            postData={post}
            currentUser={user} users={users}/>
        </div>
        <Toaster />
        </>
        
     );
}
 
export default Post;