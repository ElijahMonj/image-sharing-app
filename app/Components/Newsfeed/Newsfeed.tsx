
import NewsfeedCard from "./NewsfeedCard";
import { GoPersonAdd } from "react-icons/go";
import prisma from "@/app/libs/prismadb";

interface NewsfeedProps{
    currentUser:any
}
const Newsfeed:React.FC<NewsfeedProps> = async ({currentUser}) => {
    
    const posts = await prisma.post.findMany({
        where:{
            authorId: {in: currentUser?.following }
        },
        include:{
            author:true,
            comments:true
        }
    })
    const user = await prisma.user.findUnique({
        where:{
            id:currentUser.id
        }
    })
    
    
    return ( 
        <div className="flex flex-col w-full items-center h-min m-auto mt-20"> 
               
                
                    {posts?.length==0 ? 
                    <div className="flex flex-col w-96">
                        <div className="grid card rounded-box place-items-center ">
                            <GoPersonAdd size={120} className="text-secondary ms-7"/></div>                       
                        <div className="grid card rounded-box place-items-center text-center text-secondary">Your feed is empty, start following your favorite people!</div>
                    </div> 
                  : 
                    <> 
                        {posts?.reverse().map(post => (
                            <NewsfeedCard
                            currentUser={user} 
                            key={post.id}
                            postId={post.id}
                            />
                        ))} 
                    </>
                    }    
                               
        </div>
     );
}
 
export default Newsfeed;