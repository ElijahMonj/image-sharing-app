
import getCurrentUser from "@/app/actions/getCurrentUser";
import ProfileContent from "../Components/ProfileContent";
import ProfileHeader from "../Components/ProfileHeader";

import prisma from "@/app/libs/prismadb";
import { Toaster } from "react-hot-toast";

interface IParams {
    profileId: string;
};

const user = async ({params}:{params:IParams}) => {
    const currentUser = await getCurrentUser();

    const userData = await prisma.user.findUnique({
        where:{
            id: params.profileId
        },
        include:{
            posts:true
        }
    });
    const userPosts = await prisma.post.findMany({
            where: {
                authorId:params.profileId
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
    const savedPosts = await prisma.post.findMany({
        where: {
            id: { in: userData?.saved }
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
    const taggedPosts = await prisma.post.findMany({
        where: {
            taggedId: params.profileId
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
    const allPosts = userPosts.concat(savedPosts, taggedPosts);
    return ( 
         <>
            <div className="w-full">
                <div className="flex flex-col w-full lg:max-w-[40rem] lg:absolute md:max-w-[40rem] sm:max-w-[40rem] left-0 right-0 items-center m-auto mt-16">
                    <ProfileHeader data={userData} isCurrentUser={params.profileId==currentUser?.id} currentUser={currentUser} />
                    <div className="divider mb-0 "></div>
                        <ProfileContent users={users} allPosts={allPosts} userPosts={userPosts.reverse()} currentUser={currentUser} savedPosts={savedPosts.reverse()} taggedPosts={taggedPosts.reverse()}/>
                </div>            
            </div>
            <Toaster />
        </>
     );
}
 
export default user;