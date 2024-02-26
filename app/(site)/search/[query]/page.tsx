
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { Toaster } from "react-hot-toast";
import Results from "./Results";

interface IParams {
    query: string;
};

const Search = async ({params}:{params:IParams}) => {
    
    const currentUser = await getCurrentUser();
    const query = decodeURIComponent(params.query).replace(/[&\/\\#,+()$~%.'"*?<>{}]/g, "") 
    
    const searchedPosts = await prisma.post.findMany({
        where: {
            caption:
            { 
                contains: query as string,
                mode: 'insensitive', 
            }, 
            authorId:{not: currentUser?.id}
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
    const searchedUsers = await prisma.user.findMany({
        where: {
            name:
            { 
                contains: query as string,
                mode: 'insensitive', 
            },
            id:{not: currentUser?.id}
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
                <Results 
                    currentUser={currentUser}
                    searchedPosts={searchedPosts}
                    searchedUsers={searchedUsers}
                    users={users}
                />        
            </div>
            <Toaster />
        </>
     );
}
 
export default Search;