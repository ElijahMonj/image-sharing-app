
import getCurrentUser from "@/app/actions/getCurrentUser";
import React from "react";
import prisma from "@/app/libs/prismadb";
import Results from "./Results";
import { Toaster } from "react-hot-toast";
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
        where: {
            name:
            { 
                contains: params.query,
                mode: 'insensitive', 
            },
        }
    })
    
    return ( 
         <>
            <div className="w-full">
                <Results 
                    currentUser={currentUser}
                    posts={posts}
                    users={users}
                />        
            </div>
            <Toaster />
        </>
     );
}
 
export default Search;