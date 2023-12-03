
import NewsfeedCard from "./NewsfeedCard";
import PostModal from '../PostModal/PostModal';

import prisma from "@/app/libs/prismadb";
import LoadingSkeleton from "../LoadingSkeleton";
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
    //const currentPost='loading';
    
    
    return ( 
        <div className="flex flex-col w-full items-center h-min m-auto mt-20"> 
               
                
                    {posts?.length==0 ? <div>no posts</div> : 
                    <> 
                        {posts?.map(post => (
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