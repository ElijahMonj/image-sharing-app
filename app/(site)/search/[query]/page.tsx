import NavigationBar from "@/app/Components/NavigationBar";
import UtilityBar from "@/app/Components/UtilityBar";
import getCurrentUser from "@/app/actions/getCurrentUser";
import React from "react";
import PostCard from "../../profile/Components/PostCard";
import PostModal from "@/app/Components/PostModal/PostModal";
import prisma from "@/app/libs/prismadb";
import Empty from "./Empty";
import Image from "next/image";
import Link from "next/link";
interface IParams {
    query: string;
};


const Search = async ({params}:{params:IParams}) => {
    const currentUser = await getCurrentUser();
    const posts = await prisma.post.findMany({
        where: {
            caption:
            { 
                contains: params.query,
                mode: 'insensitive', 
            },
        }
    })
    const users = await prisma.user.findMany({
        where: {
            name:
            { 
                contains: params.query,
                mode: 'insensitive', 
            },
        }
    })
    console.log(users)
    return ( 
         <>
            <div className="w-full">
                <div className="flex flex-col w-full lg:max-w-[40rem] lg:absolute md:max-w-[40rem] sm:max-w-[40rem] left-0 right-0 items-center m-auto mt-16">
                    <div>Search: {params.query}</div>
                    <>
                    {(posts.length==0 && users.length==0) ? 
                        <Empty/>
                        :
                        <>
                        {users.length==0 ? <></>:
                        <>
                            <div>People</div>
                            {users.map(user => {
                                return (
                                    <div key={user.id} className="w-full bg-secondary flex">
                                        <div className="flex-shrink-0">
                                            <Link href={'/profile/'+user.id}>
                                            <Image className="w-12 h-12 rounded-full" width={32} height={32} src={user?.image as string} alt="User Avatar"/>
                                            </Link>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium truncate">
                                            {user.name}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            {user.email}
                                            </p>
                                        </div>
                                        <Link className="badge badge-neutral" href={'/profile/'+user.id}>View</Link>
                                    </div>
                                );
                            })} 
                        </>
                        }
                        {posts.length==0 ? <></>:
                        <>
                        <div>Posts</div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                            {/*@ts-ignore*/}
                            {posts.map(post => {
                                return (
                                <React.Fragment key={post.id}>
                                    <PostCard post={post}/>
                                    <PostModal currentUser={currentUser} postId={post.id}/> 
                                </React.Fragment> 
                                );
                                
                            })} 
                        </div>
                        </>
                        }
                        
                        </>
                        
                    }
                </>
                </div>            
            </div>
        </>
     );
}
 
export default Search;