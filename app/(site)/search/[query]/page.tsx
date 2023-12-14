import NavigationBar from "@/app/Components/NavigationBar";
import UtilityBar from "@/app/Components/UtilityBar";
import getCurrentUser from "@/app/actions/getCurrentUser";
import React from "react";
import PostCard from "../../profile/Components/PostCard";
import PostModal from "@/app/Components/PostModal/PostModal";
import prisma from "@/app/libs/prismadb";
import Empty from "./Empty";

interface IParams {
    query: string;
};


const Search = async ({params}:{params:IParams}) => {
    const currentUser = await getCurrentUser();
    const posts = await prisma.post.findMany({
        where: {
            caption:{ contains: params.query }
        }
    })
    return ( 
         <>
            <div className="w-full">
                <div className="flex flex-col w-full lg:max-w-[40rem] lg:absolute md:max-w-[40rem] sm:max-w-[40rem] left-0 right-0 items-center m-auto mt-16">
                    <div>Search: {params.query}</div>
                    <>
                    {posts.length==0 ?
                        <Empty/>
                        :
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
                    }
                </>
                </div>            
            </div>
        </>
     );
}
 
export default Search;