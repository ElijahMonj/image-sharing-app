import NavigationBar from "../Components/NavigationBar";
import UtilityBar from "../Components/UtilityBar";
import getCurrentUser from "../actions/getCurrentUser";
import getPosts from "../actions/getPosts";
import Grid from "./grid";

const Explore = async () => {
    const currentUser = await getCurrentUser();
    const posts = await getPosts();
    return ( 
        <>
        <NavigationBar data={currentUser}/>
        <div className="flex justify-between w-full">  
            <UtilityBar data={currentUser}/> 
            <div className="w-full">
                <div className="flex flex-col w-full lg:max-w-[40rem] lg:absolute md:max-w-[40rem] sm:max-w-[40rem] left-0 right-0 items-center m-auto mt-16">
                    <Grid posts={posts} currentUser={currentUser}/>
                </div>            
            </div>
        </div>
        </>
     );
}
 
export default Explore;