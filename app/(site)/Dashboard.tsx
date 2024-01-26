
import Suggested from '../Components/Suggested';
import Newsfeed from '../Components/Newsfeed/Newsfeed';
import getCurrentUser from "../actions/getCurrentUser";
import Notifications from '../Components/Notifications';
import prisma from "@/app/libs/prismadb";
const Dashboard = async () => {
    const currentUser = await getCurrentUser();
    const userData = await prisma.user.findUnique({
        where:{
            id: currentUser?.id
        }
    });
    return ( 
        <>    
            <div className="left-0 right-0 items-center m-auto w-full lg:w-3/6">
                    <Newsfeed currentUser={userData}/>
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