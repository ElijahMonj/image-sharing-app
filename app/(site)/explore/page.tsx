
import { Toaster } from "react-hot-toast";
import getCurrentUser from "../../actions/getCurrentUser";

import Grid from "./grid";
import prisma from "@/app/libs/prismadb";
const Explore = async () => {
    const currentUser = await getCurrentUser();
    const posts = await prisma.post.findMany({
        where: {
            NOT:{
                authorId:currentUser?.id
            }
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
    const users = await prisma.user.findMany({
        where:{
            id: { in: currentUser?.following },
        }
    })
    return ( 
        <>
            <div className="w-full">
                <div className="flex flex-col w-full lg:max-w-[40rem] lg:absolute md:max-w-[40rem] sm:max-w-[40rem] left-0 right-0 items-center m-auto mt-16">
                    <Grid currentUser={currentUser} posts={posts.reverse()} users={users}/>
                </div>            
            </div>
            <Toaster />
        </>
     );
}
 
export default Explore;