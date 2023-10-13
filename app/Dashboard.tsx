import NavigationBar from "./Components/NavigationBar";
import UtilityBar from "./Components/UtilityBar";
import Suggested from './Components/Suggested';
import Newsfeed from './Components/Newsfeed/Newsfeed';
import getCurrentUser from "./actions/getCurrentUser";
import getPosts from "./actions/getPosts";
const Dashboard = async () => {
    const currentUser = await getCurrentUser();
    const posts = await getPosts();
    return ( 
        <>
            <NavigationBar data={currentUser}/>
            <div className="flex justify-between w-full z-50">
            
            <UtilityBar data={currentUser} /> 
            <div className="w-full lg:w-3/6">
                <Newsfeed posts={posts} currentUser={currentUser}/>
            </div>
            <div className="w-1/6 hidden lg:block">
                <div className='top-0 right-0 fixed mt-20'>
                    <Suggested/>
                </div>        
            </div>
            
            </div>
        </>
    );
}
 
export default Dashboard;