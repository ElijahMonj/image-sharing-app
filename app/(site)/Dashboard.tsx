
import prisma from "@/app/libs/prismadb";
import Newsfeed from '../Components/Newsfeed/Newsfeed';
import Suggested from '../Components/Suggested';
import getCurrentUser from "../actions/getCurrentUser";
import getSession from "@/app/actions/getSession";
const Dashboard = async () => {
    const session = await getSession();
    if(!session?.user?.email){
        return null;
    }
    const userData = await prisma.user.findUnique({
        where: {
            email: session.user.email as string
        }
    })
    const posts = await prisma.post.findMany({
        where:{
            authorId: {in: userData?.following }
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
            id: { in: userData?.following },
        }
    })
    
    return ( 
        <>    
            <div className="left-0 right-0 items-center m-auto w-full lg:w-3/6 h-screen">
                    <Newsfeed currentUser={userData} posts={posts.reverse()} users={users}/>
                </div>
               
                 <div className="w-1/6 hidden lg:block">
                    <div className='top-0 right-0 fixed mt-20'>
                        <Suggested/>
                    </div>        
                </div>
                
        </>
    );
}
 
export default Dashboard;